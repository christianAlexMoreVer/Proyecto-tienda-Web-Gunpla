import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeekerPageRoutingModule } from './seeker-routing.module';

import { SeekerPage } from './seeker.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeekerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SeekerPage]
})
export class SeekerPageModule {}
