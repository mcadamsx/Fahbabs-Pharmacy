import {Component, Input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {DrugsServiceService} from "../../services/drugs-service.service";
import {Authinterface} from "../../interface/authinterface";

@Component({
  selector: 'app-dispenser-forms',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './dispenser-forms.component.html',
  styleUrl: './dispenser-forms.component.css'
})
export class DispenserFormsComponent {
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
