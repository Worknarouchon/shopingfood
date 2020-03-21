import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{ YumvunPage } from '../pages/yumvun/yumvun';
import{ YumkanomgPage } from '../pages/yumkanomg/yumkanomg';
import{ YumkanaPage } from '../pages/yumkana/yumkana';
import{ YumhoshPage } from '../pages/yumhosh/yumhosh';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    YumvunPage,
    YumkanomgPage,
    YumkanaPage,
    YumhoshPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    YumvunPage,
    YumkanomgPage,
    YumkanaPage,
    YumhoshPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
