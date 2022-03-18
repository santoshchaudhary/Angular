import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, HostBinding, HostListener } from '@angular/core';
import { interval } from 'rxjs';
import { SalaryComponent } from './salary/salary.component';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit, AfterViewInit {
  public message: string = '';
  public name = '';
  public nameArray = ['Jhon', 'Deo', 'Rao', 'Smith'];
  public fruit = 'orange';

  // @HostBinding() & @HostListener() Decorator
  //@HostBinding('style.color') textColor:any;
  
  
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.sortingArray();

    // @HostBinding() & @HostListener() Decorator
    //this.textColor = 'green'
    
  }

  
  
  // userText:string = 'Angular Lifecycle Hooks'

  // Property Binding Vs Interpolation
  yourName = 'test'
  isDisabled = true;
  editDisabled() {
    this.isDisabled = false;
  }


  // TrackBy With ngFor Directives 
  // Example 01
  private data = [1,2,3,4,5,6,7,8,9,0]; 
  displayData = [1,2,3]; 

  showMore() {
    let newLength = this.displayData.length + 3;
    if (newLength > this.data.length) {
        newLength = this.data.length
    }
     this.displayData = this.data.slice(0, newLength);
  }
  // Example 02
  employee = [
    { name: 'John', age: 20, email: 'john@gmail.com', salary: 20000, qualification:['B.Tech', 'M.tech', 'PHD'] },
    { name: 'Sam', age: 22, email: 'sam@gmail.com', salary: 50000, qualification:['BSC', 'M.tech', 'PHD']},
    { name: 'Mike', age: 30, email: 'mike@gmail.com', salary: 26000, qualification:['B.Tech', 'MBA', 'PHD']},
    { name: 'Sarah', age: 23, email: 'sarah@gmail.com', salary: 23000, qualification:['B.Tech', 'M.tech']},
  ]
  loadMoreEmployee(): void {
    this.employee = [
      { name: 'Alex', age: 20, email: 'john@gmail.com', salary: 20000, qualification:['B.Tech', 'M.tech', 'PHD']},
      { name: 'Leo', age: 22, email: 'sam@gmail.com', salary: 50000, qualification:['BSC', 'M.tech', 'PHD']},
      
    ]
  }
  employeeTrackBy(index: number, employee:any):string {
    return employee.name;
  }

  

  // ViewChild using Component, Directive and Template
  @ViewChild(SalaryComponent) hello !: SalaryComponent;
  increment() {
    this.hello.salaryIncrement();
    console.log('Increment')
  }
  decrement() {
    this.hello.salaryDecrement();
    console.log('Decrement')
  }
  // using directive
  @ViewChild('userNameFocus') userNameFocus !: ElementRef;
  
  // using template
  @ViewChild('customTitle') customTitle !: ElementRef

  

  // Logical operator in ngIf condition
  isLoggedIn = true;
  userName = 'admin111';
  score = 60

  // ng Switch
  choice = '';
  selectColor(val:any) {
    this.choice = val.target.value;
  }

  // Sorting Array
  @ViewChild('ace') ace:any;
  @ViewChild('dce') dce:any;
  public year = ['2020', '2017', '2019', '2018'];
  sortingArray() {
    const ascending = this.year.sort((a,b) => a < b ? -1 : a > b ? 1 : 0)	// Ascending
    console.log(`Sorting Array in Ascending ${ascending}`)
    const descending = this.year.sort((a,b) =>  a < b ? 1 : a > b ? -1 : 0);
    console.log(`Sorting Array in descending ${descending}`)    // descending  
  }

  ngAfterViewInit(): void {
    // Sorting Array and view on the HTMl template
    const ascending = this.year.sort((a,b) => a < b ? -1 : a > b ? 1 : 0)
    this.ace.nativeElement.textContent = ascending;
    const descending = this.year.sort((a,b) =>  a < b ? 1 : a > b ? -1 : 0);
    this.dce.nativeElement.textContent = descending;

    // view child using directive
    this.userNameFocus.nativeElement.focus();

    // view child using template
    this.customTitle.nativeElement.style.backgroundColor = 'Blue';
    this.customTitle.nativeElement.style.color = 'white';

  }

  // Interval method from rxjs
  public secondsCounter = interval(1000);
  // public subscription = this.secondsCounter.subscribe(n =>
  // console.log(`It's been ${n + 1} seconds since subscribing!`));


  // Value match between Array and Input
  cityName: any;
  city = ['Delhi', 'Jaipur', 'Mumbai', 'Gurgaon'];
  getInputValue() {
    //console.log(this.value);
    const output = this.city.filter((v) => v === this.cityName);
    console.log(output);
    //console.log(this.city.includes(this.value));
  }


  // Event Binding
  public onClick(): void {
    console.log('Button has been clicked!')
    this.message = 'Welcome to Angular!'
  }

  // Switch
  public switch: boolean = true;
  ToggleSwitch() {
    this.switch = !this.switch;
  }



  

}
