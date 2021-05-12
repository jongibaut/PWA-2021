import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: Array<{ id: number, link: string, title: string }> = [
    {
      id: 1,
      link: '/home',
      title: 'HOME'
    },
    {
      id: 2,
      link: '/user',
      title: 'USER'
    }
  ]
  constructor() {
    console.log("lo primero que se ejecuta, pero me ejecuto una sola vez");
  }
  ngOnInit(): void {
    //aca se hacen peticion http y maneja el ciclo de vida de un componente tambien tenemos (ngOnDestroy y ngOnUpdate)
    //ae ejecuta despues del constructor
  }

}
