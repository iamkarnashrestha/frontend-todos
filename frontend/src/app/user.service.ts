import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  login(user:{email:String, password:String}){
    return this.http.post<{success:boolean,results:string}>('http://localhost:3000/api/users/login',user)

  }
}
