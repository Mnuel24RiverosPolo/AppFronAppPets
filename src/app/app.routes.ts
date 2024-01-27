import { RouterModule, Routes } from '@angular/router';  // Importar "componente" para trabajar con rutas
import { HomeComponent  } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';


import { PetsComponent  } from './component/pet-components/pets/pets.component';
import { PetComponent  } from './component/pet-components/pet/pet.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './auth.guard'
//import { NotaComponent } from './component/nota/nota.component';
import { NotasComponent } from './component/nota-components/notas/notas.component';
import { NotaUploadComponent } from './component/nota-components/nota-upload/nota-upload.component';
import { PetUploadComponent } from './component/pet-components/pet-upload/pet-upload.component';
import { PetUpdateComponent } from './component/pet-components/pet-update/pet-update.component';





const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pets', component: PetsComponent},
    {path: 'notices', component: NotasComponent},
    {path: 'pet/:id', component: PetComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register' ,component: RegisterComponent},
    {path: 'notaup', component: NotaUploadComponent, canActivate: [AuthGuard]},
    {path: 'petup', component: PetUploadComponent,  canActivate: [AuthGuard]},
    {path: 'petupdate/:id', component: PetUpdateComponent, canActivate: [AuthGuard]},
    
    {path: '**', pathMatch: 'full', redirectTo: 'home'}//ruta por defecto

];


export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES);