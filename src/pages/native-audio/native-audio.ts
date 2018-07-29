import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';

/*
https://ionicframework.com/docs/native/native-audio/
*/

@Component({
  selector: 'page-home',
  templateUrl: 'native-audio.html'
})
export class NativeAudioPage {

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {

  }

  ionViewDidLoad() {
    //Ionic Native Audio has two ways of playing audio files: Simple and Complex.
    this.nativeAudio.preloadSimple('fireSimple', 'assets/audio/fireball.mp3').then((result) => {
      console.log("Preload Simple: " + result);
    },
      (err) => {
        console.log("Preload Simple: " + err);
    });


    this.nativeAudio.preloadComplex('fireComplex', 'assets/audio/fireball.mp3', 1, 1, 0).then((result) => {
      console.log("Preload Complex: " + result);
    },
      (err) => {
        console.log("Preload Complex: " + err);
    });

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
