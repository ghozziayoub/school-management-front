import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Category } from '../../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private getAllCategoriesUrl = "http://localhost:3000/categories";
  private getOneCategoryUrl = "http://localhost:3000/categories/";
  private deleteCategoryUrl = "http://localhost:3000/categories/";
  private addCategoryUrl = "http://localhost:3000/categories/";
  private updateCategoryUrl = "http://localhost:3000/categories/";

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(this.getAllCategoriesUrl);
  }

  getOneCategory(id: String) {
    return this.http.get<any>(this.getOneCategoryUrl + id)
  }

  deleteCategory(id: String) {
    return this.http.delete<any>(this.deleteCategoryUrl + id)
  }

  addCategory(category: Category) {
    return this.http.post<any>(this.addCategoryUrl, category);
  }

  updateCategory(category: Category) {
    return this.http.put<any>(this.updateCategoryUrl, category);
  }
}
