import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';
import { z } from 'zod';
import { Guardian, LocalGuardian, UserName } from './student.interface';
import { studentValidationSchema } from './student.validation';

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

const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting students',
      error: error,
    });
  }
};

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
};
