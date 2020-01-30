import {TeacherModel} from './teacher.model';
import {ClassroomModel} from '../../../student/common/model/classroom.model';

export interface ClassTeacherModel extends TeacherModel {
  classroom: ClassroomModel;
}

