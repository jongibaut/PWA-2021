import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200/ renderiza el HomeComponent en el router outlet
  { path: 'characters', component: CharactersComponent }, // localhost:4200/characters renderiza el CharactersComponent en el router outlet
  { path: 'character/:id', component: CharacterComponent }, // localhost:4200/character/:id renderiza el CharacterComponent mas el id del personaje en el params en el router outlet
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
