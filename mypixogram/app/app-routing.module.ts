import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchReasultComponent } from './search-reasult/search-reasult.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './services/auth-guard.service';
import { ErrorComponent } from './error/error.component';
import { LogOutComponent } from './logout/logout.component';
import { MediaUpdateComponent } from './media/media-update/media-update.component';
import { MediaAddComponent } from './media/media-add/media-add.component';
import { MediaListComponent } from './media/media-list/media-list.component';


const routes: Routes = [
  { path:"", redirectTo : "home", pathMatch: "full"},
  { path:"home", component: HomeComponent},
  { path:"contactus", component: ContactComponent},
  { path:"aboutus", component: AboutComponent},
  { path:"login", component: LoginComponent},

 
 
  // add a fallback mapping

  { path:"media", component: MediaListComponent, canActivate : [AuthGuardService]},
  { path:"media-add", component: MediaAddComponent, canActivate : [AuthGuardService]},
  { path:"media-update/:mediaId", component: MediaUpdateComponent, canActivate : [AuthGuardService]},
  { path:"logout", component:LogOutComponent, canActivate : [AuthGuardService]},
  // <url>/:<name by which data is accessed>
  { path:"search/:searchText", component:  SearchReasultComponent},
  { path:"**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
