import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  myform: FormGroup;
  constructor(private fb: FormBuilder,) {
    let formLogin = {

      email: new FormControl('', [
        Validators.required,
        Validators.email,

      ]),

      
    }
    this.myform = this.fb.group(formLogin)
  }
  get email() { return this.myform.get('email') }
  ngOnInit(): void {
  }


  frogotPass() { }
}
