import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Trainer } from '../../../models/trainer';
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  teamlists: any = []
  constructor(private trainerService: TrainerService,) {

  }

  ngOnInit(): void {
    this.trainerService.getAllTrainers().subscribe(
     res =>{this.teamlists=res},
      err =>{console.log(err);}  
    )
  }

}
