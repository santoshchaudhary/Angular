import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName:any;
  constructor(private _subject: CommonService) { }

  ngOnInit(): void {
    this._subject.userName.subscribe(res => {
      this.userName = res;
    });
    
  }
  onChange(comp1:any) {
    console.log(comp1.value)
    this._subject.userName.next(comp1.value);
  }

}
