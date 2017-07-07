import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz';
import { AdminPage } from '../pages/admin/admin';
import { UsersDetailPage } from '../pages/users-detail/users-detail';
import { ChaptersPage } from '../pages/chapters/chapters';

import { Part1Page } from '../pages/part1/part1';
import { Part2Page } from '../pages/part2/part2';
import { Part3Page } from '../pages/part3/part3';

import { UsersService } from '../providers/users-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    QuizPage,
    AdminPage,
    UsersDetailPage,
    ChaptersPage,
    Part1Page,
    Part2Page,
    Part3Page

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    QuizPage,
    AdminPage,
    UsersDetailPage,
    ChaptersPage,
    Part1Page,
    Part2Page,
    Part3Page
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, UsersService]
})
export class AppModule { }
