import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @HostBinding('style.backgroundColor') color1 : any;


  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    // first way
      this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'red'
    );
    // second way
    //(this.element.nativeElement as HTMLElement).style.backgroundColor = 'Green';
  }

  @HostListener('mouseenter') onMouseOver() {
      this.color1 = 'purple';
      // this.renderer.setStyle(
      //   this.element.nativeElement,
      //   'background-color',
      //   'purple'
      // );
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.color1 = 'yellow';
      // this.renderer.setStyle(
      //   this.element.nativeElement,
      //   'background-color',
      //   'yellow'
      // );
    }

    @HostListener('click') onClick() {
      this.color1 = 'blue';
      // this.renderer.setStyle(
      //   this.element.nativeElement,
      //   'background-color',
      //   'blue'
      // );
    }

}
