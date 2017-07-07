import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UsersService } from '../../providers/users-service';
//import * as firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersService]
})
export class LoginPage {

  public emailField: any;
  public passwordField: any;
  public rootPage: any;

  constructor(public alertCtrl: AlertController, public loadCtrl: LoadingController, public navCtrl: NavController, public userService: UsersService) {

  }

  register(item) {
    this.navCtrl.push(RegisterPage, {
      item: item
    });
  }


  loginUser() {
    if (!this.emailField) {
      alert('Email or Password cannot be empty')
      return
    }
    this.userService.loginUser(this.emailField, this.passwordField)
      .then(user => {

      }, err => {
        //alert('errror logging in: ' + err)
        let alert = this.alertCtrl.create({
          title: 'Error loggin in',
          subTitle: err.message,
          buttons: ['OK']
        });
        alert.present();
      });

    let loader = this.loadCtrl.create({
      //dismissOnPageChange: true
    })
    loader.dismiss;
  }
  

  forgotPassword() {
    let prompt = this.alertCtrl.create({
      title: 'Enter Your Email',
      message: "A new password will be sent to your email",
      inputs: [
        {
          name: 'recoverEmail',
          placeholder: 'you@example.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {

            //add preloader
            let loading = this.loadCtrl.create({
              dismissOnPageChange: true,
              content: 'Reseting your password...'
            });
            loading.present();

            console.log("Cool Mr." + data.recoverEmail)
            this.userService.recoverPassword(data.recoverEmail).then(() => {
              loading.dismiss().then(() => {
                //show pop up
                let alert = this.alertCtrl.create({
                  title: 'Check your email',
                  subTitle: 'Password reset successful',
                  buttons: ['OK']
                });
                alert.present();
              })

            }, error => {
              //show pop up
              loading.dismiss().then(() => {
                let alert = this.alertCtrl.create({
                  title: 'Error resetting password',
                  subTitle: error.message,
                  buttons: ['OK']
                });
                alert.present();
              })

            })
          }
        }
      ]//buttons
    });
    prompt.present();
  }
}

