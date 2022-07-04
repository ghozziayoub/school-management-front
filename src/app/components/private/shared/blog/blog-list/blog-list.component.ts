import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../../services/blog.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  articleList: any[] = [];

  constructor(private articleService: BlogService, private toastr: ToastrService) {}

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
        this.toastr.success(result.message);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
