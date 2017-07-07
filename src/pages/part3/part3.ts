import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';

declare function require(name: string);
var quiz = require('../../../www/newquestions');

declare function require(name: string);
var iScroll = require('iscroll/build/iscroll.js');

/*
  Generated class for the Part3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-part3',
  templateUrl: 'part3.html'
})
export class Part3Page {
  public scroll: any;

  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    var wrapper = document.getElementById('wrapper');
    var wrapper2 = document.getElementById('wrapper2');
    var wrapper3 = document.getElementById('wrapper3');

    this.addScrollView(wrapper);
    this.addScrollView(wrapper2);
    this.addScrollView(wrapper3);

  }

  viewQuizPage(item) {
    quiz.page = 3;
    quiz.chapter = 'Chapter 3';
    // console.log(this.navCtrl)
    // QuizPage.prototype.page=2;
    //this.navCtrl.page = 2;
    this.navCtrl.push(QuizPage, {
      item: item
    });
  }

  addScrollView(wrapper) {
    this.scroll = new iScroll(wrapper, {
      zoom: true,
      mouseWheel: true,
      wheelAction: 'zoom',
      scrollbars: true

    });

    this.scroll.scrollTo(0, -100);

  }

  goToSlide(slide, index) {
    this.slides.slideTo(index, 500);
  }


}
