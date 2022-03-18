import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  url ='https://jsonplaceholder.typicode.com/users';
  public fetching:boolean = false;
  public data:any;
  status = 'No Data'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.fetchData();
  }

  fetchData() {
    this.fetching = true;
    this.http.get(this.url).pipe(
      // retry(4) // Example 01 : 4 times it will retry
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount) => {
          if(retryCount >= 5) {
            throw err;
          } else {
            retryCount = retryCount + 1;
            console.log('Retrying Attempt => '+ retryCount);
            this.status = 'Retrying Attempt #' + retryCount;
            return retryCount;
          }
        }, 0)
      ))
    )
    .subscribe(
    (res) => {
      console.log(res);
      this.data = res;
      this.status = 'Data Fetched'
      this.fetching = false;
    },
    (err) => {
      console.log(err);
      this.status = 'Problem Fetching Data'
      this.fetching = false;
    });
  }

}
