import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class TemoignageService {
  private temoignage = `${BaseService.baseUrl}/temoignages/`;

  constructor(private http: HttpClient) { }

  getAllTemoignage() {
    return this.http.get<any>(this.temoignage);
  }

  getOneTemoignage(id: String) {
    return this.http.get<any>(this.temoignage + id)
  }

  deleteTemoignage(id: String) {
    return this.http.delete<any>(this.temoignage + id)
  }

  addTemoignage(temoignage: any) {
    return this.http.post<any>(this.temoignage, temoignage);
  }

  updateTemoignage(temoignage: any, id:string) {
    return this.http.patch<any>(this.temoignage+id, temoignage);
  }
}
