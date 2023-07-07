import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators}  from "@angular/forms"
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  angForm: FormGroup = new FormGroup({}) ;
  token: string =''; 
  


  constructor( private router: Router,private fb: FormBuilder, private http: HttpClient){
    this.createForm();
  }

  get userNameNoValido(){
    //return this.angForm.get('userName').invalid && this.angForm.get('userName').touched;
    const userNameControl = this.angForm.get('userName');
  return userNameControl ? userNameControl.invalid && userNameControl.touched : false;
  }
  get passwordNoValido(){
    const userNameControl = this.angForm.get('password');
    return userNameControl ? userNameControl.invalid && userNameControl.touched : false;

  }

  

  createForm(){
    this.angForm = this.fb.group({
      
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  ngOnInit()  {
  }
  
  onClickSubmit(formData: any){
    this.http.post('http://localhost:3000/authuser', formData)
      .subscribe(
        (response: any) => {
          // Manejar la respuesta exitosa del backend
          console.log( response.token);
  
          // Acceder al token en la respuesta
           var rstont = (response)
           localStorage.setItem('token', response.token)
  
          console.log('Inicio de sesión exitoso');
          window.alert('Inicio de sesión exitoso');
          this.router.navigate(['/pets']);
        },
        (error) => {
          // Aquí puedes manejar el error del backend
          console.log('Error en el inicio de sesión');
          window.alert('Error en el inicio de sesión');
          console.log(formData)
        }
      );
  }
    
    // console.log(this.angForm);
    // console.log('Authjhh')
    // alert('You dates \nName: ' + formData.userName + ' \nEmail: ' + formData.password );

  //}

  // login(formData: any) {
  //   this.http.post('http://localhost:3000/usuario', formData)
  //     .subscribe(
  //       (response) => {
  //         // Aquí puedes manejar la respuesta exitosa del backend
  //         console.log('Inicio de sesión exitoso');
  //       },
  //       (error) => {
  //         // Aquí puedes manejar el error del backend
  //         console.log('Error en el inicio de sesión');
  //       }
  //     );
  // }

}
