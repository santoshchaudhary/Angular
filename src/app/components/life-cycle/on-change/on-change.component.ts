import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss']
})
export class OnChangeComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() userName!: string;
  @Input() name!: string;
  @ContentChild('userParagraph') userParagraph!: ElementRef;
  constructor() {
    console.log('constructor called!')

   }

  ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log('Through contentChild ' + this.userParagraph);
  }

  ngOnChanges(element: SimpleChanges): void {
    console.log('ngOnChanges called!')
    console.log(element);
  }

  ngAfterContentInit(): void {
    console.log('Through contentChild ' + this.userParagraph.nativeElement.textContent);
  
    
  }

}
