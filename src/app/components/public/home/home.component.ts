import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
  ]
})
export class HomeComponent implements OnInit {

  teamlists: any = []
  constructor(private trainerService: TrainerService,) {

  }

  ngOnInit(): void {
    this.trainerService.getAllTrainers().subscribe(
      res => { this.teamlists = res },
      err => { console.log(err); }
    )
  }

}
