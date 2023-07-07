import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PetsService{
    private pets: Pet[] = [
        {
            nombre: "Doggo Dogg",
            img: "assets/img/dog.png",
            biografia: "A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "grande",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          },
          {
            nombre: "Firulais",
            img: "assets/img/dog.png",
            biografia: "La adopción no solo salva una vida, sino que también enriquece la tuya!",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "mediano",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          },
          {
            nombre: "Firulais",
            img: "assets/img/dog.png",
            biografia: "La adopción no solo salva una vida, sino que también enriquece la tuya!",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "mediano",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          },
          {
            nombre: "Firulais",
            img: "assets/img/dog.png",
            biografia: "La adopción no solo salva una vida, sino que también enriquece la tuya!",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "mediano",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          },
          {
            nombre: "Firulais",
            img: "assets/img/dog.png",
            biografia: "La adopción no solo salva una vida, sino que también enriquece la tuya!",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "grande",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          },
          {
            nombre: "Firulais",
            img: "assets/img/dog.png",
            biografia: "La adopción no solo salva una vida, sino que también enriquece la tuya!",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "grande",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          },
          {
            nombre: "Firulais",
            img: "assets/img/dog.png",
            biografia: "La adopción no solo salva una vida, sino que también enriquece la tuya!",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "grande",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          },
          {
            nombre: "Firulais",
            img: "assets/img/dog.png",
            biografia: "La adopción no solo salva una vida, sino que también enriquece la tuya!",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "grande",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          },
          {
            nombre: "Firulais",
            img: "assets/img/dog.png",
            biografia: "La adopción no solo salva una vida, sino que también enriquece la tuya!",
            edad: "3",
            genero: "Fem",
            cumple: "17/12",
            tipo_animal: "perro",
            raza: "Labrador Retriever",
            color: "dorado",
            tamano: "pequeno",
            esterilizado: "Si",
            vacunado: true,
            dueno: {
              nombre: "Juan Pérez",
              telefono: "+1 123-456-7890",
              direccion: "Calle Principal 123, Ciudad"
            }
          }
          
        
         

    ];

    getPets = () => this.pets;
    //getArtist = (id: any ) => this.pets[id];

  //   getQuery( query:string ){
  //     const url = `http://localhost:3000/pet${ query }`;
  //     const headers = new HttpHeaders({
  //         'Authorization': 'Bearer BQDhX8DJNzPhVK1DF9gvxLMjJQtEq8hYUHMcTPb0Z2jPYZ4ixq3TGMjRz5PTirzX3L5fSV6htuWB0rUCrX_gMgTZvJds-28NhPLx9IbtRHHtPna-By4'
  //     });
  //     return this.http.get(url, { headers });
  // }
    

    constructor(){
        console.log('Servicio listo!!!')
    }

//     getArtist(id: string){
//       return this.getQuery(`artists/${id}`)
//           .pipe( map( data => data));
//   }
}

export  interface Pet {
    nombre: string;
    img: string;
    biografia: string,
    genero: string;
    cumple: string;
    edad: string;
    tipo_animal: string;
    raza: string;
    color: string;
    tamano: string;
    esterilizado: string;
    vacunado: boolean;
    dueno: {
      nombre: string;
      telefono: string;
      direccion: string;
    };
  }
  

// interface Pet {
//     nombre: string;
//     edad: number;
//     biografia: string;
//     img: string;
//     genero: string; 
// }