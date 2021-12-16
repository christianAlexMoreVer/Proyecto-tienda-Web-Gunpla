import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAddAdminPage } from '../modal-add-admin/modal-add-admin.page';
import { ModalAddMaquetaPage } from '../modal-add-maqueta/modal-add-maqueta.page';
import { ModalOptionAdminPage } from '../modal-option-admin/modal-option-admin.page';
import { Gunpla } from '../models/gunplas';
import { Pedido } from '../models/pedidos';
import { Usuario } from '../models/usuarios';

@Component({
  selector: 'app-tables-admin',
  templateUrl: './tables-admin.page.html',
  styleUrls: ['./tables-admin.page.scss'],
})
export class TablesAdminPage implements OnInit {

  private gunplas: Array<Gunpla> = [];
  private pedidos: Array<Pedido> = []; 
  private usuarios: Array<Usuario> = [];
  private modelData: any;
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.loadInfo()
  }

  loadInfo() {
    //Recogiendo las maquetas del server Graphql
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  query {
                    gunplas {
                      idMaqueta
                      nombre 
                      precio
                      escala
                      tipoGrado
                      descripcion
                      breveIntro
                      imgFileName
                    }
                  }`
      })
    })
      .then(res => res.json())
      .then(GUNPLAS => {
        this.gunplas = GUNPLAS.data.gunplas
    });

    //Recogiendo los pedidos del server Graphql
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  query {
                    pedidos {
                      idPedido
                      idUsuarioPedido
                      idMaqueta
                    }
                  }`
      })
    })
      .then(res => res.json())
      .then(PEDIDOS => {
        this.pedidos = PEDIDOS.data.pedidos
    });

    //Recogiendo los usuarios del server Graphql
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  query {
                    usuarios {
                      idUsuario
                      nombre 
                      apellidos
                      correoElectronico
                      imgUser
                      admin
                    }
                  }`
      })
    })
      .then(res => res.json())
      .then(USUARIO => {
        this.usuarios = USUARIO.data.usuarios
    });
  }

  mostrarMaquetas(){
    document.getElementById("maquetas-table").style.display="block";
    document.getElementById("pedidos-table").style.display="none";
    document.getElementById("usuarios-table").style.display="none";
  }

  mostrarPedidos(){
    document.getElementById("maquetas-table").style.display="none";
    document.getElementById("pedidos-table").style.display="block";
    document.getElementById("usuarios-table").style.display="none";
  }

  mostrarUsuarios(){
    document.getElementById("maquetas-table").style.display="none";
    document.getElementById("pedidos-table").style.display="none";
    document.getElementById("usuarios-table").style.display="block";
  }

  async openIonModalMaqueta(g: any) {
    
    const modal = await this.modalController.create({
      component: ModalOptionAdminPage,
      componentProps: {
        "gunpla" : g,
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

  async openIonModalPedido(p: any) {
    
    const modal = await this.modalController.create({
      component: ModalOptionAdminPage,
      componentProps: {
        "pedido" : p,
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

  async openIonModalUser(u: any) {
    
    const modal = await this.modalController.create({
      component: ModalOptionAdminPage,
      componentProps: {
        "usuario" : u,
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

  async addAdmin() {
    
    const modal = await this.modalController.create({
      component: ModalAddAdminPage,
    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });

    return await modal.present();
  }

  async addMaqueta() {
    
    const modal = await this.modalController.create({
      component: ModalAddMaquetaPage,
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
