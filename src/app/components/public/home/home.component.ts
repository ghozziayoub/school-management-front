import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { CategoryService } from 'src/app/services/category.service';
import { TrainingService } from 'src/app/services/training.service';
import { BaseService } from 'src/app/services/base.service';
import { TemoignageService } from 'src/app/services/temoignage.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trainingsList: any = [];
  trainersList: any = [];
  categoriesList: any = [];
  temoignages: any = [];
  baseUrl = `${BaseService.baseUrl}/`;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplaySpeed:2200,
    autoplayTimeout: 6000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(
    private trainerService: TrainerService,
    private categoryService: CategoryService,
    private trainingService: TrainingService,
    private temoignageService: TemoignageService
  ) {
   
  }

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
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.trainingService.getComingTrainings().subscribe({
      next: (res) => {
        this.trainingsList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.temoignageService.getAllTemoignage().subscribe({
      next: (res) => {
        this.temoignages = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
