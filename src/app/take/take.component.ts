import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { IntervalService } from '../interval/interval.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  public arr2 = ['red-1', 'blue-2', 'green-3', 'yellow-4', 'purple-5', 'red-6', 'blue-7', 'green-8'];
  constructor(private _printData: IntervalService) { }

  ngOnInit(): void {
    const randomNames = from(this.arr2)
  
    // Example 01
    randomNames.pipe(
      take(5)
    ).subscribe(res => {
      // console.log(res);
      this._printData.print(res, 'elDataContainer1');
    });

    // Example 02
    randomNames.pipe(
      takeLast(5)
    ).subscribe(res => {
      // console.log(res);
      this._printData.print(res, 'elDataContainer2');
    });

    // Example 03
    const source = interval(1000);
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click')
    source.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition2)
    ).subscribe(res => {
      console.log(res);
      this._printData.print(res, 'elDataContainer3');
    })
  }


}
