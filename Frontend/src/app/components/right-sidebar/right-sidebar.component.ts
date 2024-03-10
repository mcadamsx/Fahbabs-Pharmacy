import { Component } from '@angular/core';
import {RemaindersComponentComponent} from "../remainders-component/remainders-component.component";
import {EventsComponentComponent} from "../events-component/events-component.component";
import {Router, RouterLink,} from "@angular/router";

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [RemaindersComponentComponent, EventsComponentComponent,RouterLink],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css',
})
export class RightSidebarComponent {
  constructor(private router:Router) {

  }
  logout() {
    this.router.navigate(['login']);
  }


}
