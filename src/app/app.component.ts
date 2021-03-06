import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XCollab';
  currentUser: string;

  constructor(public afAuth: AngularFireAuth, private exerciseService: ExerciseService) {}
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.afAuth.user.subscribe(authData => this.exerciseService.initUser(authData.uid));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.currentUser = '';
  }
  getUser() {
    return this.currentUser;
  }
}
