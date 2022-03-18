import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {

  userName: any = '';
  userList: any = ['Default'];
  name:string = 'New Name';
  constructor() { }

  ngOnInit(): void {
  }

 

  userAdded() {
    this.userList.push(this.userName);
  }
  onNameChange() {
    this.name = 'Hi New Name!'
  }
  
}
