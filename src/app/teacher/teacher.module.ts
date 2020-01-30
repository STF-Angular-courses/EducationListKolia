import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherItemComponent } from './teacher-item/teacher-item.component';
import { TeacherShowComponent } from './teacher-show/teacher-show.component';



@NgModule({
  declarations: [TeacherListComponent, TeacherItemComponent, TeacherShowComponent],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
