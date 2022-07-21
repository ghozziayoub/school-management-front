import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  messageList: any[] = [];
  constructor(
    private messageService: MessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.messageService.getAllMessages().subscribe({
      next: (result) => {
        this.messageList = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  delete(id: String, index: number) {
    this.messageList.splice(index, 1);
    console.log(id);
    this.messageService.deleteMessage(id).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success('le message est supprimée');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
