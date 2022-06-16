import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Training } from '../../models/training';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {

 
  private getAllTrainingsUrl = "http://localhost:3000/trainings";
  private getOneTrainingUrl = "http://localhost:3000/trainings/";
  private deleteTrainingUrl = "http://localhost:3000/trainings/";
  private addTrainingUrl = "http://localhost:3000/trainings/";
  private updateTrainingUrl = "http://localhost:3000/trainings/";

  constructor(private http: HttpClient) { }

  getAllTrainings() {
    return this.http.get<any>(this.getAllTrainingsUrl);
  }

  getOneTraining(id: String) {
    return this.http.get<any>(this.getOneTrainingUrl + id)
  }

  deleteTraining(id: String) {
    return this.http.delete<any>(this.deleteTrainingUrl + id)
  }

  addTraining(training: Training) {
    return this.http.post<any>(this.addTrainingUrl, training);
  }

  updateTraining(training: Training) {
    return this.http.put<any>(this.updateTrainingUrl, training);
  }
}
