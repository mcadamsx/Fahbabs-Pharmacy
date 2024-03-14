import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {CashierFormComponent} from "../cashier-form/cashier-form.component";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {RecordsTableComponent} from "../../components/records-table/records-table.component";

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [
    DashboardComponent,
    SidebarComponent,
    CashierFormComponent,
    RouterLink,
    RouterLinkActive,
    RecordsTableComponent
  ],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent {
  constructor(private router:Router) {}




  logout(){
    this.router.navigate(["login"])
  }
}
