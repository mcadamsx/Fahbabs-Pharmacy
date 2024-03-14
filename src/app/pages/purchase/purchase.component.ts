import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {RecordsTableComponent} from "../../components/records-table/records-table.component";

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [
    DashboardComponent,
    SidebarComponent,
    RecordsTableComponent
  ],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {

}
