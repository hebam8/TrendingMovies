import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
// import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
// import { MovComponent } from './mov/mov.component';



const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] , component:HomeComponent},
  {path:'about',  canActivate:[AuthGuard] , component:AboutComponent},

  // {path:'moviedetails/:id/:media_type',canActivate:[AuthGuard] , component:MovComponent},
  {path:'tv', canActivate:[AuthGuard] ,component:TvComponent},
  {path:'people/:id/:media_type', canActivate:[AuthGuard] , component:TvComponent},
  {path:'footer',canActivate:[AuthGuard] ,  component:FooterComponent},
  {path:'navbar', canActivate:[AuthGuard] , component:NavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
