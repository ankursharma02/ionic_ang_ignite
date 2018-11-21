import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupsPage } from './signups';

@NgModule({
  declarations: [
    SignupsPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupsPage),
  ],
})
export class SignupsPageModule {}
