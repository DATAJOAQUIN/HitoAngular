import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsercontactComponent } from './add-usercontact/add-usercontact.component';
import { EditUsercontactComponent } from './edit-usercontact/edit-usercontact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CookiesComponent} from './cookies/cookies.component';
import {PrivacyComponent} from './privacy/privacy.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'edit', component: EditUsercontactComponent },
  { path: 'add', component: AddUsercontactComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
