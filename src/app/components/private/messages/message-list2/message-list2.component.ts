import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-list2',
  templateUrl: './message-list2.component.html',
  styleUrls: ['./message-list2.component.scss'],
})
export class MessageList2Component implements OnInit {
  message: any;
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id']; //na5ou id mel lien
    this.messageService.getOneMessage(id).subscribe({
      next: (result) => {
        this.message = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
