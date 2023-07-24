import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] , component:HomeComponent},
  {path:'about',  canActivate:[AuthGuard] , component:AboutComponent},
  {path:'tv', canActivate:[AuthGuard] , component:TvComponent},
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule)},
  {path:'moviedetails/:id/:media_type', canActivate:[AuthGuard] , component:MoviedetailsComponent},
  {path:'people',canActivate:[AuthGuard] ,  component:PeopleComponent},
  {path:'movies', canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'footer',canActivate:[AuthGuard] ,  component:FooterComponent},
  {path:'navbar', canActivate:[AuthGuard] , component:NavbarComponent},


  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
