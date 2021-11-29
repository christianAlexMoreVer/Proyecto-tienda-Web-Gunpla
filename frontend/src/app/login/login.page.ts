import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private UsuarioLoggedId: number;

  constructor() { }

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
  } 

  InicioSesion(correoElectronico: String){
    fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
          query{
            usuarioGetCorreo(correoElectronico: \"`+correoElectronico+`\"){
              idUsuario
            }
          }`
        })
      })
      .then(res => res.json())
      .then(ID => {
        this.UsuarioLoggedId = ID.data.usuarioGetCorreo.idUsuario
    });
  }
  
}
