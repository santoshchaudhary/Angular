import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput:any = ElementRef; 
  @ViewChild('myInput2') myInput2:any = ElementRef; 
  requestedData:any;
  requestedData2:any;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    // Example 01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500) // request will go every 500 millisecond
    );
    searchTerm.subscribe(res => {
      console.log(res);
      this.requestedData = res;

      setTimeout(() => {
        this.requestedData = null;
      }, 1000);

    })

    // Example 02
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      distinctUntilChanged() // it will stop to send multiple request
    );
    searchTerm2.subscribe(res => {
      console.log(res);
      this.requestedData2 = res;

      setTimeout(() => {
        this.requestedData2 = null;
      }, 1000);

    })




  }

  // 
  

}
