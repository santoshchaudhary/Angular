import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  // list data
  user1 = ['User1-1', 'user1-2', 'user1-3'];
  user2 = [];
  user3 = [];
  // user2 = ['User2-1', 'user2-2', 'user2-3'];
  // user3 = ['User3-1', 'user3-2', 'user3-3'];
  constructor() { }

  ngOnInit(): void {
  }

}
