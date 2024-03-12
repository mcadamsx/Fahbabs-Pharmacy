import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {AddUserFormComponent} from "../../components/add-user-form/add-user-form.component";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    SidebarComponent,
    AddUserFormComponent
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

}
