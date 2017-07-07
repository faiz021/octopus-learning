import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import { AdminPage } from '../pages/admin/admin';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public rootPage: any;
  zone: NgZone;


  constructor(platform: Platform) {

    this.zone = new NgZone({});
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB6nQjgSZaLnFoA8chWJ5P7ob_pFiWbUFQ",
      authDomain: "octopus-learning.firebaseapp.com",
      databaseURL: "https://octopus-learning.firebaseio.com",
      storageBucket: "octopus-learning.appspot.com",
      messagingSenderId: "306816009652"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      // var userId = firebase.auth().currentUser.uid;
      if (!user) {
        console.log("in login")
        this.rootPage = LoginPage;
        return true;
      }
      if (firebase.auth().currentUser && firebase.auth().currentUser.uid) {
        var isAdmin: boolean;
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value').then(snapshot => {
          isAdmin = snapshot.val().isAdmin;
          console.log(isAdmin);
          this.zone.run(() => {
            if (!isAdmin) {
              this.rootPage = HomePage;
              console.log("in home false");
            } else {
              this.rootPage = AdminPage;
              console.log("in admin true");
            }
            //}
          });
          //this.gotData(isAdmin);
        });
        console.log(firebase.auth().currentUser)
      }

    });
    //this.rootPage = LoginPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


}
