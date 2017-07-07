import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersDetailPage } from "../users-detail/users-detail"
import { UsersService } from '../../providers/users-service';
import { ChaptersPage } from '../chapters/chapters';
/*
  Generated class for the Admin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
  providers: [UsersService]

})
export class AdminPage {
  nameArr: string[];
  public usersData: any;

  constructor(public navCtrl: NavController, public userService: UsersService) {
    // console.log(this.userEmail)
    //this.viewUsers();

  }

  ionViewDidLoad() {
    setTimeout(() => {
      console.log('hello');
      this.viewUsers();
    }, 2000);

    //clearTimeout(timeoutId);

  }

  chaptersPage(username) {
    var selectedUser;
    var objToArr = Object.keys(this.userService.usersData).map((key) => { return this.userService.usersData[key] });

    for (let user of objToArr) {
      if (user.name && user.name === username) {
        selectedUser = user;
      }
    }
    console.log(selectedUser)
    this.navCtrl.push(ChaptersPage, { user: selectedUser })
  }

  userDetailsPage() {
    this.navCtrl.push(UsersDetailPage)
  }

  viewUsers() {
    this.nameArr = this.userService.getUsers();
    console.log(this.userService.usersData)
  }

  errData(err) {
    console.log("Error!")
    console.log(err)
  }

}
