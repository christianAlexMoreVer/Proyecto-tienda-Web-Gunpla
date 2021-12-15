import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private UsuarioLoggedId: number;
  private adminLogged: number;

  constructor(private menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("UsuarioLoggedId")){
      this.adminLogged =+ localStorage.getItem('adminLogged')
      this.UsuarioLoggedId =+ localStorage.getItem('UsuarioLoggedId');
    }
    
    localStorage.setItem('UsuarioLoggedId',`${ this.UsuarioLoggedId }`);
    this.menuCtrl.swipeGesture(false)
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  logOut(){
    localStorage.removeItem('UsuarioLoggedId')
    localStorage.setItem('usuarioLogged', `${ 0 }`)
    localStorage.removeItem('adminLogged')
    this.router.navigateByUrl("/login")
  }
}
