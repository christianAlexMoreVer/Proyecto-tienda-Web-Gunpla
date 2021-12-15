import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private UsuarioLoggedId: number;
  private adminLogged: number;
  private correo: any;
  private contrasena: any;

  constructor(private router: Router) { }

  ngOnInit(
  ) {
    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    if(localStorage.getItem("adminLogged")){
      this.adminLogged =+ localStorage.getItem('adminLogged')
    }
    
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);

    console.log(this.UsuarioLoggedId)
    console.log(this.adminLogged)
  } 

  Login(){
    fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
          query{
            usuarioLogged(correoElectronico:\"`+this.correo+`\",contrasena:\"`+this.contrasena+`\"){
              idUsuario
              admin
            }
          }`
        })
      })
      .then(res => res.json())
      .then(ID => {
        localStorage.setItem('UsuarioLoggedId', `${ ID.data.usuarioLogged.idUsuario }`)
        localStorage.setItem('adminLogged', `${ ID.data.usuarioLogged.admin }`)
        localStorage.setItem('usuarioLogged',`${ 1 }`);
        this.router.navigateByUrl("/user")
    });
    
  }
  
}
