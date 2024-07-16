import { Component, OnInit } from '@angular/core';
import { Good } from '../interface/good';
import { DataGoodsService } from '../services/data-goods.service';
import { AuthService } from '../services/auth.service';
import { CartsService } from '../services/carts.service';
import { Cart } from '../interface/cart.inre';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private fs: DataGoodsService,
    private cs: CartsService,
    private au: AuthService
  ) {}
  goods: Good[] = [];
  ngOnInit() {
    this.fs.getData().subscribe((data) => {
      this.goods = data;
    });
  }
  // _______________________________________________________________________
  add: number = -1;

  toCard(index: number) {
    this.add = index;
  }

  buy(amount: any,index:any) {
    let select = this.goods[index];
    let data = {
      name: select.name,
      price: select.price,
    };

    this.cs.addcart( data.name, data.price, amount).then(() => {
      this.add = -1;
      console.log('Yes');
    });
  }

  delet(index:any){
    // console.log(index)
    this.cs.deletOne(this.goods[index].id)
  }
}
