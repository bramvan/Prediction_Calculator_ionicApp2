import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FIREBASE_CONFIG } from './firebase.credentials';

import { Level } from './services/level';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LevelpaginaPage } from '../pages/levelpagina/levelpagina';
import { AuthProvider } from '../providers/auth/auth';

import { NativeAudio } from '@ionic-native/native-audio';

import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LevelpaginaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LevelpaginaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Level,
    AuthProvider,
    NativeAudio,
    ScreenOrientation
    ]
})
export class AppModule {}
