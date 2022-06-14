import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  
  constructor(private fb:FormBuilder) {
    let formLogin = {
    
      email: new FormControl('', [
        Validators.required,
        Validators.email,
       
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    }
    this.myform = this.fb.group(formLogin)
   }

  ngOnInit(): void {
  }

}
