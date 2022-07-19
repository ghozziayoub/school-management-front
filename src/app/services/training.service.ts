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
  getAllRelatedTrainings(category: String) {
    console.log(category)
    return this.http.get<any>(this.trainingsUrl+"related/"+ category);
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

  updateTraining(training: any, id:String) {
    return this.http.patch<any>(this.trainingsUrl+id, training);
  }

}
