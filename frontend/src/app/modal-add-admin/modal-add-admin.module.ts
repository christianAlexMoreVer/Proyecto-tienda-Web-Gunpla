import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddAdminPageRoutingModule } from './modal-add-admin-routing.module';

import { ModalAddAdminPage } from './modal-add-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddAdminPageRoutingModule
  ],
  declarations: [ModalAddAdminPage]
})
export class ModalAddAdminPageModule {}
