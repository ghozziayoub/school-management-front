import { Component, OnInit } from '@angular/core';
import { TemoignageService } from 'src/app/services/temoignage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-view-temoignage',
  templateUrl: './view-temoignage.component.html',
  styleUrls: ['./view-temoignage.component.scss']
})
export class ViewTemoignageComponent implements OnInit {
  temoignage:any
  imageUrl = `${BaseService.baseUrl}/`;
  constructor(
    private route:ActivatedRoute,
    private temoignageService :TemoignageService
  ) { }

  ngOnInit(): void {
    let id =this.route.snapshot.params?.['id']
    this.temoignageService.getOneTemoignage(id).subscribe({
      next: (res)=>{
        this.temoignage = res

      },
      error: (error)=>{
        console.log(error)

      }
    })
  }

}
