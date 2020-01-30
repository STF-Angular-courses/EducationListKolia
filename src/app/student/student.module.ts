import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentShowComponent } from './student-show/student-show.component';



@NgModule({
  declarations: [StudentItemComponent, StudentListComponent, StudentShowComponent],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
