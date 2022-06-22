import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../../../../services/trainer.service';

@Component({
  selector: 'app-trainers-list',
  templateUrl: './trainers-list.component.html',
  styleUrls: ['./trainers-list.component.scss']
})
export class TrainersListComponent implements OnInit {
  trainersList: any[] = [];

  constructor(private trainerService: TrainerService, ) {}

  ngOnInit(): void {
    this.trainerService.getAllTrainers().subscribe({
      next: (result) => {
        this.trainersList = result;
        console.log(this.trainersList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  delete(id: string, index: number) {
    this.trainersList.splice(index, 1);

    this.trainerService.deleteTrainer(id).subscribe({
      next: (result) => {
        console.log(result);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}