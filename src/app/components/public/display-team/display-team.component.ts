import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.scss']
})
export class DisplayTeamComponent implements OnInit {
  @Input() firstname!: string
  @Input() lastname!: string
  @Input() speciality!: string
  @Input() image!: string
  constructor() { }

  ngOnInit(): void {
    
  }

}
