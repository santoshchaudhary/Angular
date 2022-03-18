import { refsToArray } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  sourceSub:any = Subscription;
  users = [
    { name: 'Array1', age: 20 },
    { name: 'Array2', age: 20 },
    { name: 'Array3', age: 20 },
    { name: 'Array4', age: 20 },
    { name: 'Array5', age: 20 },
  ];


  constructor() { }

  ngOnInit(): void {
    const source = interval();

    //
    const sourceSub = source.pipe(
      take(5),
      toArray()
    );
    sourceSub.subscribe(res => {
      console.log(res);
    });

    // 
    const source2 = from(this.users);
    source2.pipe(
      toArray()
    ).subscribe(res => {
      console.log(res);
    })
    
    //
    const source3 = of('Jhon', 'Deo', 'Sarah');
    source3.pipe(
      toArray()
    ).subscribe(res1 => {
      console.log(res1);
    })






    
    // this.sourceSub.subscribe(res => {
    //   console.log(res);
    //   if(res >= 8) {
    //     this.sourceSub.unsubscribe();
    //   }

    // });




  }

}
