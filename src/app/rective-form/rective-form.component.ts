import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective-form',
  templateUrl: './rective-form.component.html',
  styleUrls: ['./rective-form.component.scss']
})
export class RectiveFormComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    user:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  loginUser() {
    console.warn(this.loginForm.value)
  }

  get user() {
    return this.loginForm.get('user')
  }

  get password() {
    return this.loginForm.get('password')
  }




  ngOnInit(): void {
  }

}
