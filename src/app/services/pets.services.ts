import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PetsService{

    constructor( private http: HttpClient){
        console.log('Servicio listo!!!')
    }

    getQuery( query:string ){
      const url = `https://mi-app-mascotas-back.onrender.com/${ query }`;

      return this.http.get(url);
  }
  
  getPets(){
    return this.getQuery('pet')
}


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
