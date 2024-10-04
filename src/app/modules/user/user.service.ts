import config from '../../config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  //matually set generated id
  userData.id = '2030100001';
  //create a user :
  const newUser = await User.create(userData);

  //create a student :
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference -id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
