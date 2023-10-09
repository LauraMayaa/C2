import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../app/user-profile/user-profile.component'
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  { path: '', redirectTo: '/User', pathMatch: 'full' },
  // { path: 'Menu', component: MenuComponent },
  { path: 'User', component: UserProfileComponent },
  { path: 'SignUp', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
