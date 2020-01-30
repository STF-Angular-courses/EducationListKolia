import {TeacherModel} from '../../../teacher/common/model/teacher.model';
import {ClassTeacherModel} from '../../../teacher/common/model/class-teacher.model';

export interface SubjectModel {
  id: number;
  name: string;
  teacher: TeacherModel | ClassTeacherModel;
  time: string;
}
