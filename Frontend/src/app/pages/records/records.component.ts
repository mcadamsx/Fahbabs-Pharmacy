import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [
    DashboardComponent,
    SidebarComponent
  ],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent {

}
