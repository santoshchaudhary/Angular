import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.scss']
})
export class ParentCComponent implements OnInit {
  userSignIn = true
  constructor() { }

  ngOnInit(): void {
  }

}
