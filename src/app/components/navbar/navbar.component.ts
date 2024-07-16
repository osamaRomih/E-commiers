import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private au:AuthService){}
  isOpnen = false;
  isUser = false
  open() {
    this.isOpnen = !this.isOpnen;
  }
//  --------------------------------------
ngOnInit() {
this.au.user.subscribe((user)=>{
  if(user){
    this.isUser = true
    this.au.uid = user.uid
    console.log(this.au.uid)
  }else{
    this.isUser = false
    this.au.uid = ''
  }
})
}
//  --------------------------------------
logout(){
 this.au.logout().then(()=>{
  console.log('Out')
 })
}
}
