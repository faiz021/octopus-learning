import { Component, ViewChild} from '@angular/core';

import { NavController, Slides } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';

declare function require(name: string);
var quiz = require('../../../www/newquestions');


@Component({
  selector: 'page-part1',
  templateUrl: 'part1.html',
})

export class Part1Page {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }


  viewQuizPage(item) {
    quiz.page=1;
    quiz.chapter = 'Chapter 1';
   //console.log(this.navCtrl)
   // this.navCtrl.page = 1;
     // QuizPage.prototype.page=1;

    this.navCtrl.push(QuizPage, {
      item: item
    });
  }

  goToSlide(slide, index) {
    this.slides.slideTo(index, 500);
  }

}
