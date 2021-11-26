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
  }

  displayGunplasByName(ev: any){

    let val = ev.target.value;

    if(val && val.trim() != ''){
      
    }
    
    else{
      document.getElementById("results").style.display="none";
    }
    
  }

}
