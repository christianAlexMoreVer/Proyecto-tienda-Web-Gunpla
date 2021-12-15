import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalOptionAdminPageRoutingModule } from './modal-option-admin-routing.module';

import { ModalOptionAdminPage } from './modal-option-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalOptionAdminPageRoutingModule
  ],
  declarations: [ModalOptionAdminPage]
})
export class ModalOptionAdminPageModule {}
