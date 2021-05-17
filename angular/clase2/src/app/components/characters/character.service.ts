import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseService {
  // extends servicio : hereda todas las funciones del servicio ex: extends BaseService hereda todas las funciones de BaseService (get, setEndpoint, handlerError).
  getAll() {
    // para hacer el get necesito mi endpoint
    this.setEndPoint('character');
    return this.get();
  }
  getSingle(id: number) {
    this.setEndPoint(`character/${id}`);
    return this.get();
  }
}
