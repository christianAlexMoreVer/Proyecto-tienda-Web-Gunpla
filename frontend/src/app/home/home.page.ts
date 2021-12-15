import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Gunpla } from '../models/gunplas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private UsuarioLoggedId: number;
  
  constructor(private router: Router) {}
  

  ngOnInit() {
    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);

    console.log(this.UsuarioLoggedId)
    console.log(localStorage.getItem("adminLogged"))
  }

  
}
