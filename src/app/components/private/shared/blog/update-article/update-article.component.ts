import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { BlogService } from '../../../../../services/blog.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss'],
})
export class UpdateArticleComponent implements OnInit {
  myForm: FormGroup;
  user: any;
  userList: any[] = [];
  selectedFile: any;
  imageUrl = `${BaseService.baseUrl}/`;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
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
    let id = this.route.snapshot.params?.['id'];
    this.blogService.getOneArticles(id).subscribe({
      next: (result) => {
        let user = result;
        this.myForm.patchValue({
          titre: user.titre,
          content: user.content,
        });
        this.imageUrl += user.image;
      },
      error: (error) => {
        console.log(error);
      },
    });
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

  update() {
    let data = this.myForm.value;
    let id = this.route.snapshot.params?.['id'];
    let formData = new FormData();
    formData.append('titre', data.titre);
    formData.append('content', data.content);
    formData.append('picture', this.selectedFile);

    this.blogService.updateArticles(formData, id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success("l'article mise à jour avec succès ");
        this.router.navigate(['/article-list']);
      },
      error: (error) => {
        this.toastr.error(error.error.message);
        console.log();
      },
    });
  }
}
