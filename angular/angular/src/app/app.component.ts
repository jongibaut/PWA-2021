import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  mensajeSecreto: string = '';
  nombre: string = 'Jon';
  apellido: string = 'Gibaut';
  edad: number = 19;
  lenguajes: Array<string> = ['TS', 'JS'];
  empleados: Array<{ id: number, nombre?: string, sueldo: number, antiguedad: number }> = [
    {
      id: 1,
      nombre: 'Jon',
      sueldo: 2000,
      antiguedad: 5
    },
    {
      id: 2,
      nombre: 'Messi',
      sueldo: 60000,
      antiguedad: 3
    },
    {
      id: 3,
      nombre: 'fulanito',
      sueldo: 10000,
      antiguedad: 2
    }
  ];
  usuarios: Array<{
    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    mail: string,
    pass: string
  }> = [
      {
        id: 1,
        nombre: 'Jon',
        apellido: 'Gibaut',
        edad: 19,
        mail: 'jongibaut@gmail.com',
        pass: '1234'
      },
      {
        id: 2,
        nombre: 'Cosme',
        apellido: 'Fulanito',
        edad: 15,
        mail: 'cosmefulanito@gmail.com',
        pass: '1234'
      },
      {
        id: 3,
        nombre: 'Leo',
        apellido: 'Messi',
        edad: 33,
        mail: 'messi@messi.com',
        pass: '1234'
      },
      {
        id: 4,
        nombre: 'Jon',
        apellido: 'Gibaut',
        edad: 10,
        mail: 'jongibaut@gmail.com',
        pass: '1234'
      },
      {
        id: 5,
        nombre: 'Jon',
        apellido: 'Gibaut',
        edad: 9,
        mail: 'jongibaut@gmail.com',
        pass: '1234'
      },


    ]


  Input(e: any): void {
    console.log(e);
    const { value, name } = e.target;
    console.log(`el valor de ${name} es: ${value}`);
  }
  clickeado(): void {
    console.log('boton apretado');
    this.mensajeSecreto = "Descubriste el secreto!!";
  }
}
