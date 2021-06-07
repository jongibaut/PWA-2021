import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './features/logged.guard';
const empleadosModule = () => import('./features/empleados/empleados.module').then((m) => m.EmpleadosModule);
const homeModule = () => import('./features/home/home.module').then((m) => m.HomeModule);
const routes: Routes = [
  {
    path: 'empleados',
    canLoad: [LoggedGuard],
    loadChildren: empleadosModule
  },
  {
    path: 'home',
    loadChildren: homeModule
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
