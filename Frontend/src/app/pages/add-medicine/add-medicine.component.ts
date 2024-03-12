import { Component } from '@angular/core';
import {AddUserFormComponent} from "../../components/add-user-form/add-user-form.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {AddMedicineFormComponent} from "../../components/add-medicine-form/add-medicine-form.component";

@Component({
  selector: 'app-add-medicine',
  standalone: true,
  imports: [
    AddUserFormComponent,
    SidebarComponent,
    AddMedicineFormComponent
  ],
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {

}
