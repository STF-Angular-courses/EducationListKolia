import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherShowComponent } from './teacher-show.component';

describe('TeacherShowComponent', () => {
  let component: TeacherShowComponent;
  let fixture: ComponentFixture<TeacherShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
