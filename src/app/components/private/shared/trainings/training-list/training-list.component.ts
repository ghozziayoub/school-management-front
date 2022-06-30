import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../../../../services/training.service';
import { TrainerService } from '../../../../../services/trainer.service';
@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {
  trainingList: any[] = [];
  trainerFullname: string = "";
  constructor(private trainingService: TrainingService, private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.trainingService.getAllTrainings().subscribe({
      next: (result) => {
        this.trainingList = result;
        console.log(this.trainingList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  delete(id: string, index: number) {
    this.trainingList.splice(index, 1);

    this.trainingService.deleteTraining(id).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
