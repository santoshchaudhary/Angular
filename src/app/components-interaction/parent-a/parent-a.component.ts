import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.scss']
})
export class ParentAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  greet(name:string) {
    alert('Hello John ' + name)
  }
}
