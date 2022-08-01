import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../services/category.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-category-crud',
  templateUrl: './categoriesList.component.html',
  styleUrls: ['./categoriesList.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  categoryList: any[] = [];

  constructor(private categoryService: CategoryService, private toastr: ToastrService) {}

  ngOnInit(): void {
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

  delete(id: string, index: number) {
    this.categoryList.splice(index, 1);

    this.categoryService.deleteCategory(id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success(result.message);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
