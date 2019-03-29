import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { OffertComponent } from './componentes/offert/offert.component';
import { NewproductComponent } from './componentes/newproduct/newproduct.component';
import { InformationComponent } from './componentes/information/information.component';
import { CartComponent } from './componentes/cart/cart.component';


const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'offert', component: OffertComponent},
  {path: 'newproduct', component: NewproductComponent},
  {path: 'information', component: InformationComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
