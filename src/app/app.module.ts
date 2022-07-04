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
import { TopBarComponent } from './components/private/shared/top-bar/top-bar.component';
import { SideBarComponent } from './components/private/shared/side-bar/side-bar.component';
import { FooterDashboardComponent } from './components/private/shared/footer-dashboard/footer-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoriesListComponent } from './components/private/shared/categories/categories-list/categoriesList.component';
import { AddCategoryComponent } from './components/private/shared/categories/add-category/add-category.component';
import { ModifyCategoryComponent } from './components/private/shared/categories/modify-category/modify-category.component';
import { TrainerItemComponent } from './components/public/trainer-item/trainer-item.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainersListComponent } from './components/private/shared/trainers/trainers-list/trainers-list.component';
import { AddTrainerComponent } from './components/private/shared/trainers/add-trainer/add-trainer.component';
import { ModifyTrainerComponent } from './components/private/shared/trainers/modify-trainer/modify-trainer.component';
import { TrainingListComponent } from './components/private/shared/trainings/training-list/training-list.component';
import { AddTrainingComponent } from './components/private/shared/trainings/add-training/add-training.component';
import { ModifyTrainingComponent } from './components/private/shared/trainings/modify-training/modify-training.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MessageListComponent } from './components/private/shared/messages/message-list/message-list.component';
import { MessageList2Component } from './components/private/shared/messages/message-list2/message-list2.component';
import { UsersListComponent } from './components/private/shared/users/users-list/users-list.component';
import { BlogListComponent } from './components/private/shared/blog/blog-list/blog-list.component';
import { AddArticleComponent } from './components/private/shared/blog/add-article/add-article.component';
import { UpdateArticleComponent } from './components/private/shared/blog/update-article/update-article.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    OurTeamComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    TopBarComponent,
    SideBarComponent,
    FooterDashboardComponent,
    CategoriesListComponent,
    AddCategoryComponent,
    ModifyCategoryComponent,
    TrainerItemComponent,
    TrainersListComponent,
    AddTrainerComponent,
    ModifyTrainerComponent,
    TrainingListComponent,
    AddTrainingComponent,
    ModifyTrainingComponent,
    ForgotPasswordComponent,
    MessageListComponent,
    MessageList2Component,
    UsersListComponent,
    BlogListComponent,
    AddArticleComponent,
    UpdateArticleComponent
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
