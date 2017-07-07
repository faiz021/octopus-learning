import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersService } from '../../providers/users-service';
import { LoginPage } from '../login/login'

/*
  Generated class for the UsersDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users-detail',
  templateUrl: 'users-detail.html',
  providers: [UsersService]
})
export class UsersDetailPage {

  public email:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UsersService) {
    this.email = this.userService.fireAuth.currentUser.email
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UsersDetailPage');
  }

  logUserOut(){
    this.userService.logoutUser()
    .then(()=>{
      this.navCtrl.setRoot(LoginPage)
    });
  }

}
