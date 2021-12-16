import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalImgUserPage } from './modal-img-user.page';

const routes: Routes = [
  {
    path: '',
    component: ModalImgUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalImgUserPageRoutingModule {}
