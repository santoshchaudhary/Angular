import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  dataDisplay:any;
  dataDisplay2:any;
  dataDisplay3:any;
  users = [
    {
      name: 'Pluck1',
      skills: 'testing1',
      job: {
        title: 'Dev',
        exp: 10,
      }
    },
    {
      name: 'Pluck2',
      skills: 'testing2',
      job: {
        title: 'Dev',
        exp: 10,
      }
    },
    {
      name: 'Pluck3',
      skills: 'testing3',
      job: {
        title: 'Dev',
        exp: 10,
      }
    },
    {
      name: 'Pluck4',
      skills: 'testing4',
      job: {
        title: 'Dev',
        exp: 10,
      }
    },
  ]
  constructor() { }

  ngOnInit(): void {


    // Example 01
    from(this.users).pipe(
      map(data => data),
      //pluck('skills'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.dataDisplay = res;
    })

    // Example 02
    from(this.users).pipe(
      //map(data => data),
      pluck('job', 'title'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.dataDisplay2 = res;
    })

  }

}
