import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nota, NotasService } from 'src/app/services/notas.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {

  notas: Nota[] = [];
  @Input() i: number= 0;
  
  constructor(private _notasService: NotasService
    , private router: Router, private http: HttpClient){

  }

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:3000/nota').subscribe(data => {
      this.notas  = data;
      
  // Aquí puedes trabajar con los datos obtenidos, por ejemplo, asignarlos a una variable
  console.log(data); // Imprime los datos en la consola
    })
    
    //this.notas = this._notasService.getNotas();
    

  }

  
  verNota( i: any){
    this.router.navigate(['/nota', i])
  }

}
