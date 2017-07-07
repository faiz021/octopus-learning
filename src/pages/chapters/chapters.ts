import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chapters page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chapters',
  templateUrl: 'chapters.html'
})
export class ChaptersPage {
  public user: any;
  public userChapters: any;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.user = this.params.get('user');
    var chapterKeys = Object.keys(this.user).filter((key) => {
      return key.toLowerCase().indexOf('chapter') != -1;
    })
    console.log(chapterKeys)
    this.userChapters = chapterKeys.map((key) => {
      var obj = {
        chapter: key,
        score: this.user[key]
      }
      return obj
    });
    console.log(this.userChapters)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChaptersPage');
  }

}
