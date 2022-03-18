import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  exclusive:any;
  userName:any = 'username';
  constructor(private _subject:CommonService) { }

  ngOnInit(): void {
    this._subject.exclusive.next(true);
    this._subject.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnDestroy(): void {
    this._subject.exclusive.next(false)
  }

}
