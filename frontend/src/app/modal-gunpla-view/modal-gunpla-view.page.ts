import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Gunpla } from '../models/gunplas';

@Component({
  selector: 'app-modal-gunpla-view',
  templateUrl: './modal-gunpla-view.page.html',
  styleUrls: ['./modal-gunpla-view.page.scss'],
})
export class ModalGunplaViewPage implements OnInit {

  private gunpla: any;
  private UsuarioLoggedId: number;
  private adminLogged: number;

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
      this.adminLogged =+ localStorage.getItem('adminLogged')
    }

    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
    
    this.displayGunplaSelect();
  }

  displayGunplaSelect() {

    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
              query{
               gunpla(id: `+ this.gunpla.idMaqueta +`){
                idMaqueta
                nombre
                descripcion
                precio
                escala
                tipoGrado
                imgFileName
          }
        }`
      })
    })
      .then(res => res.json())
      .then(GUNPLAS => {
        this.gunpla = GUNPLAS.data.gunpla
      });

  }

  addPedidoUsuario(){
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
              mutation{
                createPedido(idUsuarioPedido: `+ this.UsuarioLoggedId +`, idMaqueta `+ this.gunpla.idMaqueta +`){
                idUsuarioPedido
          }
        }`
      })
    })
      .then(res => res.json())
      this.router.navigateByUrl("/user");
      
  }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

}
