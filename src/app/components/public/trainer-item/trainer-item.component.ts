import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {

  }

}
