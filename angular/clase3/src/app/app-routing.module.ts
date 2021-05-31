import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/account/pages/login/login.component';
import { ProductoComponent } from './features/products/pages/producto/producto.component';
import { ProductosComponent } from './features/products/pages/productos/productos.component';
import { RegistroComponent } from './features/account/pages/registro/registro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
