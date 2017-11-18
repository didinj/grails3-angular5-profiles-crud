import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomerCreateComponent } from "./customer-create/customer-create.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent,
    data: { title: 'Customer List' }
  },
  {
    path: 'customer-create',
    component: CustomerCreateComponent,
    data: { title: 'Add Customer' }
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent,
    data: { title: 'Edit Customer' }
  },
  { path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
