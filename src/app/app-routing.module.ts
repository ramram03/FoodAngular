import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from '../app/signup/signup.component';
import {LoginComponent} from '../app/login/login.component';
import { ShopsComponent } from './shops/shops.component';
import { NoidaComponent } from './noida/noida.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { BangaloreComponent } from './bangalore/bangalore.component';
import { ChennaiComponent } from './chennai/chennai.component';


const routes: Routes = [
  { path: 'shops', component: ShopsComponent},
  { path: 'user', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chennai', component: ChennaiComponent },
  { path: 'hyderabad', component:HyderabadComponent },
  { path: 'bangalore', component:BangaloreComponent },
  { path: 'Noida', component:NoidaComponent },
   {path : '', component : LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }