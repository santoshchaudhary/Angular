import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-b',
  templateUrl: './parent-b.component.html',
  styleUrls: ['./parent-b.component.scss']
})
export class ParentBComponent implements OnInit {
  userSignIn = true

  constructor() { }

  ngOnInit(): void {
  }

}
