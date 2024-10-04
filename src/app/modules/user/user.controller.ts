import { Request, Response } from 'express';
import { studentValidationSchema } from '../student/student.validation';
import { UserServices } from './user.service';
import { UserValidation } from './user.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    //creating data validation using zod :

    const { password, student: studentData } = req.body;

    // data validation using joi :
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod :
    // const zodparsedData = studentValidationSchema.parse(studentData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'An error occurred while creating the student',
    //     error: error.details,
    //   });
    // }
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the student',
      error: err,
    });
  }
};

export const userControllers = {
  createStudent,
};
