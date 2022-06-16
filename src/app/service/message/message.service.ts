import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Message } from '../../models/message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private getAllMessagesUrl = "http://localhost:3000/messages";
  private getOneMessageUrl = "http://localhost:3000/messages/";
  private deleteMessageUrl = "http://localhost:3000/messages/";
  private addMessageUrl = "http://localhost:3000/messages/";
  private updateMessageUrl = "http://localhost:3000/messages/";

  constructor(private http: HttpClient) { }

  getAllMessages() {
    return this.http.get<any>(this.getAllMessagesUrl);
  }

  getOneMessage(id: String) {
    return this.http.get<any>(this.getOneMessageUrl + id)
  }

  deleteMessage(id: String) {
    return this.http.delete<any>(this.deleteMessageUrl + id)
  }

  addMessage(Message: Message) {
    return this.http.post<any>(this.addMessageUrl, Message);
  }

  updateMessage(Message: Message) {
    return this.http.put<any>(this.updateMessageUrl, Message);
  }
}
