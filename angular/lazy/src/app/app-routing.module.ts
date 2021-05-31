import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const HomeModule = () => import('./features/home/home.module').then((m) => m.HomeModule);
const AccountModule = () => import('./features/account/account.module').then((m) => m.AccountModule)

const routes: Routes = [
  {
    path: 'home',
    loadChildren: HomeModule,
    data: { showHeader: true }
  },
  {
    path: 'account',
    loadChildren: AccountModule,
    data: { showHeader: false }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full' // me hace el redirecto cuando la ruta se exacta a la del path
    // pathMatch: 'prefix' carga la ruta cuando sea parcialmente exacta a la del path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
