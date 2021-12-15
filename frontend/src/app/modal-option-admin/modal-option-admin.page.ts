import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-option-admin',
  templateUrl: './modal-option-admin.page.html',
  styleUrls: ['./modal-option-admin.page.scss'],
})
export class ModalOptionAdminPage implements OnInit {

  private element: any;

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  } 

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }
}
