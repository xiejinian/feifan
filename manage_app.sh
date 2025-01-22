#!/bin/bash

APP_NAME="server-2.1.0.jar"
PID_FILE="app.pid"
LOG_FILE="nohup.out"
TIMEOUT=30  # 等待应用停止的超时时间（秒）

# 获取当前时间（用于计时）
get_current_time() {
    date +%s
}

# 计算时间差（用于计时）
get_elapsed_time() {
    local start_time=$1
    local end_time=$(get_current_time)
    echo $((end_time - start_time))
}

# 显示倒计时
countdown() {
    local remaining_time=$1
    while [ "$remaining_time" -gt 0 ]; do
        echo -ne "Waiting for application to stop... $remaining_time seconds remaining\033[0K\r"
        sleep 1
        remaining_time=$((remaining_time - 1))
    done
    echo -ne "\033[0K\r"  # 清除倒计时行
}

# 启动应用
start() {
    if [ -f "$PID_FILE" ]; then
        echo "Application is already running. PID: $(cat $PID_FILE)"
        exit 1
    fi

    echo "Starting application..."
    local start_time=$(get_current_time)
    #nohup java -jar "$APP_NAME" > "$LOG_FILE" 2>&1 &
    nohup npm run dev > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    echo "Application started with PID: $(cat $PID_FILE)."
    local elapsed_time=$(get_elapsed_time "$start_time")
    echo "Start completed in ${elapsed_time} seconds."
}

# 停止应用
stop() {
    if [ ! -f "$PID_FILE" ]; then
        echo "Application is not running or PID file not found."
        exit 1
    fi

    local PID=$(cat "$PID_FILE")
    echo "Stopping application with PID: $PID..."

    # 发送 SIGTERM 信号，优雅停止
    kill -15 "$PID"
    local start_time=$(get_current_time)

    # 等待应用停止，并显示倒计时
    countdown "$TIMEOUT" &
    local countdown_pid=$!

    while kill -0 "$PID" 2>/dev/null; do
        local elapsed_time=$(get_elapsed_time "$start_time")
        if [ "$elapsed_time" -ge "$TIMEOUT" ]; then
            echo -e "\nTimeout reached. Force killing application..."
            kill -9 "$PID"  # 强制停止
            break
        fi
        sleep 1
    done

    kill "$countdown_pid" 2>/dev/null  # 停止倒计时
    rm -f "$PID_FILE"
    local elapsed_time=$(get_elapsed_time "$start_time")
    echo "Application stopped in ${elapsed_time} seconds."
}

# 重启应用
restart() {
    echo "Restarting application..."
    local start_time=$(get_current_time)
    stop
    start
    local elapsed_time=$(get_elapsed_time "$start_time")
    echo "Restart completed in ${elapsed_time} seconds."
}

# 脚本入口
case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
        ;;
esac
