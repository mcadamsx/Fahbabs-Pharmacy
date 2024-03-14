import {Component, Input} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {DrugsInterface} from "../../interface/drugs-interface";
import {CashierFormComponent} from "../../pages/cashier-form/cashier-form.component";
import {Authinterface} from "../../interface/authinterface";
import {DrugsServiceService} from "../../services/drugs-service.service";

@Component({
  selector: 'app-dispense-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    CashierFormComponent
  ],
  templateUrl: './dispense-form.component.html',
  styleUrl: './dispense-form.component.css'
})
export class DispenseFormComponent {
  // @ts-ignore
  @Input()
  constructor(private fb:FormBuilder, private drugService: DrugsServiceService) {
  }
  dispenseForm = this.fb.group({
    category: [""],
    name: [""],
    quantity: [],
    price :[]
  })
  // @ts-ignore
  drugList;
  submitForm(){
    const drugCart: any = {...this.dispenseForm.value as Authinterface}
    this.drugService.addCart(drugCart as any).subscribe((response)=>{
          this.drugList = response;
    })}

}
