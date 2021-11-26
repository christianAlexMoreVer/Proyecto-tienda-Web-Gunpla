import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuarioForm: FormGroup;

  constructor(private router: Router,public formBuilder: FormBuilder,private zone: NgZone) 
  {
    this.usuarioForm = this.formBuilder.group({
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      contrasena:['',Validators.required],
      correoElectronico:['',Validators.email]
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    if (!this.usuarioForm.valid){
      return false;
    } else {
      
    }
  }
}
