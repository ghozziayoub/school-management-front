import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../../../services/inscription.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss'],
})
export class InscriptionsComponent implements OnInit {
  inscriptionList:any[]=[]
  constructor(

    private inscriptionService: InscriptionService,
    private toastr: ToastrService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id']
    this.inscriptionService.getInscriptionsOftraining(id).subscribe({
      next: (result) => {
        this.inscriptionList = result;
        console.log(this.inscriptionList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
