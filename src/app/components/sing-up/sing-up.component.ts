import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Signup } from '../interface/signup.interface';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
  massegErro:string='';
  constructor(private au:AuthService,private us:UserService, private rout:Router){}

  
  signup(form:any){
    this.au.signUp(form.email,form.password).then((data)=>{
     this.us.getUser(data.user?.uid, form.name, form.address)
    }).then(()=>{
      this.rout.navigate(['/'])
    }).catch((err)=>{
      this.massegErro = err
      // console.log('Erroro',err)
    })
  }
}
