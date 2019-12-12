import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    firebase.initializeApp({
      apiKey: "AIzaSyDowDOICHw8HjHWCy1pjYuy8XZKIg1NLT4",
      authDomain: "alarm-system-875c3.firebaseapp.com",
      databaseURL: "https://alarm-system-875c3.firebaseio.com",
      projectId: "alarm-system-875c3",
      storageBucket: "alarm-system-875c3.appspot.com",
      messagingSenderId: "509779488194",
      appId: "1:509779488194:web:9ccee2acb19b363fca3a5b",
      measurementId: "G-2VHBLXY3YS"



    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
