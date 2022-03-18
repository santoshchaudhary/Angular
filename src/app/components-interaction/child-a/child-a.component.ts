import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {
  @Output() greetEvent = new EventEmitter()
  name = 'Doe'
  constructor() { }

  ngOnInit(): void {
  }

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }

}
