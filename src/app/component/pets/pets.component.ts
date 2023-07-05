import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as e from 'express';
import { Pet, PetsService } from 'src/app/services/pets.services';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
  
  
set tamanosSeleccionados(value: string[]) {
  this._tamanosSeleccionados = value;
  this.pets = this._petsService.getPets().filter(pet => {
    console.log(this.tamanosSeleccionados)
    // Aquí puedes poner la condición de filtrado que desees.
    // Por ejemplo, si quieres filtrar por el tamaño "grande":
    return this.tamanosSeleccionados.includes(pet.tamano);
  });
  // Realiza las acciones necesarias con el nuevo valor de tamanosSeleccionados
  console.log(this._tamanosSeleccionados);
  // ...
}

get tamanosSeleccionados(): string[] {
  return this._tamanosSeleccionados;
}
private _tamanosSeleccionados: string[] = [];

  
  
  
  edad: number = 0;


  updateRangeValue() {
    // No es necesario implementar nada aquí, ya que el valor del rango se actualiza automáticamente en la propiedad `edad`
  }

  pets: Pet[] = [];

  @Input() i: number = 0;



  constructor(private _petsService: PetsService
    , private router: Router){
      
      
      
      

    }
  

    ngOnInit(): void{
      

      this.pets = this._petsService.getPets().filter(pet => {
        console.log(this.tamanosSeleccionados)
        // Aquí puedes poner la condición de filtrado que desees.
        // Por ejemplo, si quieres filtrar por el tamaño "grande":
        return this.tamanosSeleccionados.includes(pet.tamano);
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
