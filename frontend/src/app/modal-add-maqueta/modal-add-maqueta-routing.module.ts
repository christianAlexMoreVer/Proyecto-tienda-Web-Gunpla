import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddMaquetaPage } from './modal-add-maqueta.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddMaquetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddMaquetaPageRoutingModule {}
