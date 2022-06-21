import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { AboutComponent } from './components/public/about/about.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { OurTeamComponent } from './components/public/our-team/our-team.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/public/page404/page404.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';

import { DisplayTeamComponent } from './components/public/display-team/display-team.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    OurTeamComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DisplayTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
