import { Component } from '@angular/core';
import { NotasService } from 'src/app/services/notas.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  
  isLoggedIn(): boolean {
    return !!window.localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/register'])
  }

  constructor(private notaService: NotasService, private router: Router){

  }

}
