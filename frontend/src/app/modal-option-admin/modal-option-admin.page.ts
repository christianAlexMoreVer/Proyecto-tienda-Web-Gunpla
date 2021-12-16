import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-option-admin',
  templateUrl: './modal-option-admin.page.html',
  styleUrls: ['./modal-option-admin.page.scss'],
})
export class ModalOptionAdminPage implements OnInit {

  private gunpla: any = null;
  private pedido: any = null;
  private usuario: any = null;
  private nombre: any;
  private precio: any;
  private escala: any;
  private tipoGrado: any;
  private breveIntro: any;
  private descripcion: any;
  private imgFileName: any;
  private img: File;
  private nombreUser: any;
  private apellidos: any;
  private contrasena: any;
  private correoElectronico: any;
  private idUsuarioPedido: any;
  private idMaqueta: any;
  private formData = new FormData();

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  } 

  validFileType(imgType) {

    const fileTypes = [
      "image/apng",
      "image/bmp",
      "image/gif",
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/jpg",
    ];

    return fileTypes.includes(imgType.type);
  }

  uploadImg(event) {
    const file = event.target.files[0];

    if (this.validFileType(file)) {
      this.img = file
      this.formData.append('file', this.img)
      this.imgFileName = file.name;
      this.formData.append('nombre', this.imgFileName)
    };
  }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  uploadElement(){
    if(this.gunpla != null){
      document.getElementById("container-FormMaqueta").style.display="block";
      document.getElementById("container-options").style.display="none";
    }

    if(this.pedido != null){
      document.getElementById("container-FormPedido").style.display="block";
      document.getElementById("container-options").style.display="none";
    }

    if(this.usuario != null){
      document.getElementById("container-FormUsuario").style.display="block";
      document.getElementById("container-options").style.display="none";
    }
  }

  updatePedido(){
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  mutation {
                    updatePedido(idPedido: `+this.pedido.idPedido+`, idUsuarioPedido: `+this.idUsuarioPedido+`, idMaqueta: `+this.idMaqueta+` )
                  }`
      })
    })
      .then(res => res.json())
      this.router.navigateByUrl("/tables-admin")
      this.closeModel();
  }

  updateMaqueta(){
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  mutation {
                    updateGunpla(idMaqueta: `+this.gunpla.idMaqueta+`, nombre: \"`+this.nombre+`\", precio: `+this.precio+`, escala: \"`+this.escala+`\", tipoGrado: \"`+this.tipoGrado+`\", breveIntro: \"`+this.breveIntro+`\", descripcion: \"`+this.descripcion+`\", imgFileName: \"`+this.imgFileName+`\"){
                      nombre
                    }
                  }`
      })
    })
      .then(res => res.json())
      this.router.navigateByUrl("/tables-admin")
      this.closeModel();
  }

  updateUsuario(){
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  mutation {
                    updateUsuario(idUsuario: `+this.usuario.idUsuario+`, nombre: `+this.nombreUser+`, apellidos: `+this.apellidos+`, contrasena: `+this.contrasena+`, correoElectronico: `+this.correoElectronico+`){
                      nombre
                    }
                  }`
      })
    })
      .then(res => res.json())
      this.router.navigateByUrl("/tables-admin")
      this.closeModel();
  }

  deleteElement(){

    if(this.gunpla != null){
      fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  mutation {
                    deleteGunpla(idMaqueta: `+this.gunpla.idMaqueta+`)
                  }`
      })
    })
      .then(res => res.json())
      this.router.navigateByUrl("/tables-admin")
      this.closeModel();
    }

    if(this.pedido != null){
      fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  mutation {
                    deletePedido(idPedido: `+this.pedido.idPedido+` )
                  }`
      })
    })
      .then(res => res.json())
      this.router.navigateByUrl("/tables-admin")
      this.closeModel();
    }

    if(this.usuario != null){
      fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                  mutation {
                    deleteUsuario(idUsuario: `+this.usuario.idUsuario+`)
                  }`
      })
    })
      .then(res => res.json())
      this.router.navigateByUrl("/tables-admin")
      this.closeModel();
    }

  }
}
