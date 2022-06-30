import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from '../models/training';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private trainingsUrl = `${BaseService.baseUrl}/trainings/`

  constructor(private http: HttpClient) { }

  getAllTrainings() {
    return this.http.get<any>(this.trainingsUrl);
  }

  getOneTraining(id: String) {
    return this.http.get<any>(this.trainingsUrl + id)
  }

  deleteTraining(id: String) {
    return this.http.delete<any>(this.trainingsUrl + id)
  }

  addTraining(training: any) {
    return this.http.post<any>(this.trainingsUrl, training);
  }

  updateTraining(training: Training) {
    return this.http.put<any>(this.trainingsUrl, training);
  }

}
