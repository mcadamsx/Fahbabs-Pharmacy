import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Authinterface} from "../interface/authinterface";
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {



  constructor(private http:HttpClient) { }

  getUserByEmail(username:string): Observable<Authinterface[]> {
    return this.http.get<Authinterface[]>(
      `${environment.endPoint}/users?username=${username}`,
    );
  }

  postUsers(userDetails : Authinterface){
    return this.http.post(`${environment.endPoint}/users`, userDetails);
  }

}
