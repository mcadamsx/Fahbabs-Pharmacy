import { Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {SlidesComponent} from "./pages/slides/slides.component";
import {RemaindersComponent} from "./pages/remainders/remainders.component";
import {SettingComponent} from "./pages/setting/setting.component";
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "./pages/search/search.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    title: ""
  },
  {
    path: "dashboard",
    component: HomeComponent,
    title: "dashboard"
  },
  {
    path: "courses",
    component: CoursesComponent,
    title: "courses"
  },
  {
    path: "slides",
    component: SlidesComponent,
    title: "slides"
  },
  {
    path: "search",
    component: SearchComponent,
    title: "search"
  },
  {
    path: "remainders",
    component: RemaindersComponent,
    title: "remainders"
  },
  {
    path: "setting",
    component: SettingComponent,
    title: "settings"
  },
  {
    path: '', redirectTo: 'login', pathMatch: "full",
  },

];
