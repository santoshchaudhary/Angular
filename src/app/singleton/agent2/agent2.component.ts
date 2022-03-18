import { Component, OnInit } from '@angular/core';
import { BusBookingService } from '../bus-booking.service';

@Component({
  selector: 'app-agent2',
  templateUrl: './agent2.component.html',
  styleUrls: ['./agent2.component.scss'],
  // providers: [BusBookingService],
})
export class Agent2Component implements OnInit {

  ticket2:any = [];
  constructor(private _busBooking2: BusBookingService) {
    
  }

  ngOnInit(): void {
    this.ticket2 = this._busBooking2.getTicket();
  }

  bookTicket2(val:any) {
    this._busBooking2.bookTicket(val);
  }

}
