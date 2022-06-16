import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 

    private getAllUsersUrl = "http://localhost:3000/users";
    private getOneUserUrl = "http://localhost:3000/users/";
    private deleteUserUrl = "http://localhost:3000/users/";
    private addUserUrl = "http://localhost:3000/users/";
    private updateUserUrl = "http://localhost:3000/users/";
    private registerUserUrl = "http://localhost:3000/users/register";
    private loginUserUrl = "http://localhost:3000/users/login";
  
    constructor(private http: HttpClient) { }
  
    getAllUsers() {
      return this.http.get<any>(this.getAllUsersUrl);
    }
  
    getOneUser(id: String) {
      return this.http.get<any>(this.getOneUserUrl + id)
    }
  
    deleteUser(id: String) {
      return this.http.delete<any>(this.deleteUserUrl + id)
    }
  
    addUser(user: User) {
      return this.http.post<any>(this.addUserUrl, user);
    }
  
    updateUser(user: User) {
      return this.http.put<any>(this.updateUserUrl, user);
    }
  
    //Register & Login
  
    registerAdmin(user: User) {
      return this.http.post<any>(this.registerUserUrl, user);
    }
  
    loginAdmin(user: User) {
      return this.http.post<any>(this.loginUserUrl, user);
    }
  
    isLoggedIn() {
  
      let token = localStorage.getItem("myToken");
  
      if (token) {
        return true;
      } else {
        return false;
      }
    }
   }

