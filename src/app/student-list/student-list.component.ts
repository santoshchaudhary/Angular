import { Component, OnInit } from '@angular/core';
import { IStudent } from './student-list';
import { StudentListService } from './student-list.service';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],

  providers: [ StudentListService ]
})
export class StudentListComponent implements OnInit {
  
  students : IStudent[];
  
  constructor(private _studentListService : StudentListService) { 
    this.students = this._studentListService.getStudents();

  }

  ngOnInit(): void {

    

  }

}
