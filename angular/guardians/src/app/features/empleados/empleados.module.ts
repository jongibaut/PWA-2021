import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { AllComponent } from './pages/all/all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateComponent, AllComponent],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreateComponent, AllComponent]
})
export class EmpleadosModule { }
