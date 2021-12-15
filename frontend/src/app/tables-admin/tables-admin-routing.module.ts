import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesAdminPage } from './tables-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TablesAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesAdminPageRoutingModule {}
