import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-life-cycle-form',
  templateUrl: './life-cycle-form.component.html',
  styleUrls: ['./life-cycle-form.component.scss']
})
export class LifeCycleFormComponent implements OnInit {
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
