import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentAddressService {

  constructor() { }

  getStudentAddress() {
    return {
      address: 'Street-4, IN-110001',
    }
  }
}
