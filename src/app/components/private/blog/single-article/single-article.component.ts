import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../../services/blog.service';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss'],
})
export class SingleArticleComponent implements OnInit {
  article: any;
  imageUrl = `${BaseService.baseUrl}/`;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.blogService.getOneArticles(id).subscribe({
      next: (res) => {
        this.article = res;
      },
      error: (err) => {
        console.log(err), this.router.navigate(['/404page']);
      },
    });
  }
}
