import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/account/pages/login/login.component';
import { RegistroComponent } from './features/account/pages/registro/registro.component';
import { LoadingComponent } from './core/common/loading/loading.component';
import { ProductosComponent } from './features/products/pages/productos/productos.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ProductoComponent } from './features/products/pages/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    LoadingComponent,
    ProductosComponent,
    NavbarComponent,
    HomeComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
