import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnChanges {
  @Input() signIn:boolean = false
  message: string = ''
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const loggedInValue = changes['signIn'];
    if(loggedInValue.currentValue === true) {
      this.message = 'Welcome back John!'
    } else {
      this.message = 'Please log in!'
    }
  }

}
