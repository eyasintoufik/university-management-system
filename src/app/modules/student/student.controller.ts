import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';
import { z } from 'zod';
import { Guardian, LocalGuardian, UserName } from './student.interface';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    //creating data validation using zod :

    const { student: studentData } = req.body;

    // data validation using joi :
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod :
    const zodparsedData = studentValidationSchema.parse(studentData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'An error occurred while creating the student',
    //     error: error.details,
    //   });
    // }
    const result = await StudentServices.createStudentIntoDB(zodparsedData);
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
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while getting students',
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while getting students',
      error: err,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
