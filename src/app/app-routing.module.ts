import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartsComponent } from './components/cart/carts.component';
import { IsloginGuard, loginGuard } from './components/services/log--in.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartsComponent, canActivate: [loginGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [loginGuard],
  },
  { path: 'log-in', component: LoginComponent,canActivate:[IsloginGuard] },
  { path: 'sign-up', component: SingUpComponent, canActivate: [IsloginGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
