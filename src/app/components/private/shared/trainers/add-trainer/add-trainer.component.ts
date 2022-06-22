import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { TrainerService } from '../../../../../services/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.scss'],
})
export class AddTrainerComponent implements OnInit {
  myForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/avatar.png';

  constructor(
    private fb: FormBuilder,
    private trainerService: TrainerService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      speciality: new FormControl(),
      yearsOfExperience: new FormControl(),
    });
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

  add() {
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('firstname', data.firstname),
      formData.append('lastname', data.lastname),
      formData.append('email', data.email),
      formData.append('speciality', data.speciality),
      formData.append('yearsOfExperience', data.yearsOfExperience),
      formData.append('picture', this.selectedFile);
    console.log(this.selectedFile);
    this.trainerService.addTrainer(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/trainer-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
