import {Injectable} from '@angular/core';
import {SubjectModel} from '../../../timetable/common/model/subject.model';
import {ExtraSubjectModel} from '../../../timetable/common/model/extra-subject.model';
import {StudentModel} from '../model/student.model';

@Injectable()
export class StudentService {
  constructor() {
  }

  getTimeTable(): SubjectModel[] {
    return null;
  }
  getExtraLessons(): ExtraSubjectModel[] {
    return null;
  }
  getNextLesson(currentLesson: SubjectModel | ExtraSubjectModel): SubjectModel | ExtraSubjectModel {
    return null;
  }

  addExtraLesson(extraLesson: ExtraSubjectModel) {
    return null;
  }
}
