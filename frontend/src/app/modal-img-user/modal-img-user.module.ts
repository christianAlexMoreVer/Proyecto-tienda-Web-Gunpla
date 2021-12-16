import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalImgUserPageRoutingModule } from './modal-img-user-routing.module';

import { ModalImgUserPage } from './modal-img-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalImgUserPageRoutingModule
  ],
  declarations: [ModalImgUserPage]
})
export class ModalImgUserPageModule {}
