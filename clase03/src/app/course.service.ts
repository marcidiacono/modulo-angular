import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course';
import { COURSE } from './hardcoded-courses';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private messageService: MessageService) { 

  }

  getCourses(): Observable<Course[]> {
    const courses =  of(COURSE);
    this.messageService.add("[CourseService]: cursos cargados.")
    return courses;
  }

  getCourse(id: number): Observable<Course> {
    const course = COURSE.find(c => c.id === id)!;
    this.messageService.add(`[CourseService]: cursos de id = ${id} cargado.`);
    return of(course);
  }

  getCoursesInProgress(): Observable<Course[]> {
    const courses =  of([{ id: 3, name: "React"}, { id: 4, name: "Angular"}]);
    this.messageService.add("[CourseService]: cursos en desarrollo cargados.")
    return courses;
  }
}


