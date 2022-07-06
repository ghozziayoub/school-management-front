import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import * as moment from 'moment';
import { BaseService } from 'src/app/services/base.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articleList: any[] = [];
  baseUrl = `${BaseService.baseUrl}/`;
  constructor(private articleService: BlogService) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe({
      next: (result) => {
        this.articleList = result;
        console.log(this.articleList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  moment(x: Date) {
    return moment(x).fromNow()
  }
}
