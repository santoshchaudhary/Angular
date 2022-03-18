import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {

    // Reactive form process
    this.reactiveForm = fb.group({
      reactName: ['', [Validators.required, Validators.minLength(3)]],
      reactEmail: ['', [Validators.required, Validators.email]],
      reactMobile: ['', Validators.required],
    });

   }

  ngOnInit(): void {
  }

  // Templete Driven form
  formSubmit(val:any) {
    console.log(val.yourname, val.email, val.mobile);
  }
  user = { name:'Testing', email:'test@test.com', mobile: '2343243243' }


  // Reactive Form
  reactiveSubmit() {
    var name = this.reactiveForm.get('reactName')?.value
    var email = this.reactiveForm.get('reactEmail')?.value
    var mobile = this.reactiveForm.get('reactMobile')?.value
    console.log(name, email, mobile)
  }
  setData() {
    this.reactiveForm.patchValue({ // setValue will work when we have set all the value other wise use patchValue
      'reactName': 'Testing',
      'reactEmail': 'test@test.com',
      'reactMobile': 3434544354,
    })
  }
  resetData() {
    this.reactiveForm.reset();
  }

}
