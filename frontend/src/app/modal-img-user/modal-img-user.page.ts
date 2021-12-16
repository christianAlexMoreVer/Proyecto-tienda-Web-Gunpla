import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-img-user',
  templateUrl: './modal-img-user.page.html',
  styleUrls: ['./modal-img-user.page.scss'],
})
export class ModalImgUserPage implements OnInit {

  private UsuarioLoggedId: number;
  private static imgTest: any;
  private img: any;
  private imgFileName: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
  }

  uploadImg(event) {
    const file = event.target.files[0];

    if (this.validFileType(file)) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        ModalImgUserPage.setImage(reader.result)
      }
      this.imgFileName = file.name;
    };
  }

  static setImage(x: any) {
    ModalImgUserPage.imgTest = x;
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

  updateImgUser() {
    this.img = ModalImgUserPage.imgTest;  
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
              mutation{
                updateUsuarioImgUser(idUsuario: `+this.UsuarioLoggedId+`, imgUser: `+this.imgFileName+`, img64: `+this.img+` ){
                idUsuario
          }
        }`
      })
    })
      .then(res => res.json())
  }


}
