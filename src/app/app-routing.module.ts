import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';

const routes: Routes = [
  {path:'auth/signUp',component:SignUpComponent },
  {path:'auth/profile',component:ProfileComponent },
  {path:'auth/CreateRequest',component:CreateRequestComponent },
  {path:'auth/myRequests',component:MyRequestsComponent },
  {path:'admin/requests',component:RequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
