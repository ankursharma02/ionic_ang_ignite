import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenualsPage } from './menuals';

@NgModule({
  declarations: [
    MenualsPage,
  ],
  imports: [
    IonicPageModule.forChild(MenualsPage),
  ],
})
export class MenualsPageModule {}
