import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-roting.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidebarComponent, UserInformationComponent, NewProductComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
