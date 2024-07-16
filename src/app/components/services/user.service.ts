import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fs:AngularFirestore){}
  
getUser(uid:any,name:string,address:string){
  return this.fs.collection('user').doc(uid).set({
    name,address
  })
}

}
