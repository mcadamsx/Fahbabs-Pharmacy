import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dispense-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule
  ],
  templateUrl: './dispense-form.component.html',
  styleUrl: './dispense-form.component.css'
})
export class DispenseFormComponent {
  constructor(private fb:FormBuilder) {
  }
  dispenseForm = this.fb.group({
    category: [""],
    name: [""],
    quantity: [""],
    price :[""]
  })
   totalPrice: number = 0


  druglist = [{name: "", category: "", quantity: "", price: ""}]


  dispenseDrug(){
     let AddDrug = {...this.dispenseForm.value}
    // @ts-ignore

      this.druglist.push({name: `${AddDrug.name}`, category: `${AddDrug.category}`, quantity: `Quantity: ${AddDrug.quantity}`, price: `Price: ${AddDrug.price}`})

  }
}
