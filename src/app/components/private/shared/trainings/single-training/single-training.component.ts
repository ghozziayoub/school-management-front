import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-single-training',
  templateUrl: './single-training.component.html',
  styleUrls: ['./single-training.component.scss']
})
export class SingleTrainingComponent implements OnInit {
  training: any
  baseUrl = `${BaseService.baseUrl}/`
  constructor(private router:Router, private route:ActivatedRoute, private trainingService:TrainingService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id']
    this.trainingService.getOneTraining(id).subscribe({
      next: (res)=>{
        this.training = res;
        console.log(res)
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

}
