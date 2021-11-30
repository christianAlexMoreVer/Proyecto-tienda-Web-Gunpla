import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGunplaViewPageRoutingModule } from './modal-gunpla-view-routing.module';

import { ModalGunplaViewPage } from './modal-gunpla-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGunplaViewPageRoutingModule
  ],
  declarations: [ModalGunplaViewPage]
})
export class ModalGunplaViewPageModule {}
