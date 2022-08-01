import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private articleUrl = `${BaseService.baseUrl}/article/`;

  constructor(private http: HttpClient) { }

  getAllArticles() {
    return this.http.get<any>(this.articleUrl);
  }

  getOneArticles(id: any) {
    return this.http.get<any>(this.articleUrl + id)
  }

  deleteArticles(id: String) {
    return this.http.delete<any>(this.articleUrl + id)
  }

  addArticles(article: any) {
    return this.http.post<any>(this.articleUrl, article);
  }

  updateArticles(article: any, id:string) {
    return this.http.patch<any>(this.articleUrl+id, article);
  }
}