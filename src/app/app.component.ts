import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CommonService } from './subject/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

  adminRole: boolean = true;
  ifRoleDefine: boolean = true;
  exclusive: boolean = false;
  users: any;
  memberData = [
    { name: 'sam', email: 'sam@gmail.com' },
    { name: 'jhon', email: 'jhon@gmail.com' },
  
  ]






  public name = 'How are you';
  public hello:any;
  public city:any;
  public cityArray = ['Delhi', 'Mumbai', 'Jaipur', 'Patna'];
  
  
  
  getValue() {
    const low = this.city.toLowerCase();
    const low1 = this.cityArray.map(newCity => newCity.toLowerCase());
    const out = low1.includes(low);
    if(out == true) {
      console.log(`${this.city} is matched`);
    } else {
      console.log(`${this.city} is not matched`);
    }
    //console.log(out); // true or false
  }
  

  constructor(private element: ElementRef, private _subject: CommonService, private userData: CommonService) {
    this.users = userData.users();
  }

  ngOnInit(): void {
    
  }
 
  ngAfterViewInit(): void {
    this._subject.exclusive.subscribe(res => {
      this.exclusive = res;
    })
  }

  

}
