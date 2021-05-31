import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService {

  all() {
    this.setEndpoint('products/all');
    return this.get();
  }
  single(id: number) {
    this.setEndpoint(`products/single/${id}`);
    return this.get();
  }
}
