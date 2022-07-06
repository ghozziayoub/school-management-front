import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-trainer-item',
  templateUrl: './trainer-item.component.html',
  styleUrls: ['./trainer-item.component.scss']
})
export class TrainerItemComponent implements OnInit {

  @Input() firstname!: string
  @Input() lastname!: string
  @Input() speciality!: string
  @Input() image!: string
  @Input() facebook!: string
  @Input() instagram!: string
  @Input() twitter!: string
  baseUrl = `${BaseService.baseUrl}/`;

  constructor() { }

  ngOnInit(): void {

  }

}
