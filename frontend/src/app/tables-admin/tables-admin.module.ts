import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablesAdminPageRoutingModule } from './tables-admin-routing.module';

import { TablesAdminPage } from './tables-admin.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablesAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TablesAdminPage]
})
export class TablesAdminPageModule {}
