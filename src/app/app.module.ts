import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { ItemCarroComprasComponent } from './carro-compras/item-carro-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroComprasComponent,
    ItemCarroComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
