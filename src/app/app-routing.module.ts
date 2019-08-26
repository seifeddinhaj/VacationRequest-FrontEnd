import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'auth/signUp',component:SignUpComponent },
  {path:'welcome',component:WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path:'auth/profile',component:ProfileComponent },
  {path:'auth/CreateRequest',component:CreateRequestComponent },
  {path:'auth/myRequests',component:MyRequestsComponent },
  {path:'auth/resetPassword',component:ResetPasswordComponent },
  {path:'admin/requests',component:RequestComponent },
  {path:'admin/users',component:AllUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
