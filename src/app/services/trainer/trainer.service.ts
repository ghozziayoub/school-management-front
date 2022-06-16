import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Trainer } from '../../models/trainer';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private getAllTrainersUrl = "http://localhost:3000/trainers";
  private getOneTrainerUrl = "http://localhost:3000/trainers/";
  private deleteTrainerUrl = "http://localhost:3000/trainers/";
  private addTrainerUrl = "http://localhost:3000/trainers/";
  private updateTrainerUrl = "http://localhost:3000/trainers/";

  constructor(private http: HttpClient) { }

  getAllTrainers() {
    return this.http.get<any>(this.getAllTrainersUrl);
  }

  getOneTrainer(id: String) {
    return this.http.get<any>(this.getOneTrainerUrl + id)
  }

  deleteTrainer(id: String) {
    return this.http.delete<any>(this.deleteTrainerUrl + id)
  }

  addTrainer(trainer: Trainer) {
    return this.http.post<any>(this.addTrainerUrl, trainer);
  }

  updateTrainer(trainer: Trainer) {
    return this.http.put<any>(this.updateTrainerUrl, trainer);
  }
}
