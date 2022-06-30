import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  trainersList: any []= []
  categoryList: any[] = [];
  myForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/avatar.png';

  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private trainerService: TrainerService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      name: new FormControl(),
      objectif: new FormControl(),
      program: new FormControl(),
      hours: new FormControl(),
      idTrainer: new FormControl(),
      idCategory: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.trainerService.getAllTrainers().subscribe({
      next: (result) => {
        this.trainersList = result;
        console.log(this.trainersList);
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.categoryService.getAllCategories().subscribe({
      next: (result) => {
        this.categoryList = result;
        console.log(this.categoryList);
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
  }

  add() {
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('name', data.name),
      formData.append('objectif', data.objectif),
      formData.append('program', data.program),
      formData.append('hours', data.hours),
      formData.append('idTrainer', data.idTrainer),
      formData.append('idCategory', data.idCategory),
      formData.append('picture', this.selectedFile);
    this.trainingService.addTraining(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/training-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
