import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-dispenser-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    DashboardComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dispenser-dashboard.component.html',
  styleUrl: './dispenser-dashboard.component.css'
})
export class DispenserDashboardComponent {

}
