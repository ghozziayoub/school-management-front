import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { CategoryService } from '../../../../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.css'],
})
export class ModifyCategoryComponent implements OnInit {
  updateCategoryForm: FormGroup;
  selectedFile: any;
  imageUrl = 'http://localhost:3000/';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {
    this.updateCategoryForm = this.fb.group({
      name: new FormControl(),
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];

    this.categoryService.getOneCategory(id).subscribe({
      next: (result) => {
        let category = result;
        this.updateCategoryForm.patchValue({
          name: category.name,
        });
        this.imageUrl += category.image;
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
    console.log(this.selectedFile);
  }

  update() {
    let id = this.route.snapshot.params?.['id'];
    let data = this.updateCategoryForm.value;
    let formData = new FormData();
    formData.append('name', data.name),
      formData.append('picture', this.selectedFile);
    console.log(this.selectedFile);
    this.categoryService.updateCategory(formData, id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.warning(result.message);
        this.router.navigate(['/category'])
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  imageUpload() {
    console.log('hii');
  }
}
