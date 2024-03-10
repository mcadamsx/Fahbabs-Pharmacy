import { Component } from '@angular/core';
import {RightSidebarComponent} from "../../components/right-sidebar/right-sidebar.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-remainders',
  standalone: true,
  imports: [RightSidebarComponent, SidebarComponent],
  templateUrl: './remainders.component.html',
  styleUrl: './remainders.component.css',
})
export class RemaindersComponent {}
