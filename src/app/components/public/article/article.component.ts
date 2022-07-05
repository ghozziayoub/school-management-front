import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { BlogService } from '../../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: any;
  articleList:any[]=[]
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id']
    this.blogService.getOneArticles(id).subscribe({
      next: (res)=>{
        this.article= res;
      },
      error: (error)=>{
        this.router.navigate(['/page404'])
      }
    })
    this.blogService.getAllArticles().subscribe({
      next: (res)=>{
        this.articleList= res;
      },
      error: (error)=>{
        this.router.navigate(['/page404'])
      }
    })
  }
  single(id:string){
    this.blogService.getOneArticles(id).subscribe({
      next: (res)=>{
        this.article= res;
        this.router.navigate(['/blog/'+id])
      },
      error: (error)=>{
        this.router.navigate(['/page404'])
      }
    })
  }
  moment(x:Date){
    return moment(x).fromNow()
  }
}



