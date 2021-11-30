import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private UsuarioLoggedId: number;
  private correo: any;
  private contrasena: any;

  constructor() { }

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
  } 

  Login(correoElectronico: String, contrasena: String){
    fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
          query{
            usuarioLogged(correoElectronico:\"`+correoElectronico+`\",contrasena:\"`+contrasena+`\"){
              idUsuario
            }
          }`
        })
      })
      .then(res => res.json())
      .then(ID => {
        this.UsuarioLoggedId = ID.data.usuarioGetCorreo
        console.log(this.UsuarioLoggedId)
    });
  }
  
}
