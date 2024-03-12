import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DrugsInterface } from '../interface/drugs-interface';
import { environment } from '../environment/environment';
import {Authinterface} from "../interface/authinterface";
@Injectable({
  providedIn: 'root'
})
export class DrugsServiceService {

  constructor(private http:HttpClient) { }

  getMedicine(): Observable<DrugsInterface[]> {
    return this.http.get<DrugsInterface[]>(
      `${environment.endPoint}/medicines`,
    );
  }
  postMedicine(MedDetails : DrugsInterface){
    return this.http.post(`${environment.endPoint}/medicines`, MedDetails);
  }

}
