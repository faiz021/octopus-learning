import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
import { Slides } from 'ionic-angular';

declare function require(name: string);
var quiz = require('../../../www/newquestions');
/*
  Generated class for the Part2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-part2',
  templateUrl: 'part2.html'
})
export class Part2Page {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Part2Page');
  }

  viewQuizPage(item) {
    quiz.page = 2;
    quiz.chapter = 'Chapter 2';
    // console.log(this.navCtrl)
    // QuizPage.prototype.page=2;
    //this.navCtrl.page = 2;
    this.navCtrl.push(QuizPage, {
      item: item
    });
  }

  goToSlide(slide, index) {
    this.slides.slideTo(index, 500);
  }

}

