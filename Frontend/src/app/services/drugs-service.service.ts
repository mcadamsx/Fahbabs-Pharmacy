import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DrugsInterface } from '../interface/drugs-interface';
import { environment } from '../environment/environment';
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
}
