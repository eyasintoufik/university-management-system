import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      required: true,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

//pre save middleware / hook : will work on crete(), save()
userSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook : we will save the data');
  const user = this;
  //hashing password and save into DB:
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycypt_salt_rounds),
  );
  next();
});

//post save middleware /

userSchema.post('save', function (doc, next) {
  doc.password = '';
  console.log(this, 'post hook : we saved our data');
  next();
});

export const User = model<TUser>('User', userSchema);
