import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusBookingService {
  tickets:any = [1];
  constructor() { }

  bookTicket(val:number) {
    this.tickets.push(val)
  }

  getTicket() {
    return this.tickets;
  }

}
