import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-maqueta',
  templateUrl: './modal-add-maqueta.page.html',
  styleUrls: ['./modal-add-maqueta.page.scss'],
})
export class ModalAddMaquetaPage implements OnInit {

  private nombre: any;
  private precio: any;
  private escala: any;
  private tipoGrado: any;
  private breveIntro: any;
  private descripcion: any;
  private imgFileName: any;
  private img: any;
  private static imgTest: any;

  constructor(
    private router: Router,
    private modalController: ModalController,

  ) {
  }

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
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        ModalAddMaquetaPage.setImage(reader.result)
      }
      this.imgFileName = file.name;
    };
  }

  static setImage(x: any) {
    ModalAddMaquetaPage.imgTest = x;
  }


  createMaqueta() {
    this.img = ModalAddMaquetaPage.imgTest;  
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
              mutation{
                createGunpla(nombre: \"`+ this.nombre + `\", precio: ` + this.precio + `, escala: \"` + this.escala + `\", tipoGrado: \"` + this.tipoGrado + `\", breveIntro: \"` + this.breveIntro + `\", descripcion: \"` + this.descripcion + `\", imgFileName: \"` + this.imgFileName + `\", img64: \"` + this.img + `\"){
                nombre
          }
        }`
      })
    })
      .then(res => res.json())
  }

}
