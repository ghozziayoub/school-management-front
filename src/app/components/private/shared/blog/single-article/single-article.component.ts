import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../../../services/blog.service';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

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
  ) {
    let article = {
      titre: new FormControl(),
      content: new FormControl(),
    };
    this.myForm = this.fb.group(article);
  }
  get titre() {
    return this.myForm.get('titre');
  }
  get content() {
    return this.myForm.get('content');
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.blogService.getOneArticles(id).subscribe({
      next: (result) => {
        let article = result;
        this.myForm.patchValue({
          titre: article.titre,
          content: article.content,
        });
        this.imageUrl += article.image;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
