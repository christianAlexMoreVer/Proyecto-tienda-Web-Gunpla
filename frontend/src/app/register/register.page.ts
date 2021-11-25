import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuarioForm: FormGroup;

  constructor(private router: Router,public formBuilder: FormBuilder,private zone: NgZone,private usuarioService: UsuarioService ) 
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
      this.usuarioService.createUsuario(this.usuarioForm.value).subscribe((response) => {
        this.zone.run(() => {
          this.usuarioForm.reset();
          this.router.navigateByUrl('/home')
        })
      });
    }
  }
}
