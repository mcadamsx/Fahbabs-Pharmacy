import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {DrugsInterface} from "../../interface/drugs-interface";
import {DrugsServiceService} from "../../services/drugs-service.service";

@Component({
  selector: 'app-dispenser-product',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './dispenser-products.component.html',
  styleUrl: './dispenser-products.component.css'
})
export class DispenserProductComponent {

  productsList: DrugsInterface [] = []


  constructor(private ds:DrugsServiceService){}

  ngOnInit(): void {
    this.ds.getMedicine().subscribe((response)=>{
      this.productsList = response
      console.log(this.productsList)
    })
  }

}
