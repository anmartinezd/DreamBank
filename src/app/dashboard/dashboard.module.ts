import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-roting.module';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderPresentationComponent } from './components/header-presentation/header-presentation.component';



@NgModule({
  declarations: [DashboardComponent, HeaderContainerComponent, SidebarComponent, UserInformationComponent, NewProductComponent, HeaderPresentationComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
