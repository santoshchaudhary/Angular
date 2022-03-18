import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor() { }

  messageAlert() {
    console.log('This is a service for Dependency Injection!')
  }

  product = 'Laptop';

  getMessage() {
    return 'Welcome to Dependency Injection!'
  }
}
