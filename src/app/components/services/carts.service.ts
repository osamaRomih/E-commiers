import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { map } from 'rxjs';
import { Cart } from '../interface/cart.inre';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private fs:AngularFirestore,private au:AuthService){}

  addcart(name:string,price:number, amount:number){
   return this.fs.collection('user').doc(this.au.uid).collection('cart').add({
      name,
      price,
      amount
    })
  }

  getData(){
    return this.fs.collection('user').doc(this.au.uid).collection('cart').snapshotChanges().pipe(
      map((ele)=>{
        return ele.map((data)=>{
          return{
            id:data.payload.doc.id,
            ...data.payload.doc.data() as object
          } as Cart
        })
      })
    )}

    delete(id:string){
      return this.fs.collection(`user/${this.au.uid}/cart`).doc(id).delete()
    }

    deleteAll(){
      return this.fs.collection('user').doc(this.au.uid).collection('cart').get().subscribe((dataid)=>{
        dataid.forEach((ele)=>{
          ele.ref.delete()
        })
      })
    }

    updata(id:string,amount:any){
      return this.fs.collection(`user/${this.au.uid}/cart`).doc(id).update({
        amount
      })
    }

  //  ----------------------------------------
  deletOne(id:string){
    return this.fs.collection('goods').doc(id).delete()
  }
    }


