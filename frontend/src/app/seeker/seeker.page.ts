import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Gunpla } from '../models/gunplas';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.page.html',
  styleUrls: ['./seeker.page.scss'],
})
export class SeekerPage implements OnInit {

  private UsuarioLoggedId: number;
  public gunplasByName: Array<Gunpla> = [];

  constructor() { }

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
  } 

  DisplayGunplaView(){
    console.log("entrando")
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

}
