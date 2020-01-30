import {SubjectModel} from './subject.model';
import {ClassroomModel} from '../../../student/common/model/classroom.model';

export interface ExtraSubjectModel extends SubjectModel {
   classroom: ClassroomModel;
}
