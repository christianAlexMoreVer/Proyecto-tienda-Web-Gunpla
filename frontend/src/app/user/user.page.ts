import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedidos';
import { Usuario } from '../models/usuarios';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  private UsuarioLoggedId: number;
  private usuario: Array<Usuario> = [];
  private pedidosUsuario: Array<Pedido> = []

  constructor() {}

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    console.log(this.UsuarioLoggedId); 
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
    
    this.loadInfoUser();
  } 

  loadInfoUser(){
    fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
              query{
               usuario(id: `+this.UsuarioLoggedId+`){
                nombre
                apellidos
                imgUser
                correoElectronico
          }
        }`
        })
      })
      .then(res => res.json())
      .then(UsuarioLogged =>{
        this.usuario.push(UsuarioLogged.data.usuario)
      });

      fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
              query{
               pedidosUser(id: `+this.UsuarioLoggedId+`){
                idPedido
                idMaqueta
          }
        }`
        })
      })
      .then(res => res.json())
      .then(PEDIDOS =>{
        this.pedidosUsuario = (PEDIDOS.data.pedidosUser)
      });
  }
}
