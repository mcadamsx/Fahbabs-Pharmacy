import { Component } from '@angular/core';
import {DispenserFormsComponent} from "../../components/dispenser-forms/dispenser-forms.component";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {DispenserProductComponent} from "../../components/dispenser-products/dispenser-products.component";

@Component({
  selector: 'app-dispenser-products-page',
  standalone: true,
  imports: [
    DispenserFormsComponent,
    RouterLink,
    RouterLinkActive,
    DispenserProductComponent
  ],
  templateUrl: './dispenser-products-page.component.html',
  styleUrl: './dispenser-products-page.component.css'
})
export class DispenserProductsPageComponent {
  constructor(private router:Router) {
  }
  logout(){
    this.router.navigate(['login'])
  }
}
