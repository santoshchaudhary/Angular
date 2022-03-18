import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { IntervalService } from '../interval/interval.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  public rObj:any;
  constructor(private domHit: IntervalService) { }

  ngOnInit(): void {

    // Of & Form Example
    const result = of('John', 'Deo', 'Sarah');
    result.subscribe(res => {
      console.log(res);
      this.domHit.print(res, 'of');
    });

    // 
    const resultObj = of({a: 'John-through object', b: 'Deo-through object', c: 'Sarah-through object'});
   
    resultObj.subscribe(res => {
      console.log(res);
      this.rObj = res;
    });

    // 
    const result3 = from(['Example1', 'Example2', 'Example3']);
    result3.subscribe(res => {
      console.log(res);
      this.domHit.print(res, 'arrShow');
    });

    // 
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Through Promise : Resolve');
      }, 3000);
    })
    const result4 = from(promise);
    result4.subscribe(res => {
      console.log(`From Promise: ${res}`);
      this.domHit.print(res, 'arrShow1');
    });

    //
    const result5 = from('Welcome');
    result5.subscribe(res => {
      console.log(res);
      this.domHit.print(res, 'arrShow3');
    });

    
    



  }

}
