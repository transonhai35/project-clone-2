import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { ManageMedicineComponent } from './features/manage-medicine/manage-medicine.component';
import { SaleMedicineComponent } from './features/sale-medicine/sale-medicine.component';
import { StockInComponent } from './features/stock-in/stock-in.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

     children: [
      {
        path: '',
        component: HomeComponent
      }
     ]
  },
  {
    path: 'leftSideBar',
    component: LeftSideBarComponent
  },
  {
    path: 'manageMedicine',
    component: ManageMedicineComponent
  },
  {
    path: 'saleMedicine',
    component: SaleMedicineComponent
  },
  {
    path: 'stok-in',
    component: StockInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
