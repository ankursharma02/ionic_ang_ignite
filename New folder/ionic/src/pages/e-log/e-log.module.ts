import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ELogPage } from './e-log';

@NgModule({
  declarations: [
    ELogPage,
  ],
  imports: [
    IonicPageModule.forChild(ELogPage),
  ],
})
export class ELogPageModule {}
