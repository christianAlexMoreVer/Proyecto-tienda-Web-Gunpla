import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private UsuarioLoggedId: number;
  private usuarioLogged: number;

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
      this.usuarioLogged =+ localStorage.getItem('usuarioLogged');
    }

    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);

    console.log(this.usuarioLogged)
  } 

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
