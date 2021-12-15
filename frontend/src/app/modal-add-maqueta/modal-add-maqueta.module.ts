import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddMaquetaPageRoutingModule } from './modal-add-maqueta-routing.module';

import { ModalAddMaquetaPage } from './modal-add-maqueta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddMaquetaPageRoutingModule
  ],
  declarations: [ModalAddMaquetaPage]
})
export class ModalAddMaquetaPageModule {}
