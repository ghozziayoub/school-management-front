import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainerService } from '../../../../../services/trainer.service';

@Component({
  selector: 'app-modify-trainer',
  templateUrl: './modify-trainer.component.html',
  styleUrls: ['./modify-trainer.component.scss'],
})
export class ModifyTrainerComponent implements OnInit {
  updateTrainerForm: FormGroup;
  selectedFile: any;
  imageUrl = 'http://localhost:3000/';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private trainerService: TrainerService,
    private router: Router
  ) {
    this.updateTrainerForm = this.fb.group({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      speciality: new FormControl(),
      yearsOfExperience: new FormControl(),
    });
  }

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
      formData.append('picture', this.selectedFile);
    console.log(this.selectedFile);
    this.trainerService.updateTrainer(formData, id).subscribe({
      next: (result) => {
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
