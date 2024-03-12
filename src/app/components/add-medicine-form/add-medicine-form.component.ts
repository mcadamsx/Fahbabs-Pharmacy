import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {DrugsInterface} from "../../interface/drugs-interface";
import {DrugsServiceService} from "../../services/drugs-service.service";
import {response} from "express";

@Component({
  selector: 'app-add-medicine-form',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './add-medicine-form.component.html',
  styleUrl: './add-medicine-form.component.css'
})
export class AddMedicineFormComponent {
  constructor(private fb:FormBuilder, private medService: DrugsServiceService) {
  }
  addMedicine = this.fb.group({
    category: [""],
    name: [""],
    quantity: [""],
    price: [""]
  })
  postMedicine(){
    const postMed = {...this.addMedicine.value}

    this.medService.postMedicine(postMed as any).subscribe((response)=>{
      console.log(response)
    })

  }
}
