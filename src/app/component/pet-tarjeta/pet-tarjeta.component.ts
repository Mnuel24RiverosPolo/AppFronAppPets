import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-tarjeta',
  templateUrl: './pet-tarjeta.component.html',
  styleUrls: ['./pet-tarjeta.component.css']
})
export class PetTarjetaComponent  {
  @Input() pets: any = {};
  
  constructor(private router: Router){

  }
  ngOnInit():void{


  }

}
