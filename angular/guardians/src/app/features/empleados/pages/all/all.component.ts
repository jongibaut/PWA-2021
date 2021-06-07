import { Component, OnInit } from '@angular/core';
import { Empleado, Empleados } from '../../empleados';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  empleados: Empleados = [];
  empleado: Empleado | undefined;
  constructor() { }

  ngOnInit(): void {
    //const result = this.service.getAll('empleados');
    //this.empleados = result;
    this.empleado = {
      id: 1,
      nombre: 'Jon',
      apellido: 'Gibaut'
    };
  }

}
