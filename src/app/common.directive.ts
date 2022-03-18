import { Directive, ElementRef, AfterViewInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCommon]'
})
export class CommonDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.style.color = 'red';

  }

  @HostListener('click') onclick():void {
    this.el.nativeElement.style.color = 'yellow'
  }

}
