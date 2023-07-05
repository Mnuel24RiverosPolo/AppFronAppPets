import { RouterModule, Routes } from '@angular/router';  // Importar "componente" para trabajar con rutas
import { HomeComponent  } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';


import { PetsComponent  } from './component/pets/pets.component';
import { PetComponent  } from './component/pet/pet.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';





const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pets', component: PetsComponent},
    {path: 'pet/:id', component: PetComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    
    //{path: '**', pathMatch: 'full', redirectTo: 'home'}//ruta por defecto

];


export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES);