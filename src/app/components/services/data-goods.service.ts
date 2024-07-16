import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Good } from '../interface/good';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataGoodsService {
  constructor(private fs: AngularFirestore, private stor: AngularFireStorage,private rout:Router) {}
  getData() {
    return this.fs
      .collection('goods')
      .snapshotChanges()
      .pipe(
        map((ele) => {
          return ele.map((data) => {
            return {
              id: data.payload.doc.id,
              ...(data.payload.doc.data() as object),
            } as Good;
          });
        })
      );
  }

  addData(name: string, price: number, photo: File) {
    let ref = this.stor.ref('carts').child(photo.name);
    ref.put(photo).then(() => {
     ref.getDownloadURL().subscribe((photo)=>{
      this.fs.collection('goods').add({
        name,
        price,
        photo,
      }).then(()=>{
        this.rout.navigate(['/'])
      })
    })

    });
  }
}
