import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentAddressService } from './student-address.service';



import { IStudent } from './student-list';

@Injectable({
  providedIn: 'root'
})

export class StudentListService {
  studentAddress:string = '';
  constructor(
    private http: HttpClient, 
    private _studentAddressService: StudentAddressService) { 
      this.studentAddress = this._studentAddressService.getStudentAddress().address;
    }

  

  getStudents(): IStudent[] {
    return [
      { id: 'stu100', name: 'John', gender: 'Male', dateOfBirth: '30/10/1999', address:this.studentAddress, },
      { id: 'stu101', name: 'Marry', gender: 'Female', dateOfBirth: '30/10/1996', address:this.studentAddress, },
      { id: 'stu102', name: 'Leo', gender: 'Male', dateOfBirth: '30/10/1990', address:this.studentAddress, },
      { id: 'stu103', name: 'Soni', gender: 'Female', dateOfBirth: '30/10/1995', address:this.studentAddress, },
      { id: 'stu104', name: 'Smith', gender: 'Male', dateOfBirth: '30/10/1992', address:this.studentAddress, },
    ];
  }

  
}
