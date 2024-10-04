import { z } from 'zod';

// UserName Schema Validation
const userNameSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last name is required' }),
});

// Guardian Schema Validation
const guardianSchema = z.object({
  fatherName: z.string().min(1, { message: "Father's name is required" }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's contact number is required" }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's occupation is required" }),
  motherName: z.string().min(1, { message: "Mother's name is required" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's contact number is required" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's occupation is required" }),
});

// LocalGuardian Schema Validation
const localGuardianSchema = z.object({
  name: z.string().min(1, { message: "Guardian's name is required" }),
  occupation: z
    .string()
    .min(1, { message: "Guardian's occupation is required" }),
  contactNo: z
    .string()
    .min(1, { message: "Guardian's contact number is required" }),
  address: z.string().min(1, { message: "Guardian's address is required" }),
});

// Main Student Schema Validation
const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
  password: z.string().max(20),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other'], {
    message: 'Invalid gender value',
  }),
  dateOfBirth: z.string().optional(),
  email: z.string().email({ message: 'Invalid email address' }),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency contact number is required' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, { message: 'Present address is required' }),
  parmanentAddress: z
    .string()
    .min(1, { message: 'Permanent address is required' }),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['Active', 'inActive']).default('Active'), // Adjust to match TypeScript enum
  isDeleted: z.boolean().default(false),
});
export { studentValidationSchema };
