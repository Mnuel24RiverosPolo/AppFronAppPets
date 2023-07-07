
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NotasService } from './services/notas.services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private not:NotasService ) {}

  canActivate(): boolean {
    // Aquí debes implementar tu lógica de autenticación
    // Verifica si el usuario está autenticado
    const isAuthenticated = localStorage.getItem('token')/* Lógica de autenticación aquí */;

    if (this.not.loggedIn()) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión si no está autenticado
      return false; // Bloquea el acceso a la ruta
    }
  }
}
