import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalImgUserPage } from '../modal-img-user/modal-img-user.page';
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
  private modelData: any;
  
  constructor(private modalController: ModalController) {}

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
    
    this.loadInfoUser();
  } 

  async openModalImgUser(u: any){
    const modal = await this.modalController.create({
      component: ModalImgUserPage,
      componentProps: {
        "u" : u,
      }

    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });

    return await modal.present();
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
