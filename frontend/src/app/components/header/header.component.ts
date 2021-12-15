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
  private adminLogged: number;

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {

    if(localStorage.getItem("UsuarioLoggedId")){
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
      this.usuarioLogged =+ localStorage.getItem('usuarioLogged');
      this.adminLogged =+ localStorage.getItem('adminLogged')
    }

    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);

  } 

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
