import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss']
})
export class SingleCourseComponent implements OnInit {
  training:any
  constructor(private trainingService:TrainingService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.["id"]
    this.trainingService.getOneTraining(id).subscribe({
      next: (res)=>{
        this.training = res
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

}
