import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
<<<<<<< HEAD
=======
import { ToastrService } from 'ngx-toastr';
>>>>>>> 5d28c0034b5557d8a3a002659f2ac6e7ff4049f9
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;

<<<<<<< HEAD
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
=======
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private toastr: ToastrService) {
>>>>>>> 5d28c0034b5557d8a3a002659f2ac6e7ff4049f9
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

    let user = new User("", "", "", data.email, data.password, "", "");

    this.userService.login(user).subscribe({
      next: (result) => {
        console.log(result)
        let token = result.token;
        localStorage.setItem("myToken", token)
<<<<<<< HEAD
=======
        this.toastr.success(result.message);
>>>>>>> 5d28c0034b5557d8a3a002659f2ac6e7ff4049f9

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);


      }
    })

  }
}