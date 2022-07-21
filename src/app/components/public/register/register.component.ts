import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/img/avatar.png';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
      ]),
      file: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    };

    this.registerForm = this.fb.group(formControls);
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
  get file() {
    return this.registerForm.get('file');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get telephone() {
    return this.registerForm.get('telephone');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get repassword() {
    return this.registerForm.get('repassword');
  }

  ngOnInit(): void {}
  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
  }

  register() {
    let data = this.registerForm.value;
    let formData = new FormData();

    formData.append('firstname', data.firstname);
    formData.append('lastname', data.lastname);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('telephone', data.telephone);
    formData.append('picture', this.selectedFile);

    this.userService.addUser(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success('vous vous êtes inscrit avec succès');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.toastr.error(err.error.message);
        console.log(err);
      },
    });
  }
}
