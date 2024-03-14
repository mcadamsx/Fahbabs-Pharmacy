import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DispenseFormComponent} from "../../components/dispense-form/dispense-form.component";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {DashboardTableComponent} from "../../components/dashboard-table/dashboard-table.component";

@Component({
  selector: 'app-dispense',
  standalone: true,
  imports: [
    DashboardComponent,
    SidebarComponent,
    DispenseFormComponent,
    RouterLink,
    RouterLinkActive,
    DashboardTableComponent
  ],
  templateUrl: './dispense.component.html',
  styleUrl: './dispense.component.css'
})
export class DispenseComponent {
  constructor(private router:Router) {
  }


  logout(){
    this.router.navigate(['login'])
  }

}
