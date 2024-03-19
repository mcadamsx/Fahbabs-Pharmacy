import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {DrugsServiceService} from "../../services/drugs-service.service";
import {DrugsInterface} from "../../interface/drugs-interface";

@Component({
  selector: 'app-records-table',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './records-table.component.html',
  styleUrl: './records-table.component.css'
})
export class RecordsTableComponent implements OnInit{
  productList: DrugsInterface []= []
  constructor(private drugService: DrugsServiceService) {}

  ngOnInit(): void {
    this.drugService.getRecords().subscribe((res)=>{
      this.productList = res
    })
  }
}
