import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CalendarModule } from '../../ion2-calendar';

import { DateselectPage } from './dateselect.page';

const routes: Routes = [
  {
    path: '',
    component: DateselectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CalendarModule
  ],
  declarations: [DateselectPage]
})
export class DateselectPageModule {}
