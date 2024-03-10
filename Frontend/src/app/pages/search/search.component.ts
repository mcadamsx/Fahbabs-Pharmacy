import { Component } from '@angular/core';
import {RightSidebarComponent} from "../../components/right-sidebar/right-sidebar.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RightSidebarComponent, SidebarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {}
