import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentReportComponent } from './assesment-report/assesment-report.component';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PermissionGuard } from './permission.guard';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'',component:LoginComponent},
  { path: 'chart1', component: Chart1Component },
  { path: 'chart2', component: Chart2Component },
  {path: 'reset', component:ResetPasswordComponent},
  {path:'home', component:HomeComponent
  , canActivate:[PermissionGuard],
  data:{
    Role:'Admin'
  }},

  {path:'subscription',component:SubscriptionComponent},

  {
    path: 'assessment-report',
    component: AssesmentReportComponent
  },
  {
   path: 'resource-list',
   component: ResourceListComponent
  },
  {
    path: 'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path: 'send-mail',
    component: SendMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
