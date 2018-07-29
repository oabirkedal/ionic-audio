import { Component } from '@angular/core';

import { MediaPage } from '../media/media';
import { ContactPage } from '../contact/contact';
import { NativeAudioPage } from '../native-audio/native-audio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NativeAudioPage;
  tab2Root = MediaPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
