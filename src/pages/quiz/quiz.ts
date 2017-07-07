import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Part1Page } from '../part1/part1';
import { UsersService } from '../../providers/users-service';

declare function require(name: string);
var quiz = require('../../../www/newquestions');

@Component({

  templateUrl: 'quiz.html',
  providers: [UsersService]
})
export class QuizPage {

public score:number;

  constructor(public navCtrl: NavController, public userService: UsersService) {
    //  console.log("textt")

    quiz.greet();
    //quiz.getScore();
  }



  ionViewDidLoad() {
 

    quiz.populate(true);
    var self = this; 
    document.addEventListener('quizEnded', function(data){

      console.log("got event")
      console.log(data)
      //if (data.detail && data.detail.score) {
        self.userService.storeScore(quiz.chapter, (<any>data).detail.score)
      //}
      
      //console.log(data.detail)
    }, false)
    
  }


}

