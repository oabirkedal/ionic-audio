import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';
import { AudioProvider } from '../../providers/audio/audio';
/*
https://ionicframework.com/docs/native/native-audio/
*/

@Component({
  selector: 'page-home',
  templateUrl: 'native-audio.html'
})
export class NativeAudioPage {

  volume: number;

  @Input('progress') progress = 100;

  constructor(public navCtrl: NavController, public nativeAudio: NativeAudio,
    public platform: Platform, public audio: AudioProvider ) {

  }

  ionViewDidLoad() {
    this.audio.preload();
    //this.progress = 100;
    //Ionic Native Audio has two ways of playing audio files: Simple and Complex.
    //this.audio.preload();

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
      this.nativeAudio.preloadComplex('fireComplex', 'assets/audio/fireball.mp3', value, 1, 0).then((result) => {
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

  changeProgress(value) {
    this.progress = this.progress + value;
  }

}
