import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.scss']
})
export class ChildCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // second way
  private _signIn:boolean = false
  message:string = ''
  get signIn():boolean {
    return this._signIn
  }
  @Input()
  set signIn(value:boolean) {
    this._signIn = value
    if(value === true) {
      this.message = 'Welcome back and Sign in!'
    } else {
      this.message = 'Please sign in!'
    }
  }

}
