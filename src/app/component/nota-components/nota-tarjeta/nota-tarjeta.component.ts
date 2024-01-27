import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota-tarjeta',
  templateUrl: './nota-tarjeta.component.html',
  styleUrls: ['./nota-tarjeta.component.css']
})
export class NotaTarjetaComponent {
  @Input() notas: any = {};
  @Input() i: number=0;

  @Output() notaSelected: EventEmitter<number>;

  constructor(private router: Router){
    this.notaSelected = new EventEmitter();
    
  }
  ngOnInit():void{

  }


}
