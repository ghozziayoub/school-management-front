import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Training } from './training';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {

 
  private getAlltrainingsUrl = "http://localhost:3000/trainings";
  private getOnetrainingUrl = "http://localhost:3000/trainings/";
  private deletetrainingUrl = "http://localhost:3000/trainings/";
  private addtrainingUrl = "http://localhost:3000/trainings/add";
  private updatetrainingUrl = "http://localhost:3000/trainings/update";

  constructor(private http: HttpClient) { }

  getAlltrainings() {
    return this.http.get<any>(this.getAlltrainingsUrl);
  }

  getOnetraining(id: String) {
    return this.http.get<any>(this.getOnetrainingUrl + id)
  }

  deletetraining(id: String) {
    return this.http.delete<any>(this.deletetrainingUrl + id)
  }

  addtraining(training: Training) {
    return this.http.post<any>(this.addtrainingUrl, training);
  }

  updatetraining(training: Training) {
    return this.http.put<any>(this.updatetrainingUrl, training);
  }
}
