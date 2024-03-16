import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {DrugsServiceService} from "../../services/drugs-service.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

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
  constructor(private fb:FormBuilder, private medService: DrugsServiceService, private location: Location, private router:Router) {
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

