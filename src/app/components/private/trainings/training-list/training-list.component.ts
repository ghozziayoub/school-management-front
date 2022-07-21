import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../../../services/training.service';
import { TrainerService } from '../../../../services/trainer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss'],
})
export class TrainingListComponent implements OnInit {
  trainingList: any[] = [];
  recentInscription: any[] = [];
  trainerFullname: string = '';

  constructor(
    private trainingService: TrainingService,
    private trainerService: TrainerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.trainingService.getAllTrainings().subscribe({
      next: (result) => {
        this.trainingList = result;
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
        this.toastr.success('la formation est supprimée');
        console.log(result);
      },
      error: (err) => {
        this.toastr.error(err.error.message);
        console.log(err);
      },
    });
  }
}
