import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlServer: string = environment.url || 'http://localhost:3000';
  endpoint: string = '';
  constructor(private http: HttpClient, private router: Router) { }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
  /*redirigir() {
    this.router.navigate(['characters', '1']); //toma un vector ""la coma funciona como una barra""
    this.router.navigateByUrl('characters/1');
  }*/
  private HttpOptions() {
    let httpOptions = {};
    const token = localStorage.getItem('JWT');
    if (token) {
      httpOptions = {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    }
    return httpOptions;
  }
  async get() {
    try {
      return await this.http.get(`${this.urlServer}/${this.endpoint}`, this.HttpOptions()).toPromise();
    } catch (e) {
      return this.handlerError(e);
    }
  }
  async post(obj: any) {
    try {
      return await this.http.post(`${this.urlServer}/${this.endpoint}`, obj, this.HttpOptions()).toPromise();
    } catch (e) {
      return this.handlerError(e);
    }
  }

  handlerError(e: any) {
    e.status === 401 ? this.router.navigate(['login']) : null;
    e.status === 404 ? this.router.navigate(['notfound']) : null;
    e.status === 500 ? this.router.navigate(['ISE']) : null;
  }
}
