import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  normalMessage({ html, icon, timer }: any) {
    Swal.fire({
      html,
      icon: icon || 'success',
      showConfirmButton: true,
      timer: timer || 3000
    })
  }
}
