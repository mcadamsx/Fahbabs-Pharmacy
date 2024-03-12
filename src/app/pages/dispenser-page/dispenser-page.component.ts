import { Component } from '@angular/core';
import {DispenseFormComponent} from "../../components/dispense-form/dispense-form.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-dispenser-page',
  standalone: true,
  imports: [
    DispenseFormComponent,
    SidebarComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dispenser-page.component.html',
  styleUrl: './dispenser-page.component.css'
})
export class DispenserPageComponent {

}
