import { Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {CourseComponent} from "../../components/course/course.component";
import {ReadingComponent} from "../../components/reading/reading.component";
import {SearchComponent} from "../../components/search/search.component";
import {PremiumComponentComponent} from "../../components/premium-component/premium-component.component";
import { DashboardTableComponent } from '../../components/dashboard-table/dashboard-table.component';
import {NgFor,NgForOf} from "@angular/common";
import { DrugsInterface } from '../../interface/drugs-interface';
import { DrugsServiceService } from '../../services/drugs-service.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    CourseComponent,
    ReadingComponent,
    SearchComponent,
    PremiumComponentComponent,
    DashboardTableComponent,
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  productsList: DrugsInterface [] = []


  constructor(private ds:DrugsServiceService){} 

ngOnInit(): void {
  this.ds.getMedicine().subscribe((response)=>{
    this.productsList = response
    console.log(this.productsList)
  })
}
}
