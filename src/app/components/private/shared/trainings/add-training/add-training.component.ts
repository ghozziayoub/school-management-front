import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
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
  myForm : any = FormGroup
  selectedFile: any;
  imageUrl = 'assets/img/default.jpg';

  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private trainerService: TrainerService,
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService
  )
  
  {
    let formControls ={
      name: new FormControl('', [
        Validators.required,
      ]),
      objectif: new FormControl('', [
        Validators.required,

      ]),
      program: new FormControl('', [
        Validators.required,

      ]),
      hours: new FormControl('',[
        Validators.required,
      ]),
      idTrainer: new FormControl('', [
        Validators.required,
      ]),
      idCategory: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
      starting_date: new FormControl('', [
        Validators.required,
      ]),
      seat: new FormControl('', [
        Validators.required,
      ]),
      
    };
  
    this.myForm = this.fb.group(formControls)
  }
  get name() { return this.myForm.get('name') }
  get objectif() { return this.myForm.get('objectif') }
  get program() { return this.myForm.get('program') }
  get hours() { return this.myForm.get('hours') }
  get idTrainer() { return this.myForm.get('idTrainer') }
  get idCategory() { return this.myForm.get('idCategory') }
  get price() { return this.myForm.get('price') }
  get starting_date() { return this.myForm.get('starting_date') }
  get seat() { return this.myForm.get('seat') }

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
    formData.append('seat', data.seat),
      formData.append('objectif', data.objectif),
      formData.append('program', data.program),
      formData.append('hours', data.hours),
      formData.append('idTrainer', data.idTrainer),
      formData.append('idCategory', data.idCategory),
      formData.append('price', data.price),
      formData.append('starting_date', data.starting_date),
      formData.append('picture', this.selectedFile);
    this.trainingService.addTraining(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success("Formation ajoutée avec succès");
        this.router.navigate(['/admin/trainings']);
      },
      error: (err) => {
        this.toastr.error(err.error.message);
        console.log(err);
      },
    });
  }
}
