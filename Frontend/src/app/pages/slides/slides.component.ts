import { Component } from '@angular/core';
import {RightSidebarComponent} from "../../components/right-sidebar/right-sidebar.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [RightSidebarComponent, SidebarComponent],
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.css',
})
export class SlidesComponent {}
