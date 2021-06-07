import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  selectedFile: any;
  previewUrl: any; //vista previa de la imagen
  imagen: boolean = false;
  FormObject: any = {
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
  }
  form: FormGroup = new FormGroup(this.FormObject);
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup(this.FormObject);
  }
  onFileSelected(e: any) {
    console.log(e);
    const reader = new FileReader();
    const { files } = e.target;
    if (files && files.length) {
      this.selectedFile = files[0];
      console.log(this.selectedFile);
      reader.onload = (e) => {
        this.previewUrl = reader.result;
        console.log(this.previewUrl);
        this.imagen = true;
      };
      reader.readAsDataURL(this.selectedFile) // genero una url a partir del archivo que lei
    }
  }
  upload() {
    const { nombre, apellido } = this.form.value;
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('apellido', apellido);
    fd.append('imagen', this.selectedFile);
    //await this.service.create(fd);
  }
}
