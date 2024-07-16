import { Component } from '@angular/core';
import { CartsService } from '../services/carts.service';
import { Cart } from '../interface/cart.inre';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent {

  constructor(private cs:CartsService){}
  cart:Array<Cart>=[]
  ngOnInit() {
    this.cs.getData().subscribe((data)=>{
      this.cart = data

    })
  }

  save(index:any){
      this.cs.updata(this.cart[index].id,this.cart[index].amount)
  }

  delete(index:any){
    this.cs.delete(this.cart[index].id)
  }

  deletAll(){
    this.cs.deleteAll()
  }
}
