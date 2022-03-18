import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
	data1:any;
	data2:any;
	data3:any;
	dataArray = [
		{id: 1, name: 'Hello1', gender: 'Male'},
		{id: 2, name: 'Filter 2', gender: 'Male'},
		{id: 3, name: 'Filter 9', gender: 'Female'},
		{id: 4, name: 'Hello2', gender: 'Male'},
		{id: 5, name: 'Filter 8', gender: 'Female'},
		{id: 6, name: 'Filter 5', gender: 'Male'},
		{id: 7, name: 'Filter 3', gender: 'Female'},
	]
  constructor() { }

  ngOnInit(): void {

	const source = from(this.dataArray);

	//Example 01
	source.pipe(
		//filter(member => member.name.length > 6),
		// filter(member => member.gender == 'Male'),
		filter(member => member.id <= 3),
		toArray()
	).subscribe(res => {
		console.log(res);
		this.data1 = res;
	})




  }

}
