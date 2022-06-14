import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Trainer } from './trainer';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private getAlltrainersUrl = "http://localhost:3000/trainers";
  private getOnetrainerUrl = "http://localhost:3000/trainers/";
  private deletetrainerUrl = "http://localhost:3000/trainers/";
  private addtrainerUrl = "http://localhost:3000/trainers/add";
  private updatetrainerUrl = "http://localhost:3000/trainers/update";

  constructor(private http: HttpClient) { }

  getAlltrainers() {
    return this.http.get<any>(this.getAlltrainersUrl);
  }

  getOnetrainer(id: String) {
    return this.http.get<any>(this.getOnetrainerUrl + id)
  }

  deletetrainer(id: String) {
    return this.http.delete<any>(this.deletetrainerUrl + id)
  }

  addtrainer(trainer: Trainer) {
    return this.http.post<any>(this.addtrainerUrl, trainer);
  }

  updatetrainer(trainer: Trainer) {
    return this.http.put<any>(this.updatetrainerUrl, trainer);
  }
}
