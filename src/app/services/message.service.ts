import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messagesUrl = `${BaseService.baseUrl}/messages/`

  constructor(private http: HttpClient) { }

  getAllMessages() {
    return this.http.get<any>(this.messagesUrl);
  }

  getOneMessage(id: String) {
    return this.http.get<any>(this.messagesUrl + id)
  }

  deleteMessage(id: String) {
    return this.http.delete<any>(this.messagesUrl + id)
  }

  addMessage(message: Message) {
    return this.http.post<any>(this.messagesUrl, message);
  }


}
