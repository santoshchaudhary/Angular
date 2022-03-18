import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  empSalary:number = 0;
  message = ''
  constructor() { }
  salaryIncrement() {
    this.empSalary = this.empSalary + 500;
    this.message = 'Employee Incremented Salary';
  }
  salaryDecrement() {
    this.empSalary = this.empSalary - 200;
    this.message = 'Employee Decremented Salary';

  }

  ngOnInit(): void {
  }

}
