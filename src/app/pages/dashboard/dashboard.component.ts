import {Component, Input, OnInit} from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {SearchComponent} from "../../components/search/search.component";
import { DashboardTableComponent } from '../../components/dashboard-table/dashboard-table.component';
import {NgForOf} from "@angular/common";
import {DrugsInterface} from "../../interface/drugs-interface";
import {DrugsServiceService} from "../../services/drugs-service.service";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    SearchComponent,
    DashboardTableComponent,
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit{
  totalQunatity: number = 0;
  totalSalesAmount: number = 0;
  totalPurchaseQunatity: number = 0;
  totalPurchaseAmount: number = 0;
  drugList : DrugsInterface[]=[];
  purchaseList : DrugsInterface [] = []

  constructor(private drugservice:DrugsServiceService) {
  }
  ngOnInit() {
    this.drugservice.getMedicine().subscribe((response)=>{
      this.drugList = response
      this.calculateTotal()
    })
    this.drugservice.getRecords().subscribe((response)=>{
      this.purchaseList = response
      console.log(this.purchaseList)
      this.calculateTotal()
    })
  }
  calculateTotal(): void {
    this.totalQunatity = this.drugList.reduce((acc, drugs) => acc + drugs.quantity, 0);
    this.totalSalesAmount = this.drugList.reduce((acc, drugs) => acc + drugs.price, 0);
    this.totalPurchaseQunatity = this.purchaseList.reduce((acc, drugs) => acc + drugs.quantity, 0);
    this.totalPurchaseAmount = this.purchaseList.reduce((acc, drugs) => acc + drugs.price, 0);
  }
}
