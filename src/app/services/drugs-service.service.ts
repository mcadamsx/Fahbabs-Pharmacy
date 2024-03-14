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
  addCart(cartDetails : DrugsInterface){
    return this.http.post(`${environment.endPoint}/cart`, cartDetails);
  }

  deleteCart(id : number){
    return this.http.delete(`${environment.endPoint}/cart/${id}`, );
  }
  getCart(): Observable<DrugsInterface[]> {
    return this.http.get<DrugsInterface[]>(
      `${environment.endPoint}/cart`,
    );
  }
  addRecords(cartDetails : DrugsInterface){
    return this.http.post(`${environment.endPoint}/records`, cartDetails);
  }

  getRecords(): Observable<DrugsInterface[]> {
    return this.http.get<DrugsInterface[]>(
      `${environment.endPoint}/records`,
    );
  }
}
