import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Categorie } from '../../models/categorie';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private getAllCategoriesUrl = "http://localhost:3000/categories";
  private getOneCategorieUrl = "http://localhost:3000/categories/";
  private deleteCategorieUrl = "http://localhost:3000/categories/";
  private addCategorieUrl = "http://localhost:3000/categories/";
  private updateCategorieUrl = "http://localhost:3000/categories/";

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(this.getAllCategoriesUrl);
  }

  getOneCategorie(id: String) {
    return this.http.get<any>(this.getOneCategorieUrl + id)
  }

  deleteCategorie(id: String) {
    return this.http.delete<any>(this.deleteCategorieUrl + id)
  }

  addCategorie(Categorie: Categorie) {
    return this.http.post<any>(this.addCategorieUrl, Categorie);
  }

  updateCategorie(Categorie: Categorie) {
    return this.http.put<any>(this.updateCategorieUrl, Categorie);
  }
}
