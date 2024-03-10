import { Component,Input} from '@angular/core';
import { DrugsInterface } from '../../interface/drugs-interface';
@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.css'
})
export class DashboardTableComponent  {
  @Input() productList! : DrugsInterface;
 



}
