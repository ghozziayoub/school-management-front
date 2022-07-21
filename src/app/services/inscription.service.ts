import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  private inscriptionUrl = `${BaseService.baseUrl}/inscription/`;

  constructor(private http: HttpClient) {}

  getAllInscriptions() {
    return this.http.get<any>(this.inscriptionUrl);
  }

  getInscriptionsOftraining(id: string) {
    return this.http.get<any>(this.inscriptionUrl + id);
  }

  getOneInscription(id: String) {
    return this.http.get<any>(this.inscriptionUrl + "inscription/" + id);
  }

  deleteInscription(id: String) {
    return this.http.delete<any>(this.inscriptionUrl + id);
  }

  addInscription(inscription: any, id: string) {
    return this.http.post<any>(this.inscriptionUrl + id, inscription);
  }

    
}
