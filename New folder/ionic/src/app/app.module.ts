import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequistionsPage } from '../pages/requistions/requistions';
import { TicketsPage } from '../pages/tickets/tickets';
import { ELogPage } from '../pages/e-log/e-log';
import { MapPage } from '../pages/map/map';
import { CollaborationPage } from '../pages/collaboration/collaboration';
import { SettingPage } from '../pages/setting/setting';
import { MenualsPage } from '../pages/menuals/menuals';
import { SignupsPage } from '../pages/signups/signups';
import { Loadtab1Page } from '../pages/loadtab1/loadtab1';
import { RequistionsFormPage } from '../pages/requistions-form/requistions-form';
import { TickethandlePage, BasicPage } from '../pages/tickethandle/tickethandle';
import { Unloadtab2Page } from '../pages/unloadtab2/unloadtab2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RequistionsPage,
    TicketsPage,
    ELogPage,
    MapPage,
    CollaborationPage,
    SettingPage,
    MenualsPage,
    SignupsPage,
    Loadtab1Page,
    RequistionsFormPage,
    TickethandlePage,
    Unloadtab2Page,
    BasicPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      pageTransition: 'md-transition'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RequistionsPage,
    TicketsPage,
    ELogPage,
    MapPage,
    CollaborationPage,
    SettingPage,
    MenualsPage,
    SignupsPage,
    Loadtab1Page,
    RequistionsFormPage,
    TickethandlePage,
    Unloadtab2Page,
    BasicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
