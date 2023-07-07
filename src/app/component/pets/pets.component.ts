import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as e from 'express';
import { Pet } from 'src/app/services/pets.services';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
  
  
set tamanosSeleccionados(value: string[]) {

  this._tamanosSeleccionados = value;

  this.http.get<Pet[]>('http://localhost:3000/pet').subscribe((data: Pet[]) => {
        this.pets = data.filter((pet: Pet) => {
          // Aquí puedes poner la condición de filtrado que desees.
          // Por ejemplo, si quieres filtrar por el tamaño "grande":
          return this.tamanosSeleccionados.includes(pet.tamano);
        });
      });
  
  
  console.log(this._tamanosSeleccionados);
  // ...
}

get tamanosSeleccionados(): string[] {
  return this._tamanosSeleccionados;
}
private _tamanosSeleccionados: string[] = ['grande', 'mediano', 'pequeno'];

  
  
  
  edad: number = 0;


  pets: Pet[] = [];

  @Input() i: number = 0;



  constructor( private router: Router,  private http: HttpClient){}
  

    ngOnInit(): void{
      this.http.get<Pet[]>('http://localhost:3000/pet').subscribe((data: Pet[]) => {
        this.pets = data.filter((pet: Pet) => {
        
          return this.tamanosSeleccionados.includes(pet.tamano);
        });
      });

    }
    onCheckboxChange(event: Event) {
      const checkbox = event.target as HTMLInputElement;
      const isChecked = checkbox.checked;
      const checkboxValue = checkbox.value;
      
      if (isChecked) {
        // Agregar el valor al array si está seleccionado
        this.tamanosSeleccionados = [...this.tamanosSeleccionados, checkboxValue];
      } else {
        // Eliminar el valor del array si no está seleccionado
        const index = this.tamanosSeleccionados.indexOf(checkboxValue);
        if (index !== -1) {
          this.tamanosSeleccionados = this.tamanosSeleccionados.filter(value => value !== checkboxValue);
        }
      }
    }
    verPet(  i: any ){
      this.router.navigate(['/pet', i])
    }
    

}
