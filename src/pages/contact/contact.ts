import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { AudioProvider } from '../../providers/audio/audio';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  duel_ready:boolean = false;

  //Timer
  timeCountDown: number;
  hidevalue: boolean = false;

  subscription: any;
  time: number = 0;
  countdown: number = 0;

  constructor(public navCtrl: NavController, public audio: AudioProvider ) {

  }

  ionViewDidEnter() {
    this.audio.preload();
    this.startTimer(5);
  }

  duelMode() {
    this.duel_ready = !this.duel_ready;
  }

  startTimer(timeEnd) {
    this.subscription = Observable.interval(1000).subscribe(x => {
      
      this.audio.playAudio('beep');
    // the number 1000 is on miliseconds so every second is going to have an iteration of what is inside this code.
      console.log (this.time);
      this.time++;
      this.countdown = timeEnd - this.time;

      if (this.time >= timeEnd) {
        this.stopTimer();
      }
    });
  }

  stopTimer() {
    this.duel_ready = true;
    this.subscription.unsubscribe();
  }

}
