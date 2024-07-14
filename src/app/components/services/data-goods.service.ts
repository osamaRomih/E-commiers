import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Good } from '../interface/good';

@Injectable({
  providedIn: 'root'
})
export class DataGoodsService {

  constructor(private fs:AngularFirestore) { }
  getData(){
    return this.fs.collection('goods').snapshotChanges().pipe(map(ele=>{
      return ele.map((data)=>{
        return {
          id:data.payload.doc.id,
          ...data.payload.doc.data() as object
        } as Good
      })
    }))
  }
}
