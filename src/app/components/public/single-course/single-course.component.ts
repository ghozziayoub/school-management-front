import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss']
})
export class SingleCourseComponent implements OnInit {
  training:any
  trainingList: any[] = [];
  baseUrl = `${BaseService.baseUrl}/`;
  constructor(private trainingService:TrainingService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params?.["id"]
    this.trainingService.getOneTraining(id).subscribe({
      next: (res)=>{
        this.training = res
        console.log(res)
        this.trainingService.getAllRelatedTrainings(this.training.category._id).subscribe({
          next: (result)=>{
            this.trainingList = result
            console.log(this.trainingList)
          },
          error: (err)=>{
            console.log(err)
          }
        })
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

  single(id: string) {
    this.trainingService.getOneTraining(id).subscribe({
      next: (res) => {
        this.training = res;
        this.router.navigate(['/courses/' + id])
      },
      error: (error) => {
        this.router.navigate(['/page404'])
      }
    })
  }

}
