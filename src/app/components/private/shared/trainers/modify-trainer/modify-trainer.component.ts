import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainerService } from '../../../../../services/trainer.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modify-trainer',
  templateUrl: './modify-trainer.component.html',
  styleUrls: ['./modify-trainer.component.scss'],
})
export class ModifyTrainerComponent implements OnInit {
  updateTrainerForm: FormGroup;
  selectedFile: any;
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  imageUrl = 'http://localhost:3000/';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private trainerService: TrainerService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.updateTrainerForm = this.fb.group({
      firstname: new FormControl('', [
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.email
      ]),
      speciality: new FormControl('', [
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      yearsOfExperience: new FormControl('', [
        Validators.pattern(this.numberRegEx),
        Validators.minLength(2)
      ]),
      facebook: new FormControl(),
      instagram: new FormControl(),
      twitter: new FormControl(),
    });
  }
  get firstname() { return this.updateTrainerForm.get('firstname') }
  get lastname() { return this.updateTrainerForm.get('lastname') }
  get email() { return this.updateTrainerForm.get('email') }
  get speciality() { return this.updateTrainerForm.get('speciality') }
  get yearsOfExperience() { return this.updateTrainerForm.get('yearsOfExperience') }
  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];

    this.trainerService.getOneTrainer(id).subscribe({
      next: (result) => {
        let trainer = result;
        this.updateTrainerForm.patchValue({
          firstname: trainer.firstname,
          lastname: trainer.lastname,
          email: trainer.email,
          speciality: trainer.speciality,
          yearsOfExperience: trainer.yearsOfExperience,
          facebook: trainer.facebook,
          instagram: trainer.instagram,
          twitter: trainer.twitter,
        });
        this.imageUrl += trainer.image;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  update() {
    let id = this.route.snapshot.params?.['id'];
    console.log(id);

    let data = this.updateTrainerForm.value;
    let formData = new FormData();
    formData.append('firstname', data.firstname),
      formData.append('lastname', data.lastname),
      formData.append('email', data.email),
      formData.append('speciality', data.speciality),
      formData.append('yearsOfExperience', data.yearsOfExperience),
      formData.append('facebook', data.facebook),
      formData.append('instagram', data.instagram),
      formData.append('twitter', data.twitter),
      formData.append('picture', this.selectedFile);
    console.log(this.selectedFile);
    this.trainerService.updateTrainer(formData, id).subscribe({
      next: (result) => {
        this.toastr.success('update successful');
        console.log(result);
        this.router.navigate(['/trainer-list']);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  imageUpload() {
    console.log('hii');
  }
}
