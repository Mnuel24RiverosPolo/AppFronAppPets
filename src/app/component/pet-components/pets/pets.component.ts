import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pet, PetsService } from 'src/app/services/pets.services';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {

  private _tamanosSeleccionados: string[] = ['grande', 'mediano', 'pequeno'];
  pets: Pet[] = [];
  //@Input() i: number = 0;
  sexoSeleccionado: string='';
  

  constructor( 
    private router: Router, 
    private petService: PetsService){
    this.obtenerMascotas();
  }

  ngOnInit(): void{
  }
    
  set tamanosSeleccionados(value: string[]) {
    this._tamanosSeleccionados = value;
    this.obtenerMascotas();
    console.log(this._tamanosSeleccionados);
  }
  get tamanosSeleccionados(): string[] {
    return this._tamanosSeleccionados;
  }

 

  obtenerMascotas() {
    this.petService.getPets().subscribe((data: any) => {
      this.pets = data.filter((pet: Pet) => {
        return this.tamanosSeleccionados.includes(pet.tamano) && (!this.sexoSeleccionado || pet.genero === this.sexoSeleccionado);
      });
    });
  }

  onSexoChange(sexo: string) {
    this.sexoSeleccionado = sexo;
    this.obtenerMascotas();
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
}
