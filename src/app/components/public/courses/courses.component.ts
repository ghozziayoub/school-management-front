import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../../models/category';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  categoriesList: any = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: res => { this.categoriesList = res 
      console.log(res)},
      error: err => { console.log(err); }
    }
    )
  }
}
