import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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


