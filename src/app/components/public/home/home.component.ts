import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
  ]
})
export class HomeComponent implements OnInit {

  trainersList: any = []
  categoriesList: any = []
  constructor(private trainerService: TrainerService,private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.trainerService.getAllTrainers().subscribe({
      next: res => { this.trainersList = res },
      error: err => { console.log(err); }
    }
    )
    this.categoryService.getAllCategories().subscribe({
      next: res => { this.categoriesList = res 
      console.log(res)},
      error: err => { console.log(err); }
    }
    )
  }
 
}