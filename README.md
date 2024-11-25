# Feifan Tech Contact Form Application

A full-stack application for managing contact form submissions with an admin interface.

## Features

- Contact form for user submissions
- Admin interface for managing submissions
- Secure authentication system
- MongoDB database integration
- JWT-based authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

## Setup Instructions

1. Clone the repository
```bash
git clone [repository-url]
cd feifan-tech
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
- Create a `.env` file in the root directory
- Add the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Create admin user
```bash
node server/scripts/createAdmin.js
```
This will create an admin user with:
- Username: admin
- Password: admin123

**Important:** This step is required before you can log in to the admin interface.

5. Start the application

Backend server:
```bash
npm run server
```

Frontend development server:
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Usage

1. Public Contact Form
- Access the contact form at http://localhost:3000
- Fill in the required fields and submit

2. Admin Interface
- Access the admin login at http://localhost:3000/login
- Log in with the admin credentials created in step 4
- View and manage contact form submissions

## Development

### Available Scripts

#### `npm start`
Runs the frontend in development mode at http://localhost:3000

#### `npm run server`
Runs the backend server at http://localhost:5000

#### `npm run build`
Builds the frontend for production

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
