import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = `${BaseService.baseUrl}/categories/`;

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(this.categoryUrl);
  }

  getOneCategory(id: String) {
    return this.http.get<any>(this.categoryUrl + id)
  }

  deleteCategory(id: String) {
    return this.http.delete<any>(this.categoryUrl + id)
  }

  addCategory(category: Category) {
    return this.http.post<any>(this.categoryUrl, category);
  }

  updateCategory(category: Category) {
    return this.http.put<any>(this.categoryUrl, category);
  }
}
