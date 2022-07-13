import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainerService } from '../../../../../services/trainer.service';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-single-trainer',
  templateUrl: './single-trainer.component.html',
  styleUrls: ['./single-trainer.component.scss']
})
export class SingleTrainerComponent implements OnInit {
  trainer : any
  imageUrl = `${BaseService.baseUrl}/`;
  constructor(private trainerService: TrainerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];//na5ou id mel lien 
    this.trainerService.getOneTrainer(id).subscribe({
      next: (result) => {
        this.trainer = result
      },
      error: (error) => {
        console.log(error);

      }
    })
  }
  }


