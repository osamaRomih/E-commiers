import { Component, OnInit } from '@angular/core';
import { Good } from '../interface/good';
import { DataGoodsService } from '../services/data-goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private fs: DataGoodsService) {}
  goods: Good[] = [];
  ngOnInit() {
    this.fs.getData().subscribe((data) => {
      this.goods = data;
    });
  }
// _______________________________________________________________________

  toCard(index: number) {
    console.log(index);
  }
}
