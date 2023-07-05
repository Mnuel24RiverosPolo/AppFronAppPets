import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/services/pets.services';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
  pet: any ={};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _petService: PetsService
    
  ){
    this.activatedRoute.params.subscribe( params =>{
      this.pet = this._petService.getArtist(params['id']);
    })
  }

  ngOnInit(): void{

  }

}
