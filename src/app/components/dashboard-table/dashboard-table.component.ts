import { Component,Input, OnInit} from '@angular/core';
import { DrugsInterface } from '../../interface/drugs-interface';
import {NgForOf} from "@angular/common";
import {DrugsServiceService} from "../../services/drugs-service.service";
@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.css'
})
export class DashboardTableComponent implements  OnInit{
  productsList: DrugsInterface [] = []


  constructor(private ds:DrugsServiceService){}

  ngOnInit(): void {
    this.ds.getMedicine().subscribe((response)=>{
      this.productsList = response
      console.log(this.productsList)
    })
  }


}
