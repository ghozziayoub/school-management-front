import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Message } from './message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private getAllmessagesUrl = "http://localhost:3000/messages";
  private getOnemessageUrl = "http://localhost:3000/messages/";
  private deletemessageUrl = "http://localhost:3000/messages/";
  private addmessageUrl = "http://localhost:3000/messages/add";
  private updatemessageUrl = "http://localhost:3000/messages/update";

  constructor(private http: HttpClient) { }

  getAllmessages() {
    return this.http.get<any>(this.getAllmessagesUrl);
  }

  getOnemessage(id: String) {
    return this.http.get<any>(this.getOnemessageUrl + id)
  }

  deletemessage(id: String) {
    return this.http.delete<any>(this.deletemessageUrl + id)
  }

  addmessage(message: Message) {
    return this.http.post<any>(this.addmessageUrl, message);
  }

  updatemessage(message: Message) {
    return this.http.put<any>(this.updatemessageUrl, message);
  }
}
