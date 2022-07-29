import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TemoignageService } from 'src/app/services/temoignage.service';
@Component({
  selector: 'app-temoignage-list',
  templateUrl: './temoignage-list.component.html',
  styleUrls: ['./temoignage-list.component.scss']
})
export class TemoignageListComponent implements OnInit {
  temoignageList:any[]=[]
  constructor(
    private toastr: ToastrService,
    private temoignageService:TemoignageService
  ) { }

  ngOnInit(): void {
    this.temoignageService.getAllTemoignage().subscribe({
      next: (res)=>{
        this.temoignageList=res
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

  delete(id: string, index: number) {
    this.temoignageList.splice(index, 1);

    this.temoignageService.deleteTemoignage(id).subscribe({
      next: (result) => {
        this.toastr.success('la temoignage est supprimé');
      },
      error: (err) => {
        this.toastr.error(err);
      },
    });
  }

}
