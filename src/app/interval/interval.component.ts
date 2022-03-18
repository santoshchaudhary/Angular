import { AfterViewInit, Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { IntervalService } from './interval.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, AfterViewInit {
  public obsMessage:any;
  videoSubscription:any = Subscription;

  constructor(private _interval: IntervalService) {
    
  }

  ngOnInit(): void {

    // const broadcastVideos = interval(1000);
    const broadcastVideos = timer(1000, 1000); // timer(delay, interval)

    this.videoSubscription = broadcastVideos.subscribe(res => {
      console.log(res);
      this.obsMessage = `Video ${res}`;
      this._interval.print(this.obsMessage, 'elContainer');
      this._interval.print(this.obsMessage, 'elContainer1');
      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    });
    
  }
  ngAfterViewInit(): void {
    
  }

}
