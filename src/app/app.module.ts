import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PetsService } from './services/pets.services';
import { PetsComponent } from './component/pets/pets.component';
import { PetTarjetaComponent } from './component/pet-tarjeta/pet-tarjeta.component';
import { PetComponent } from './component/pet/pet.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING

  ],
  providers: [
    PetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
