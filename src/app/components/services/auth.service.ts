import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid:string = ''
  user:Observable<firebase.User|null>
  constructor(private au:AngularFireAuth) {
    this.user = au.user
  }

  signUp(email:string,password:string){
    return this.au.createUserWithEmailAndPassword(email,password)
  }
  signUpGoogle(){
    return this.au.signInWithPopup(new GoogleAuthProvider())
  }
  login(email:string,password:string){
    return this.au.signInWithEmailAndPassword(email,password)
  }
  logout(){
    return this.au.signOut()
  }
}
