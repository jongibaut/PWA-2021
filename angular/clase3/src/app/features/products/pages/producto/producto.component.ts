import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: any = {};
  loaded: boolean = false;
  constructor(private service: ProductosService, private activatedRoute: ActivatedRoute, private swal: SwalService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducto();
    setTimeout(() => this.loaded = true, 3000);
  }
  async loadProducto() {
    try {
      const params = this.activatedRoute.snapshot.params.id;
      const result = await this.service.single(params);
      const [producto]: any = result;
      console.log(producto);
      this.producto = producto;
    }
    catch (e) {
      this.swal.normalMessage({ html: 'El producto no existe', icon: 'error', timer: 10000 });
      this.router.navigate(["productos"]);
    }
  }

}
