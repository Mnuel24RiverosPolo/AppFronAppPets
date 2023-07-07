import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private notas: Nota[] = [
    {
      
      title: "Título de la noticia",
      autor: "Autor de la noticia",
      img: "assets/img/dog.png",
      descripcion: "Descripción de la noticia",
      fecha: "24-05",
    }
    
  ]

  getNotas = () => this.notas;
  getNota = (id: any ) => this.notas[id];



  constructor(private router: Router){
      console.log('Servicio listo!!!')
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  

  
  
}


export  interface Nota {
  title: string;
  autor: string;
  img: string,
  descripcion: string;
  fecha: string;

}
