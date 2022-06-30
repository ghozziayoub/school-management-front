import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  trainersList: any = []

  constructor(private trainerService: TrainerService) {

  }

  ngOnInit(): void {
    this.trainerService.getAllTrainers().subscribe({
      next: res => { this.trainersList = res },
      error: err => { console.log(err); }
    }
    )
  }

}
