import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DispenseFormComponent} from "../../components/dispense-form/dispense-form.component";

@Component({
  selector: 'app-dispense',
  standalone: true,
  imports: [
    DashboardComponent,
    SidebarComponent,
    DispenseFormComponent
  ],
  templateUrl: './dispense.component.html',
  styleUrl: './dispense.component.css'
})
export class DispenseComponent {

}
