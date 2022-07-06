import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { TrainerService } from '../../../../../services/trainer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

contactForm: FormGroup
@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.scss'],
})

export class AddTrainerComponent implements OnInit {

  myForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/img/avatar.png';
  numberRegEx = /\-?\d*\.?\d{1,2}/;


  constructor(
    private fb: FormBuilder,
    private trainerService: TrainerService,
    private router: Router,private toastr:ToastrService
  ) {
    this.myForm = this.fb.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      speciality: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      yearsOfExperience: new FormControl('', [
        Validators.required,
        Validators.pattern(this.numberRegEx),
        Validators.minLength(1)
      ]),
      facebook: new FormControl(),
      instagram: new FormControl(),
      twitter: new FormControl(),
    });
  }
  get firstname() { return this.myForm.get('firstname') }
  get lastname() { return this.myForm.get('lastname') }
  get email() { return this.myForm.get('email') }
  get speciality() { return this.myForm.get('speciality') }
  get yearsOfExperience() { return this.myForm.get('yearsOfExperience') }

  ngOnInit(): void { }

  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
  }

  add() {
    let data = this.myForm.value;

    let formData = new FormData();

    formData.append('firstname', data.firstname)
    formData.append('lastname', data.lastname)
    formData.append('email', data.email)
    formData.append('speciality', data.speciality)
    formData.append('yearsOfExperience', data.yearsOfExperience)
    formData.append('facebook', data.facebook)
    formData.append('instagram', data.instagram)
    formData.append('twitter', data.twitter)
    formData.append('picture', this.selectedFile);

    this.trainerService.addTrainer(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success("formateur ajoutée avec succès");
        this.router.navigate(['/trainer-list']);
      },
      error: (err) => {
        this.toastr.error(err.message)
        console.log(err);
      },
    });
  }
}
