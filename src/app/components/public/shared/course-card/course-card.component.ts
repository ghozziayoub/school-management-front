import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() _id!: string
  @Input() image!: string
  @Input() price!: string
  @Input() name!: string
  @Input() objectif!: string
  @Input() hours!: string
  @Input() seat!: string
  @Input() catname!: string
  baseUrl = `${BaseService.baseUrl}/`;
  constructor(

  ) { }

  ngOnInit(): void {}
}