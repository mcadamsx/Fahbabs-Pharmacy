import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DashboardTableComponent} from "../../components/dashboard-table/dashboard-table.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    DashboardComponent,
    SidebarComponent,
    DashboardTableComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
