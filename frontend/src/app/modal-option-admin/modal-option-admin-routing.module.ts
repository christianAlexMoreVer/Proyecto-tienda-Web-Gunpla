import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalOptionAdminPage } from './modal-option-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ModalOptionAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOptionAdminPageRoutingModule {}
