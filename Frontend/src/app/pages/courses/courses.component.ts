import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {CourseComponent} from "../../components/course/course.component";
import {PremiumComponentComponent} from "../../components/premium-component/premium-component.component";
import {ReadingComponent} from "../../components/reading/reading.component";
import {SearchComponent} from "../../components/search/search.component";
import {RightSidebarComponent} from "../../components/right-sidebar/right-sidebar.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    SidebarComponent,
    DashboardComponent,
    CourseComponent,
    PremiumComponentComponent,
    ReadingComponent,
    SearchComponent,
    RightSidebarComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {}
