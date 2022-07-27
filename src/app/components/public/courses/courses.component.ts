import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { CategoryService } from 'src/app/services/category.service';
import { TrainingService } from 'src/app/services/training.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  categoriesList: any = [];
  trainingsList: any = [];
  allTrainingsList: any = [];
  baseUrl = `${BaseService.baseUrl}/`;
  constructor(
    private categoryService: CategoryService,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
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
        this.allTrainingsList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filter(name: String) {
    if (name != 'all') {
      this.trainingsList = this.allTrainingsList.filter(
        (training: any) => training.category.name == name
      );
    } else {
      this.trainingsList = this.allTrainingsList;
    }
  }

  onclick($event: any) {
    console.log($event);
    let clickedElement = $event.target || $event.srcElement;
    console.log(clickedElement.nodeName);
    if (clickedElement.nodeName === 'DIV') {
      let isCertainButtonAlreadyActive =
        clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }
  }
}
