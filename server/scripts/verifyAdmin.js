require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const MONGODB_URI = process.env.MONGODB_URI;

async function verifyAdminUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Find admin user
    const adminUser = await User.findOne({ username: 'admin' });
    if (!adminUser) {
      console.log('Admin user does not exist!');
      process.exit(1);
    }

    console.log('Admin user exists with ID:', adminUser._id);
    console.log('Admin user details:', {
      username: adminUser.username,
      isAdmin: adminUser.isAdmin,
      createdAt: adminUser.createdAt
    });

    // Test password match
    const testPassword = 'admin123';
    const isMatch = await adminUser.comparePassword(testPassword);
    console.log('Password match test result:', isMatch);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

verifyAdminUser();
