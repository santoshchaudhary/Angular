import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  allowNewUser = false;
  userName = 'Test User';
  userCreatedStatus = 'no user is created!';
  isUserCreated = false;


  userId: number = 10;
  userStatus: string = 'offline';
  //offline: string = 'white';

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);


    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }

  ngOnInit(): void {
  }
  changeUserCreatedStatus() {
    this.isUserCreated = true;
    this.userCreatedStatus = 'User is created';
  }
  onUpdateUser(event:Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  getUserStatus() {
    return this.userStatus;
  }
  getColor() {
    if(this.userStatus === 'online') {
      return 'green'
    } return 'red'
  }

}
