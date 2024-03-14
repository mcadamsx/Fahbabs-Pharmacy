import {Component, Input} from '@angular/core';
import {DrugsInterface} from "../../interface/drugs-interface";

@Component({
  selector: 'app-cashier-form',
  standalone: true,
  imports: [],
  templateUrl: './cashier-form.component.html',
  styleUrl: './cashier-form.component.css'
})
export class CashierFormComponent {
  @Input() productList! : DrugsInterface




}
