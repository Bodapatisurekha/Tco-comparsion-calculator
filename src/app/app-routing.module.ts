import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { SuccessPageComponent } from './success-page/success-page.component';


const routes: Routes = [
  { path: 'container', component: ContainerComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: '**', redirectTo: 'container' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


