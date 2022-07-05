import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { BlogService } from '../../../../../services/blog.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
})
export class AddArticleComponent implements OnInit {
  myForm: FormGroup;
  userList: any[] = [];
  selectedFile: any;
  imageUrl = 'assets/img/default.jpg';

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    let article = {
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(200),
      ]),
      createdBy: new FormControl('', [Validators.required]),
    };
    this.myForm = this.fb.group(article);
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (result) => {
        this.userList = result;
        console.log(this.userList);
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
  get titre() {
    return this.myForm.get('titre');
  }
  get content() {
    return this.myForm.get('content');
  }
  get createdBy() {
    return this.myForm.get('createdBy');
  }

  add() {
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('titre', data.titre);
    formData.append('content', data.content);
    formData.append('userId', data.createdBy);
    formData.append('picture', this.selectedFile);

    this.blogService.addArticles(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success(result.message);
        this.router.navigate(['/article-list']);
      },
      error: (error) => {
        this.toastr.error(error.error.message);
        console.log();
      },
    });
  }
}
