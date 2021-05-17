import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlServidor: string = 'https://rickandmortyapi.com/api'; // url de nuestro servidor en este caso es nuestra api
  endPoint: string = '';
  constructor(private http: HttpClient) { }

  setEndPoint(endpoint: string) {
    this.endPoint = endpoint;
  }
  handlerError({ status }: any) {
    if (status === 404) {
      //not found
    }
    else if (status === 500) {
      //ISE
    }
    else if (status === 401) {
      //unathorized
    }
    location.href = 'http://http.cat/' + status;
  }
  async get() {
    try {
      return await this.http.get(`${this.urlServidor}/${this.endPoint}`).toPromise();
    } catch (error) {
      return this.handlerError(error);
    }
  }
}
