import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequistionsFormPage } from './requistions-form';

@NgModule({
  declarations: [
    RequistionsFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RequistionsFormPage),
  ],
})
export class RequistionsFormPageModule {}
