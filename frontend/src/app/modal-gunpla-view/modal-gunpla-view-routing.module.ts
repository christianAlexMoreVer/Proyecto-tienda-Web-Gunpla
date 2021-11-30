import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGunplaViewPage } from './modal-gunpla-view.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGunplaViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGunplaViewPageRoutingModule {}
