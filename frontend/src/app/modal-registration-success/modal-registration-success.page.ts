import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-registration-success',
  templateUrl: './modal-registration-success.page.html',
  styleUrls: ['./modal-registration-success.page.scss'],
})
export class ModalRegistrationSuccessPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

}
