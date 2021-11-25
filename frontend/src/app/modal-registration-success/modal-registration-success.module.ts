import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRegistrationSuccessPageRoutingModule } from './modal-registration-success-routing.module';

import { ModalRegistrationSuccessPage } from './modal-registration-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRegistrationSuccessPageRoutingModule
  ],
  declarations: [ModalRegistrationSuccessPage]
})
export class ModalRegistrationSuccessPageModule {}
