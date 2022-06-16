import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public static baseUrl = "http://localhost:3000"

  constructor() { }
}
