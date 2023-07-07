import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {
  idEditar: string='';
  petId: string='';
  petData: any;
  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient,  private router: Router,private route: ActivatedRoute){
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
      // Otros campos del formulario
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.petId = params['id'];
      console.log(this.petId); // Aquí puedes utilizar el ID como necesites
      this.obtenerDatosPet();
    });
    
    // if (this.idEditar) {
    //   this.http.get(`http://localhost:3000/pet/show${this.petId}`).subscribe(
    //     (response: any) => {
    //       const petData = response; // Datos del recurso obtenidos del servidor
    //       this.formulario.patchValue(petData); // Asignar los datos del recurso al formulario
    //     },
    //     error => {
    //       console.error('Ocurrió un error al obtener los datos del recurso:', error);
    //     }
    //   );
    // }
  }

  obtenerDatosPet() {
    this.http.get(`http://localhost:3000/pet/show/${this.petId}`).subscribe(
      (response: any) => {
        this.formulario.patchValue(response);
        this.petData = response; // Almacena los datos del objeto en la propiedad petData
        console.log(this.petData); // Aquí puedes utilizar los datos como necesites
      },
      error => {
        console.error('Ocurrió un error al obtener los datos del objeto:', error);
      }
    );
  }

  enviarDatos() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log(formData);

      this.http.put(`http://localhost:3000/pet/update/${this.petId}`, formData).subscribe(
        response => {
          console.log('Los datos se actualizaron correctamente');
          // Realiza las acciones necesarias después de la actualización
        },
        error => {
          console.error('Ocurrió un error al enviar los datos:', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }

  // enviarDatos() {
  //   if (this.formulario.valid) {
  //     const formData = this.formulario.value;
  //     console.log(formData);
  //     // Realiza la lógica para enviar los datos actualizados al servidor
  //   } else {
  //     console.error('Formulario inválido');
  //   }
  // }


  // enviarDatos() {
  //   if (this.formulario.valid) {
  //     const formData = this.formulario.value;
  //     console.log(formData);
  //     this.http.put(`http://localhost:3000/pet/update/${this.idEditar}`, formData).subscribe(
  //       response => {
  //         console.log('Los datos se enviaron correctamente');
  //         window.alert('Actualización exitosa');
  //         this.router.navigate(['/pets']);
  //         // Realiza las acciones necesarias después de enviar los datos
  //       },
  //       error => {
  //         console.error('Ocurrió un error al enviar los datos:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Formulario inválido');
  //   }
  // }

  // actualizarImagen() {
  //   const imgURL = this.formulario.value.img;
  //   const imgElement = document.querySelector('img');
  
  //   if (imgElement) {
  //     imgElement.setAttribute('src', imgURL);
  //   }
  // }


}
