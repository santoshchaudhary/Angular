import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('John');
  // userName = new Subject<string>(); // Through Subject method

  constructor() { }
}
