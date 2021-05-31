import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwalService } from '../../../../services/swal.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loaded: boolean = false;
  formObject = {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ])
  }
  form: FormGroup = new FormGroup(this.formObject);

  constructor(private swal: SwalService, private router: Router, private service: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
    setTimeout(() => this.loaded = true, 3000)
  }
  async login() {
    try {
      console.log('%c apretaron login', 'color: green');
      console.log(this.form);
      const result: any = await this.service.auth(this.form.value);
      const { JWT, info } = result;
      console.log(result);

      localStorage.setItem('JWT', JWT);
      localStorage.setItem('user', JSON.stringify(info));
      this.swal.normalMessage({ html: 'Logueado!!!', timer: 10000 });
      this.router.navigate(['registro']);
    }
    catch (e) {
      this.swal.normalMessage({ html: 'Usuario o password incorrectos', icon: 'error', timer: 10000 });
    }
  }
  verifyInput(field: string) {
    let message = '';
    const input = this.form.controls[field];
    input.status == 'INVALID' && input.touched ?
      message = `El campo ${field} es obligatorio`
      : null
    return message;
  }
}
