import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-upload',
  templateUrl: './pet-upload.component.html',
  styleUrls: ['./pet-upload.component.css']
})
export class PetUploadComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,  private router: Router) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      img: ['', Validators.required],
      biografia: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
      cumple: ['', Validators.required],
      esterilizado: ['', Validators.required],
      raza: ['', Validators.required],
      tamano: ['', Validators.required],
      vacunado: [false],
      telefono: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }

  enviarDatos() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log(formData)
      this.http.post('https://mi-app-mascotas-back.onrender.com/pet', formData).subscribe(
        
        response => {
          console.log('Los datos se enviaron correctamente');
          window.alert('Inicio de sesión exitoso');
          this.router.navigate(['/pets']);
          // Realiza las acciones necesarias después de enviar los datos
        },
        error => {
          console.error('Ocurrió un error al enviar los datos:', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }

  actualizarImagen() {
    const imgURL = this.formulario.value.img;
    const imgElement = document.querySelector('img');
  
    if (imgElement) {
      imgElement.setAttribute('src', imgURL);
    }
  }

  cancelar() {
    this.router.navigate(['/pets']); 
    
  }
}
