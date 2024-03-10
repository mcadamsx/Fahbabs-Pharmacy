import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {RightSidebarComponent} from "../../components/right-sidebar/right-sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    DashboardComponent,
    RouterModule,
    RightSidebarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
