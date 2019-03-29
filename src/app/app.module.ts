import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { OffertComponent } from './componentes/offert/offert.component';
import { NewproductComponent } from './componentes/newproduct/newproduct.component';
import { InformationComponent } from './componentes/information/information.component';
import { CartComponent } from './componentes/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    OffertComponent,
    NewproductComponent,
    InformationComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
