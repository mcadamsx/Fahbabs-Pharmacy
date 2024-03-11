import { Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginComponent} from "./pages/login/login.component";
import {DispenserDashboardComponent} from "./pages/dispenser-dashboard/dispenser-dashboard.component";
import {HomeComponent} from "./pages/home/home.component";

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
    path: "dispenser",
    component: DispenserDashboardComponent,
    title: "dashboard"
  },


  {
    path: '', redirectTo: 'login', pathMatch: "full",
  },

];
