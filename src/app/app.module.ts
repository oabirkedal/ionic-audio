import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MediaPage } from '../pages/media/media';
import { ContactPage } from '../pages/contact/contact';
import { NativeAudioPage } from '../pages/native-audio/native-audio';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';

import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    MediaPage,
    ContactPage,
    NativeAudioPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MediaPage,
    ContactPage,
    NativeAudioPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    NativeAudio,
    SplashScreen,
    Media,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
