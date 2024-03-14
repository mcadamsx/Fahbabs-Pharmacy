import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProductsComponent} from "./pages/products/products.component";
import {PurchaseComponent} from "./pages/purchase/purchase.component";
import {RecordsComponent} from "./pages/records/records.component";
import {DispenseComponent} from "./pages/dispense/dispense.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AddUserComponent} from "./pages/add-user/add-user.component";
import {AddMedicineComponent} from "./pages/add-medicine/add-medicine.component";
import {CashierPageComponent} from "./pages/cashier-page/cashier-page.component";
import {DispenserPageComponent} from "./pages/dispenser-page/cashier-page.component";
import {DispenserProductsPageComponent} from "./pages/dispenser-products-page/dispenser-products-page.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    title: ""
  },

  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    title: "dashboard"
  },
  {
    path: "products",
    component: ProductsComponent,
    title: "courses"
  },
  {
    path: "purchase",
    component: PurchaseComponent,
    title: "slides"
  },
  {
    path: "records",
    component: RecordsComponent,
    title: "search"
  },
  {
    path: "dispense",
    component: DispenseComponent,
    title: "dispense"
  },
  {
    path: "addUser",
    component: AddUserComponent,
    title: "add-user"
  },
  {
    path: "addMedicine",
    component: AddMedicineComponent,
    title: "add-Medicine"
  },
  {
    path: "dispenserDashboard",
    component: DispenserPageComponent
  },
  {
    path: "cashierPage",
    component: CashierPageComponent
  },
  {
    path: 'dispenserProducts',
    component: DispenserProductsPageComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: "full"}
];
``
