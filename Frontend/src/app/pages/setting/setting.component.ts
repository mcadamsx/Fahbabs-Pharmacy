import { Component } from '@angular/core';
import {RightSidebarComponent} from "../../components/right-sidebar/right-sidebar.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [RightSidebarComponent, SidebarComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent {}
