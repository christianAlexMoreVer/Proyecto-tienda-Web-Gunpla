import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalRegistrationSuccessPage } from '../modal-registration-success/modal-registration-success.page';
import { Usuario } from '../models/usuarios';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private usuarioForm: FormGroup;
  private usuario: Usuario;
  private modelData: any;
  private UsuarioLoggedId: number;

  constructor(private router: Router,public formBuilder: FormBuilder,private zone: NgZone,private modalController: ModalController) 
  {
    this.usuarioForm = this.formBuilder.group({
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      contrasena:['',Validators.required],
      correoElectronico:['',Validators.email]
    })
   }

   ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
  } 

  onSubmit(){
    if (!this.usuarioForm.valid){
      return false;
    } else {
      this.usuario = this.usuarioForm.value
      fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
              mutation{
                createUsuario(nombre: \"`+this.usuario.nombre+`\", apellidos: \"`+this.usuario.apellidos+`\", contrasena: \"`+this.usuario.contrasena+`\", correoElectronico: \"`+this.usuario.correoElectronico+`\", imgUser: \"Default.png\"){
                  nombre
          }
        }`
        })
      })
      this.usuarioForm.reset();
      this.openIonModal()
    }
  }

  async openIonModal() {
    
    const modal = await this.modalController.create({
      component: ModalRegistrationSuccessPage,

    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });

    return await modal.present();
  }
}
