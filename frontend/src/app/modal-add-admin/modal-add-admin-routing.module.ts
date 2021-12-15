import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddAdminPage } from './modal-add-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddAdminPageRoutingModule {}
