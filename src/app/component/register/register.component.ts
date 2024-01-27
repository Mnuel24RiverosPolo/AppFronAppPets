import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup = new FormGroup({}) ;


  constructor( private fb: FormBuilder,
     private validadores: ValidadoresService, private http: HttpClient){
    this.createForm();
  }

  get userNameNoValido(){
    //return this.angForm.get('userName').invalid && this.angForm.get('userName').touched;
    const userNameControl = this.angForm.get('userName');
  return userNameControl ? userNameControl.invalid && userNameControl.touched : false;
  }
  get correoNoValido(){
    const userNameControl = this.angForm.get('correo');
  return userNameControl ? userNameControl.invalid && userNameControl.touched : false;
  }

  get passwordNoValido(){
    const userNameControl = this.angForm.get('password');
    return userNameControl ? userNameControl.invalid && userNameControl.touched : false;

  }

  get confirmPasswordNoValido(){
    const passControl = this.angForm.get('password');
    const confirmPassControl = this.angForm.get('confirmPassword');
    
    if (passControl && confirmPassControl) {
      const pass1 = passControl.value;
      const pass2 = confirmPassControl.value;
    
      return (pass1 === pass2) ? false : true;
    }
    
    return false;
  
  }

  

  createForm(){
    this.angForm = this.fb.group({
      
      name: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }


  ngOnInit()  {
  }
  onClickSubmit(formData: any){
    const requestBody = {
      name: formData.value.name,
      email: formData.value.correo,
      password: formData.value.password
    };
    this.http.post('https://mi-app-mascotas-back.onrender.com/authuser/register', requestBody).subscribe(
      (response) => {
        console.log(response);
        console.log('Registro exitoso');
        window.alert('Registro exitoso');
      },
      (error) => {
        console.log(error);
        console.log('Error en el registro');
        window.alert('Error en el registro');
      }
    );
    console.log(requestBody);
    // console.log('Authjhh')
    // alert('You dates \nName: ' + formData.userName + ' \nEmail: ' + formData.password );

  }
}
