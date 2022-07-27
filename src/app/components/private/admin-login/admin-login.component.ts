import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  myform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    let formLogin = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    };
    this.myform = this.fb.group(formLogin);
  }

  get password() {
    return this.myform.get('password');
  }
  get email() {
    return this.myform.get('email');
  }
  ngOnInit(): void {}

  login() {
    let data = this.myform.value;

    let user = new User('', '', '', data.email, data.password, '', '');

    this.userService.login(user).subscribe({
      next: (result) => {
        let token = result.headers.get('authorization');
        localStorage.setItem('token', token!);
        let decodedToken: any;
        let user: string;
        decodedToken = jwt_decode(token!);
        user = JSON.stringify(result.body.userDetails);
        console.log('user=', user);
        localStorage.setItem('user', user);

        this.toastr.success(result.body.message);
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.error.message);
      },
    });
  }
}
