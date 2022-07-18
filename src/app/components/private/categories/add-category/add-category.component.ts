import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let category = {
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    };
    this.myForm = this.fb.group(category);
  }

  ngOnInit(): void {}

  get name() {
    return this.myForm.get('name');
  }

  add() {
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('name', data.name),
      this.categoryService.addCategory(formData).subscribe({
        next: (result) => {
          console.log(result);
          this.toastr.success('catégorie ajoutée avec succès');
          this.router.navigate(['/admin/categories']);
        },
        error: (error) => {
          this.toastr.error(error.error.message);
          console.log();
        },
      });
  }
}