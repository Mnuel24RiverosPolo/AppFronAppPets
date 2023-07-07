import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators}  from "@angular/forms"
import { Router } from '@angular/router';


@Component({
  selector: 'app-nota-upload',
  templateUrl: './nota-upload.component.html',
  styleUrls: ['./nota-upload.component.css']
})
export class NotaUploadComponent  implements OnInit{
  miFormulario:FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      title: ['', Validators.required],
      img: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      autor: ['', Validators.required]
    });

  }

  

  onSubmit() {
   

    const data = this.miFormulario.value;
    console.log(data)

    this.http.post('http://localhost:3000/nota', data).subscribe(response => {


      console.log(response);
      console.log(' Exito al ingresar Nota');
      window.alert('Exito  al ingresar Nota');
      this.router.navigate(['/notices']);

      // mensaje de éxito o redireccionar al usuario
    },
    (error) => {
      //  error del backend
      console.log('Error en el  al ingresar Nota');
      window.alert('Error en el  al ingresar Nota');
     
    }
    );
  }
}