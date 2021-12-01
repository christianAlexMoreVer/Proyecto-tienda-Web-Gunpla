import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-registration-success',
  templateUrl: './modal-registration-success.page.html',
  styleUrls: ['./modal-registration-success.page.scss'],
})
export class ModalRegistrationSuccessPage implements OnInit {

  private UsuarioLoggedId: number;
  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("UsuarioLoggedId")) {
      this.UsuarioLoggedId = + localStorage.getItem('UsuarioLoggedId');
    }

    localStorage.setItem('UsuarioLoggedId', `${this.UsuarioLoggedId}`);

    console.log(this.UsuarioLoggedId)
  }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  goToLoggin() {
    this.router.navigateByUrl("/login")
    this.modalController.dismiss(close);
  }

}
