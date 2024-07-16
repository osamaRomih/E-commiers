import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let au = inject(AuthService);
  let rout = inject(Router);
  return new Promise((resolve, reject) => {
    au.user.subscribe((user) => {
      if (user) {
        resolve(true);
      } else {
        rout.navigate(['login']);
        resolve(false);
      }
    });
  });
}
export const IsloginGuard: CanActivateFn = (route, state) => {
  let au = inject(AuthService);
  let rout = inject(Router);
  return new Promise((resolve, reject) => {
    au.user.subscribe((user) => {
      if (user) {
        rout.navigate(['/']);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });

}
