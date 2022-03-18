import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements AfterViewInit {
  constructor(private element: ElementRef) {
    
  }
  pageTitle = 'Angular Component Interaction';
  imageUrl = 'https://picsum.photos/200';

  count = 0;
  incrementCount() {
    this.count += 1;
  }

  // two way binding
  firstName:string = ''
  userName: string = ''
  greetuserName(updatedValue='') {
    this.userName = updatedValue;
    if(updatedValue === 'Hello') {
      alert('Welcome back Hello')
    }
  }

  private _customerName: string = ''
  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if(value === 'Hey') {
      alert('Hello Hey')
    }
  }

  @ViewChild('nameRef') nameElementRef!: ElementRef;
  ngAfterViewInit(): void {
      this.nameElementRef.nativeElement.focus()
      console.log(this.nameElementRef)
  }

}
