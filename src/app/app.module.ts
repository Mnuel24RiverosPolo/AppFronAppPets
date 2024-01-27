import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';

//services
import { ScriptHomeService } from './services/script-home.service';


//Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PetsService } from './services/pets.services';
import { PetsComponent } from './component/pet-components/pets/pets.component';
import { PetTarjetaComponent } from './component/pet-components/pet-tarjeta/pet-tarjeta.component';
import { PetComponent } from './component/pet-components/pet/pet.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotasComponent } from './component/nota-components/notas/notas.component';
import { NotaComponent } from './component/nota-components/nota/nota.component';
import { NotaTarjetaComponent } from './component/nota-components/nota-tarjeta/nota-tarjeta.component';
import { NotaUploadComponent } from './component/nota-components/nota-upload/nota-upload.component';
import { PetUploadComponent } from './component/pet-components/pet-upload/pet-upload.component';
import { PetUpdateComponent } from './component/pet-components/pet-update/pet-update.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    PetsComponent,
    PetTarjetaComponent,
    PetComponent,
    LoginComponent,
    RegisterComponent,
    NotasComponent,
    NotaComponent,
    NotaTarjetaComponent,
    NotaUploadComponent,
    PetUploadComponent,
    PetUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING

  ],
  providers: [
    PetsService,
    AuthGuard,
    ScriptHomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
