import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  comp1:any = 'Hello';
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
