import {Component, OnInit} from '@angular/core';
import {DispenseFormComponent} from "../../components/dispense-form/dispense-form.component";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {CashierFormComponent} from "../cashier-form/cashier-form.component";
import {DrugsInterface} from "../../interface/drugs-interface";
import {DrugsServiceService} from "../../services/drugs-service.service";
import {Location} from "@angular/common";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cashier-page',
  standalone: true,
  imports: [
    DispenseFormComponent,
    RouterLink,
    RouterLinkActive,
    CashierFormComponent,
    NgForOf,
    DispenseFormComponent
  ],
  templateUrl: './cashier-page.component.html',
  styleUrl: './cashier-page.component.css'
})
export class CashierPageComponent implements OnInit{
constructor(private drugService : DrugsServiceService, private router:Router, private  location: Location) {}
drugList: DrugsInterface []= []

  ngOnInit() {
  this.drugService.getCart().subscribe((response)=>{
    this.drugList =  response
  })
  }

  submit(){
    this.drugList.forEach((drugItem) => {
      this.drugService.addRecords(drugItem as any).subscribe((response) => {
      });
      this.drugService.deleteCart(drugItem.id ).subscribe((response)=>{
      })
    });
  }

  logout(){
    this.router.navigate(['login'])
  }
}
