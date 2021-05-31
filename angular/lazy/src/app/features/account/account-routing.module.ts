import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  //localhost:4200/account/login
  {
    path: 'login',
    component: LoginComponent
  },
  //localhost:4200/account/registro
  {
    path: 'registro',
    component: RegistroComponent
  }
];
//router.get('/login')
//router.get('/registro')
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
