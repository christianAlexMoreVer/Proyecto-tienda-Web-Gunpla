import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Gunpla } from '../models/gunplas';

@Component({
  selector: 'app-modal-add-maqueta',
  templateUrl: './modal-add-maqueta.page.html',
  styleUrls: ['./modal-add-maqueta.page.scss'],
})
export class ModalAddMaquetaPage implements OnInit {

  gunpla: Gunpla;

  constructor(
    private router: Router,
    private modalController: ModalController

  ) { 
  }

  ngOnInit() {
  }

}
