import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataGoodsService } from '../services/data-goods.service';
import { Good } from '../interface/good';

@Component({
  selector: 'app-cart',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('image') img!: ElementRef;

  constructor(private storage: DataGoodsService) {}
  dashboard(form: NgForm) {
    let data: Good = form.value;
    let photo = (<HTMLInputElement>this.img.nativeElement).files![0];
    console.log(data, photo)
    this.storage.addData(data.name, data.price, photo)
  }
}
