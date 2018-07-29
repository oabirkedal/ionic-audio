import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

/*
  https://ionicframework.com/docs/native/media/
*/

@Component({
  selector: 'page-about',
  templateUrl: 'media.html'
})

export class MediaPage {



  constructor(public navCtrl: NavController, private media: Media, private file: File) {

  }

  ionViewDidLoad() {
    
  }

  play() {
    const file: MediaObject = this.media.create('assets/audio/fireball.mp3');
    file.play();
  }

}
