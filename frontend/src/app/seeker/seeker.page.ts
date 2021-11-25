import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Gunpla } from '../models/gunplas';
import { GunplaService } from '../services/gunpla.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.page.html',
  styleUrls: ['./seeker.page.scss'],
})
export class SeekerPage implements OnInit {

  private UsuarioLoggedId: number;
  public gunplasByName: Array<Gunpla> = [];

  constructor(private gunplaService: GunplaService) { }

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
  }

  displayGunplasByName(ev: any){

    let val = ev.target.value;

    if(val && val.trim() != ''){
      this.gunplaService.getGunplaByName(val).subscribe((g: Array<Gunpla>) => {
        this.gunplasByName = g;
        document.getElementById("results").style.display="flex";
      })
    }
    
    else{
      document.getElementById("results").style.display="none";
    }
    
  }

}
