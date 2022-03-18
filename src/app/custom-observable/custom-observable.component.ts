import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IntervalService } from '../interval/interval.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
	observer:any;
	techStatus:any;
	techStatus1:any;
	names:any;
	nameStatus:any;
	subs2:any = Subscription;

  constructor(private _display: IntervalService) { }

	ngOnInit(): void {
		
		
		
		// Example - 01 : Manual
		const cusObs1 = Observable.create((observer: { next: (arg0: string) => void;  error: (arg1: string) => void; complete: (arg2: string) => void; }) => {
			observer.next('Data Emit 1')
			observer.next('Data Emit 2')
			observer.next('Data Emit 3')
			observer.error('Limit Exceded!')
			
			observer.next('Data Emit 4')
			observer.next('Data Emit 5')
			// observer.complete('')
					
		});
		cusObs1.subscribe((res: any) => {
			//console.log(res);
			this._display.print(res, 'dataDisplay');
		},
		(err:any) => {
			this.techStatus = 'error'
		},
		() => {
			this.techStatus = 'completed'	
		})



		// Example 02 : Custom Interval
		const arr2 = ['Mark', 'Jayson', 'Leo', 'Mike', 'Leo1', 'Leo2'];	
		const cusObs2 = Observable.create((observer: { next: (arg0: string) => void;  error: (arg1: string) => void; complete: (arg2: string) => void; }) => {
			let count = 0;
			setInterval(() => {
				observer.next(arr2[count])
				if(count >= 3) {
					observer.error('Error Emit')
				}

				if(count >= 5) {
					observer.complete('')
				}
				count++
			}, 1000);

		})
		this.subs2 = cusObs2.subscribe((res: any) => {
			//console.log(res);
			this._display.print(res, 'dataDisplay1');

		},
		(err:any) => {
			this.techStatus1 = 'error'
		},
		() => {
			this.techStatus1 = 'completed'	
		})


		// Example 03 : Random name
		const arr3 = ['Random1', 'Random2', 'Random3', 'Random4', 'Random5', 'Random6'];	
		const cusObs3 = Observable.create((observer: { next: (arg0: string) => void;  error: (arg1: string) => void; complete: (arg2: string) => void; }) => {
			let count = 0;
			setInterval(() => {
				observer.next(arr3[count])
				if(count >= 3) {
					//observer.error('Error Emit')
				}

				if(count >= 5) {
					observer.complete('')
				}
				count++
			}, 1000);
		});
		
		cusObs3.subscribe((res: any) => {
			console.log(res);
			this.names = res;
		},
		(err:any) => {
			this.nameStatus = 'error'
		},
		() => {
			this.nameStatus = 'completed'	
		})

	}

	ngOnDestroy(): void {
		this.subs2.unsubscribe();
	}
  

}
