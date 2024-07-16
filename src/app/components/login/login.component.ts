import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  message=''
  constructor(private fb: FormBuilder, private au: AuthService, private rout:Router) {}

  myForm: any;
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(9)],
      ],
    });
  }

  login(form: any) {
    this.au.login(form.email, form.password).then(()=>{
      this.rout.navigate(['/'])
    }).catch((err)=>{
      this.message = err
    })
  }
}
