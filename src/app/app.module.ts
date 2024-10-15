import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MediaItemComponent } from './media-item/media-item.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SearchPipe } from './search.pipe'
import { ApikeyInterceptor } from './apikey.interceptor';
import { SearchbynamePipe } from './searchbyname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MoviesComponent,
    NavbarComponent,
    NotfoundComponent,
    PeopleComponent,
    RegisterComponent,
    TvComponent,
    MediaItemComponent,
    MoviedetailsComponent,
    SearchPipe,
    SearchbynamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ApikeyInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
