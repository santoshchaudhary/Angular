import { Component, OnInit } from '@angular/core';
import { BusBookingService } from '../bus-booking.service';

@Component({
  selector: 'app-agent1',
  templateUrl: './agent1.component.html',
  styleUrls: ['./agent1.component.scss'],
  // providers: [BusBookingService]
})
export class Agent1Component implements OnInit {
  ticket1:any = [];
  constructor(private _busBooking: BusBookingService) {
    
  }

  ngOnInit(): void {
    this.ticket1 = this._busBooking.getTicket();
  }

  bookTicket(val:any) {
    this._busBooking.bookTicket(val);
  }

}
