import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Part1Page } from "../part1/part1"
import { Part2Page } from "../part2/part2"
import { Part3Page } from "../part3/part3"
import { UsersDetailPage } from "../users-detail/users-detail"

@Component({

  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {

  }

  viewContent1(item) {
    this.navCtrl.push(Part1Page, {
      item: item
    });
  }


  viewContent2(item) {
    this.navCtrl.push(Part2Page, {
      item: item
    });
  }

  viewContent3(item) {
    this.navCtrl.push(Part3Page, {
      item: item
    });
  }
  userDetailsPage() {
    this.navCtrl.push(UsersDetailPage)
  }
}
