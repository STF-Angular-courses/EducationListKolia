import {SubjectModel} from '../../../timetable/common/model/subject.model';

export interface TeacherModel {
  id: number;
  name: string;
  age: number;
  position: string;
  subjects: SubjectModel[];
}
