import Joi from 'joi';
import { Guardian, LocalGuardian, UserName } from './student.interface';

const userNameValidationSchema = Joi.object<UserName>({
  firstName: Joi.string()
    .max(20)
    .required()
    .trim()
    .custom((value, helpers) => {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      if (firstNameStr !== value) {
        return helpers.error('any.custom', {
          message: 'First name should start with a capital letter',
        });
      }
      return value;
    }),
  middleName: Joi.string().trim().allow(''),
  lastName: Joi.string()
    .required()
    .trim()
    .regex(/^[A-Za-z]+$/)
    .message('Last name must contain only letters'),
});
// Define Joi schema for Guardian
const guardianValidationSchema = Joi.object<Guardian>({
  fatherName: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  motherName: Joi.string().required(),
  motherContactNo: Joi.string().required(),
  motherOccupation: Joi.string().required(),
});

// Define Joi schema for LocalGuardian
const localGuardianValidationSchema = Joi.object<LocalGuardian>({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Define Joi schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#value} is not valid',
  }),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  parmanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().uri().optional(),
  isActive: Joi.string().valid('Active', 'blocked').default('Active'),
});

export default studentValidationSchema;
