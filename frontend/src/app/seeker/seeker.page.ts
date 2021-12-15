import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalGunplaViewPage } from '../modal-gunpla-view/modal-gunpla-view.page';
import { Gunpla } from '../models/gunplas';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.page.html',
  styleUrls: ['./seeker.page.scss'],
})
export class SeekerPage implements OnInit {

  private UsuarioLoggedId: number;
  public gunplasByName: Array<Gunpla> = [];
  private modelData: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }

    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);

    console.log(this.UsuarioLoggedId)
  } 

  displayGunplasByName(ev: any) {

    let val = ev.target.value;

    if (val && val.trim() != '') {
      fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
              query{
               gunplaByName(nombre: \"`+val+`\"){
                idMaqueta
                nombre
                breveIntro
                imgFileName
          }
        }`
        })
      })
        .then(res => res.json())
        .then(GUNPLAS => {
          this.gunplasByName = GUNPLAS.data.gunplaByName
          document.getElementById("results").style.display ="flex"
        });
        
    }

    else {
      document.getElementById("results").style.display = "none";
    }

  }

  async DisplayGunplaView(g: any) {
    
    const modal = await this.modalController.create({
      component: ModalGunplaViewPage,
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

}
