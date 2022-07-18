import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  articleList: any[] = [];
  baseUrl = `${BaseService.baseUrl}/`;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllArticles().subscribe({
      next: (res) => {
        this.articleList = res
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  scrollToTop() {
    window.scroll(0, 0);
  }


}
