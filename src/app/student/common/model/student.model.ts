import {ClassroomModel} from './classroom.model';
import {SubjectModel} from '../../../timetable/common/model/subject.model';
import {ExtraSubjectModel} from '../../../timetable/common/model/extra-subject.model';

export interface StudentModel{
  id: number;
  name: string;
  extraLessons: ExtraSubjectModel[];
  lessons: SubjectModel[];
}
