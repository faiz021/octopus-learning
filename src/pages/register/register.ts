import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UsersService } from '../../providers/users-service';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [UsersService]
})


@Injectable()
export class RegisterPage {

  public name: any;
  public emailField: any;
  public passwordField: any;

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController, public userService: UsersService) {

  }

  register() {
    if (!this.name && !this.emailField && !this.passwordField) {
      alert("Error: Fields cannot be empty!")
      return alert
    }
    this.userService.registerUser(this.emailField, this.passwordField, this.name)
    let loader = this.loadCtrl.create({
      content: 'Registering user...',
      dismissOnPageChange: true
    });

    loader.dismiss;

  }
}
