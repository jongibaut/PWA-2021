import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: Array<any> = [];
  loaded: boolean = false;
  constructor(private service: ProductosService) { }

  async ngOnInit() {
    this.loadProductos();
    setTimeout(() => this.loaded = true, 3000);
  }
  async loadProductos() {
    const products: any = await this.service.all();
    console.log(products);
    this.products = products;
    console.log(this.products);
  }

}
