import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';
/*
  Generated class for the AudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AudioProvider {

  constructor(public nativeAudio: NativeAudio, public platform: Platform ) {
    console.log('Hello AudioProvider Provider');
  }


  preload() {
    this.platform.ready().then(() => {
        this.nativeAudio.preloadSimple('fireSimple', 'assets/audio/fireball.mp3').then((result) => {
          console.log("Preload Simple: " + result);
        },
          (err) => {
            console.log("Preload Simple: " + err);
        });


        this.nativeAudio.preloadComplex('fireComplex', 'assets/audio/countdown.wav', 1, 1, 0).then((result) => {
          console.log("Preload Complex: " + result);
        },
          (err) => {
            console.log("Preload Complex: " + err);
        });

    })

  }


  setVolume(id, value) {
    console.log(id + ' ' + value);
    this.nativeAudio.setVolumeForComplexAsset(id, value).then((result) => {
        this.nativeAudio.play(id).then((result) => {
          console.log("Play: " + result);
        },
          (err) => {
            console.log("Play: " + err);
        });
    },
    (err) => {
      console.log(err);
    })
  }

  changeVolume(value) {
    console.log(value);
    this.platform.ready().then(() => {
      this.nativeAudio.preloadComplex('fireComplex', 'assets/audio/timeCountDown.wav', value, 1, 0).then((result) => {
        console.log("Preload Complex: " + result);
      },
        (err) => {
          console.log("Preload Complex: " + err);
      });
    })
  }

  playAudio(file) {
    console.log(file);
    this.nativeAudio.play(file).then((result) => {
      console.log("Play: " + result);
    },
      (err) => {
        console.log("Play: " + err);
    });
  }


}
