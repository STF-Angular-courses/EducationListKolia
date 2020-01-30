import {StudentModel} from './student.model';

export interface ClassroomModel {
  id: number;
  name: string;
  students: StudentModel[];
}
