import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad(): boolean {
    let status = false;
    localStorage.getItem('JWT')
      ? (status = true)
      : this.router.navigate(['home']);
    return status;
  }

}
