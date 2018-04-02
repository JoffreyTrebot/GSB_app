import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { MenuPage } from '../pages/Menu/menu';

import { MedicamentsPage } from '../pages/Medicaments/medicaments';
import { VisiteursPage } from '../pages/Visiteurs/visiteurs';
import { PraticiensPage } from '../pages/Praticiens/praticiens';

// Api
import { HttpModule } from '@angular/http';
import { ApiGsbService } from '../services/apiGsb.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    MedicamentsPage,
    VisiteursPage,
    PraticiensPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    MedicamentsPage,
    VisiteursPage,
    PraticiensPage
  ],
  providers: [
    ApiGsbService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
