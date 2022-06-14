import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Categorie } from './categorie';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private getAllcategoriesUrl = "http://localhost:3000/categories";
  private getOnecategorieUrl = "http://localhost:3000/categories/";
  private deletecategorieUrl = "http://localhost:3000/categories/";
  private addcategorieUrl = "http://localhost:3000/categories/add";
  private updatecategorieUrl = "http://localhost:3000/categories/update";

  constructor(private http: HttpClient) { }

  getAllcategories() {
    return this.http.get<any>(this.getAllcategoriesUrl);
  }

  getOnecategorie(id: String) {
    return this.http.get<any>(this.getOnecategorieUrl + id)
  }

  deletecategorie(id: String) {
    return this.http.delete<any>(this.deletecategorieUrl + id)
  }

  addcategorie(categorie: Categorie) {
    return this.http.post<any>(this.addcategorieUrl, categorie);
  }

  updatecategorie(categorie: Categorie) {
    return this.http.put<any>(this.updatecategorieUrl, categorie);
  }
}
