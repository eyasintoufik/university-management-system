import { z } from 'zod';

// Define Zod schema for UserName
const userNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(), // Optional field for middleName
});

// Define Zod schema for Guardian
const guardianSchema = z.object({
  fatherName: z.string(),
  fatherContactNo: z.string(),
  fatherOccupation: z.string(),
  motherName: z.string(),
  motherContactNo: z.string(),
  motherOccupation: z.string(),
});

// Define Zod schema for LocalGuardian
const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Define Zod schema for Student
const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(), // Optional date of birth
  email: z.string().email(), // Email validation
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(), // Optional blood group
  presentAddress: z.string(),
  parmanentAddress: z.string(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(), // Optional profile image
  isActive: z.enum(['Active', 'inActive']), // Enum for status
});

export default studentValidationSchema;
