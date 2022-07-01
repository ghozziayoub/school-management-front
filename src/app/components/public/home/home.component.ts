import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { CategoryService } from 'src/app/services/category.service';
import { TrainingService } from 'src/app/services/training.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trainingsList: any = [];
  trainersList: any = [];
  categoriesList: any = [];
  constructor(
    private trainerService: TrainerService,
    private categoryService: CategoryService,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.trainerService.getAllTrainers().subscribe({
      next: (res) => {
        this.trainersList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.trainingService.getAllTrainings().subscribe({
      next: (res) => {
        this.trainingsList = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
