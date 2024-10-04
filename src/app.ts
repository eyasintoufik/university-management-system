import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { studentRoutes } from './app/modules/student/student.route';
import { StudentController } from './app/modules/student/student.controller';
import { userRoutes } from './app/modules/user/user.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

//application routes
// studentRoutes.use('api/v1/students', StudentController.createStudent);
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', userRoutes);

const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to Student Management Project',
  });
};

app.get('/', getAController);

export default app;
