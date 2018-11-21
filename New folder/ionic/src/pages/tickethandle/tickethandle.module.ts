import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TickethandlePage, BasicPage } from './tickethandle';

@NgModule({
  declarations: [
    TickethandlePage,
    BasicPage
  ],
  imports: [
    IonicPageModule.forChild(BasicPage),
  ],
})
export class TickethandlePageModule {}
