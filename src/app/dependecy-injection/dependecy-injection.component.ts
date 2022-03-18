import { Component, OnInit } from '@angular/core';
import { DesignService } from './design.service';

@Component({
  selector: 'app-dependecy-injection',
  templateUrl: './dependecy-injection.component.html',
  styleUrls: ['./dependecy-injection.component.scss']
})
export class DependecyInjectionComponent implements OnInit {
  product = 'test';
  message:string = '';
  constructor(private _designFromMessage: DesignService) { }

  ngOnInit(): void {
    this.product = this._designFromMessage.product;

    this.message = this._designFromMessage.getMessage();
  }

  btnClick() {
    this._designFromMessage.messageAlert();
  }



}
