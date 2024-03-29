import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from '../models/trainer';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private trainersUrl = `${BaseService.baseUrl}/trainers/`;

  constructor(private http: HttpClient) { }

  getAllTrainers() {
    return this.http.get<any>(this.trainersUrl);
  }

  getOneTrainer(id: String) {
    return this.http.get<any>(this.trainersUrl + id)
  }

  deleteTrainer(id: String) {
    return this.http.delete<any>(this.trainersUrl + id)
  }

  addTrainer(trainer: any) {
    return this.http.post<any>(this.trainersUrl, trainer);
  }

  updateTrainer(trainer: any, id:string) {
    return this.http.patch<any>(this.trainersUrl+id, trainer);
  }
}
