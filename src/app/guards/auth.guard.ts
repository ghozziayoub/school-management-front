import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedInAsAdmin = this.userService.isLoggedInAsAdmin();
      console.log(isLoggedInAsAdmin)
      if(isLoggedInAsAdmin){
       
        return true;
      }else{
        this.router.navigate(['/'])
        return false;
      }

  }
  
}
