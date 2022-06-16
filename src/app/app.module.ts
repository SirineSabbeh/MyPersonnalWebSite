import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './profile/header/header.component';
import { AboutComponent } from './profile/about/about.component';
import { NavbarComponent } from './profile/navbar/navbar.component';
import { EducationComponent } from './profile/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NavbarComponent,
    EducationComponent 
],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
