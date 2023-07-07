import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/services/pets.services';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
  pet: any ={
    
  };
   notaId:  number = 1;
   petId: string='';

  constructor(
    private activatedRoute: ActivatedRoute,private router: Router, private http: HttpClient
    
  ){
    this.activatedRoute.params.subscribe( params =>{
      this.traePet(params['id'])
     
      
      console.log((params['id']))  
      this.petId  = params['id']
      // _petService.getArtist(params['id']);
    })
  }
  //traePet()
  traePet(id: string){
    this.http.get(`http://localhost:3000/pet/show/${ id }`).subscribe(
      (data: any) => {
        this.pet = data;
      },
      (error) => {
        console.error(error);
      }
    )

  }
  eliminar() {
    console.log(this.petId)
    this.http.delete(`http://localhost:3000/pet/delete/${this.petId}`).subscribe(
      response => {
        console.log('El recurso se eliminó correctamente');
        
        
        // Realiza las acciones necesarias después de eliminar el recurso
      },
      error => {
        

      }
    );
  }

  ngOnInit(): void{

  }

}
