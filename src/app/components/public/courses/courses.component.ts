import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { TrainingService } from 'src/app/services/training.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  categoriesList: any = [];
  categoriesof: any[] = [];
  count: Number = 0;

  constructor(
    private categoryService: CategoryService,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
