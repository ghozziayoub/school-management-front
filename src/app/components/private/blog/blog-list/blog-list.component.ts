import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
import { BlogService } from '../../../../services/blog.service';
moment.locale('fr');
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  baseUrl = BaseService.baseUrl;
  articleList: any[] = [];
  constructor(
    private articleService: BlogService,
    private toastr: ToastrService
  ) {}

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

  delete(id: string, index: number) {
    this.articleList.splice(index, 1);
    this.articleService.deleteArticles(id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success("l'article est supprimée");
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  moment(x: Date) {
    return moment(x).fromNow();
  }
}
