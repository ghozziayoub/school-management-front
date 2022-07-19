import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  isAdmin:boolean = false
  islogged:boolean = false
  user:any
  ngOnInit(): void {
    this.isAdmin =this.userService.isLoggedInAsAdmin()
    this.islogged =this.userService.isLoggedIn()
    console.log(this.islogged)
    if(this.islogged){
      this.user = JSON.parse(localStorage.getItem('user')!)
    }
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

}
