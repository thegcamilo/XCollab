import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CourseCollab';
  currentUser: string;

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // this.afAuth.user.subscribe(authData => this.currentUser = authData.uid);
  }
  logout() {
    this.afAuth.auth.signOut();
    // this.currentUser = '';
  }
  getUser() {
    return this.currentUser;
  }
}
