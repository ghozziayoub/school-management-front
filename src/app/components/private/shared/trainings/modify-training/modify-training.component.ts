import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-modify-training',
  templateUrl: './modify-training.component.html',
  styleUrls: ['./modify-training.component.scss']
})
export class ModifyTrainingComponent implements OnInit {
  trainersList: any []= []
  categoryList: any[] = [];
  myForm : any = FormGroup
  selectedTrainer:string=""
  selectedFile: any;
  imageUrl = 'http://localhost:3000/';

  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private trainerService: TrainerService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  )
  
  {
    let formControls ={
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      objectif: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      program: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      hours: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(2),
        Validators.maxLength(3)
      ]),
      idTrainer: new FormControl('', [
        Validators.required,
      ]),
      idCategory: new FormControl('', [
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

    let id = this.route.snapshot.params?.['id'];
    this.trainingService.getOneTraining(id).subscribe({
      next: (result) => {
        let training = result;
        console.log(result)
        this.myForm.patchValue({
          name: training.name,
          objectif: training.objectif,
          program: training.program,
          hours: training.hours,
          idTrainer: training.trainer._id,
          idCategory: training.category._id,
        });
 
        this.imageUrl += training.image;
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

  update() {
    let id = this.route.snapshot.params?.['id'];
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('name', data.name),
    formData.append('objectif', data.objectif),
    formData.append('program', data.program),
    formData.append('hours', data.hours),
    formData.append('idTrainer', data.idTrainer),
    formData.append('idCategory', data.idCategory),
    formData.append('picture', this.selectedFile);
    console.log(this.selectedFile)
    this.trainingService.updateTraining(formData,id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success(result.message);
        this.router.navigate(['/training-list']);
      },
      error: (err) => {
        this.toastr.error(err.error.message);
        console.log(err);
      },
    });
  }
}