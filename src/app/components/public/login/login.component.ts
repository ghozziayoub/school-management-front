import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  
  constructor(private fb:FormBuilder,private router: Router) {
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
   

   get password() { return this.myform.get('password') }
   get email() { return this.myform.get('email') }





  ngOnInit(): void {
  }


  login() {
     
    let data = this.myform.value;
    
     console.log(data)
     this.router.navigate(['/'])
 
 
  }
}
