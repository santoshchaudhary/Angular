import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IntervalService } from '../interval/interval.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  data:any;
  public obsSubscription:any = Subscription;
  public obsSubscription2:any = Subscription;
  public myColor:any;
  constructor(private _printData: IntervalService ) { }

  ngOnInit(): void {

    // Example 01
    const arr = ['Jhon', 'Sam', 'Sarah', 'Jhon', 'Sam'];
    const source = interval(1000);
    
    this.obsSubscription = source.pipe(
      tap(res => {
        if(res == 4) {
          this.obsSubscription.unsubscribe();
        }
      }),
      map(res => arr[res])
      ).subscribe(res => {
      console.log(res);
      this._printData.print(res, 'dataPrint')
    });


    // Example 02
    const arr2 = ['red', 'blue', 'green', 'yellow', 'purple', 'red', 'blue', 'green'];
    const source2 = interval(1000);
    
    this.obsSubscription2 = source2.pipe(
      tap(res => {
        this.myColor = arr2[res]
        if(res == 4) {
          this.obsSubscription2.unsubscribe();
        }
      }),
      map(res => arr2[res])
      ).subscribe(res => {
      console.log(res);
      this._printData.print(res, 'dataPrint2')
    });






  }

}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

