import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  storeUserDate(user: any) {
    this.firestore
      .collection('users')
      .doc(user.uid)
      .set({
        email: user.email,
        uid: user.uid,
        emailverified: user.emailVerified,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(JSON.stringify(userCredential));
        this.router.navigate(['/']);
        this.storeUserDate(userCredential.user);
        return userCredential.user;
      });
  }
  sendVerificationMail() {
    return this.fireAuth.currentUser.then((u: any) =>
      u.sendEmailVerification()
    );
  }

  registerUser(email: string, password: string) {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(JSON.stringify(userCredential.user));
        this.storeUserDate(userCredential.user);
        this.sendVerificationMail();
        this.router.navigate(['/verify-email']);
      });
  }
}
