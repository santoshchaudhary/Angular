import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userData:any = []; // first method without observable variable

  userDetails$:Observable<any>;

  constructor(private _userDetailsService: UserService, private http: HttpClient) {

    // let userData = this._userDetailsService.getUserData();
    // console.log(userData);

    // First method without observable
    // this._userDetailsService.getUserData().subscribe(data => {
    //   this.userData = data;
    // })

    // Second method with observable
    this.userDetails$ = this._userDetailsService.getUserData();


  }

  ngOnInit(): void {
    //this.getUserData();
  }

  
  // getUserData() {
  //   let api_url = 'https://jsonplaceholder.typicode.com/users';
  //   this.userData = this.http.get(api_url);
  // }

}
