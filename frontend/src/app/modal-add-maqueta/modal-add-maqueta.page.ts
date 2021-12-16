import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

const HttpHeader = {
  headers: new HttpHeaders({
  "enctype": "multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA"
})};

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
  private img: File;
  private formData = new FormData();

  constructor(
    private router: Router,
    private modalController: ModalController,
    private http: HttpClient

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
      this.img = file
      this.formData.append('file', this.img)
      this.imgFileName = file.name;
      this.formData.append('nombre', this.imgFileName)
    };
  }


createMaqueta(){
  fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
              mutation{
                createGunpla(nombre: \"`+ this.nombre + `\", precio: ` + this.precio + `, escala: \"` + this.escala + `\", tipoGrado: \"` + this.tipoGrado + `\", breveIntro: \"` + this.breveIntro + `\", descripcion: \"` + this.descripcion + `\", imgFileName: \"` + this.imgFileName + `\"){
                nombre
          }
        }`
    })
  })
    .then(res => res.json())
    this.http.post<any>("http://localhost:8080/image/maqueta", this.formData, HttpHeader).subscribe(res=>{console.log(res);})
}

}
