import { Component,} from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {SearchComponent} from "../../components/search/search.component";
import { DashboardTableComponent } from '../../components/dashboard-table/dashboard-table.component';
import {NgForOf} from "@angular/common";
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
export class DashboardComponent  {

}
