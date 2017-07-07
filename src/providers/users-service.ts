import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UsersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/



@Injectable()
export class UsersService {

  public fireAuth: any;
  public userProfile: any;
  public isAdmin: any;
  public usersData: any;
  nameArr: string[] = [];

  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    this.userProfile.on('value', this.gotData, this);
  }

  gotData(data) {
    console.log("got called")
    console.log(data.val())
    this.usersData = data.val();
    var user = data.val();
    var keys = Object.keys(user);
    //console.log(keys);
    for (var i = 1; i < keys.length; i++) {
      var k = keys[i];
      var userName = user[k].name;
      this.nameArr.push(userName);

    }
  }

  getUsers() {
    return this.nameArr;
  }

  // Login the users
  registerUser(email: string, password: string, name: string) {
    var isAdmin = false;
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        //User is registered now log him in.
        this.fireAuth.signInWithEmailAndPassword(email, password)
          .then((signedInUser) => {
            this.userProfile.child(signedInUser.uid).set({
              email: email,
              isAdmin: isAdmin,
              name: name
            })
          }, err => {
            alert('error signing in ')
          })
      }, err => {
        alert('errror : reigtering, ' + err)
      })
  }

  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((signedInUser) => {
        /* this.userProfile.child(signedInUser.uid).set({
           email: email
         })*/
      })
  }

  errData(err) {
    console.log("Error!")
    console.log(err)
  }

  storeScore(chapter, score) {
    var userId = firebase.auth().currentUser.uid
    var obj = {};
    obj[chapter] = score;
    firebase.database().ref('users/' + userId).update(obj).then((user) => {
    }, err => {
      console.log(err)
    })
  }

  logoutUser() {
    return this.fireAuth.signOut();
  }

  recoverPassword(email: any) {
    return this.fireAuth.sendPasswordResetEmail(email)
  }


}
