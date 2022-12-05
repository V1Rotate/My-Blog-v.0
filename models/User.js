import mongoose from 'mongoose';

// This is how I created a User model which is exported and ready for import to components.

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String, // Avatar is not required - that is why it is not an object
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema); //ready to go - exported.
