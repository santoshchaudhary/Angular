import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IntervalService } from '../interval/interval.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  subcription1:any = Subscription;
  subcription2:any = Subscription;
  subcription3:any = Subscription;
  msg1:any;
  msg2:any;
  msg3:any;

  constructor(private printData: IntervalService) { }

  ngOnInit(): void {

    const broadCast = interval(1000);

    // Example 01
    this.subcription1 = broadCast.pipe(
      map(data => 'Video ' + data)
    )
    .subscribe(res => {
      //console.log(res);
      this.msg1 = res;
    })
    setTimeout(() => {
      this.subcription1.unsubscribe();
    }, 5000);



    // Example 02
    this.subcription2 = broadCast.pipe(
      map(data => data * 10)
    ).subscribe(res => {
      //console.log(res);
      this.msg2 = res;
    })
    setTimeout(() => {
      this.subcription2.unsubscribe();
    }, 5000);


    // Example 03 
    const members = from([
      {id: 1, name: 'obj1'},
      {id: 2, name: 'obj2'},
      {id: 3, name: 'obj3'},
      {id: 4, name: 'obj4'},
      {id: 5, name: 'obj5'},
    ]);

    members.pipe(
      map(data => data.name)
    ).subscribe(res => {
      //console.log(res);
      this.printData.print(res, 'mapData');
    })



  }

}
