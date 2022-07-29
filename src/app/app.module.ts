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
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { TopBarComponent } from './components/private/shared/top-bar/top-bar.component';
import { SideBarComponent } from './components/private/shared/side-bar/side-bar.component';
import { FooterDashboardComponent } from './components/private/shared/footer-dashboard/footer-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoriesListComponent } from './components/private/categories/categories-list/categoriesList.component';
import { AddCategoryComponent } from './components/private/categories/add-category/add-category.component';
import { ModifyCategoryComponent } from './components/private/categories/modify-category/modify-category.component';
import { TrainerItemComponent } from './components/public/shared/trainer-item/trainer-item.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainersListComponent } from './components/private/trainers/trainers-list/trainers-list.component';
import { AddTrainerComponent } from './components/private/trainers/add-trainer/add-trainer.component';
import { ModifyTrainerComponent } from './components/private/trainers/modify-trainer/modify-trainer.component';
import { TrainingListComponent } from './components/private/trainings/training-list/training-list.component';
import { AddTrainingComponent } from './components/private/trainings/add-training/add-training.component';
import { ModifyTrainingComponent } from './components/private/trainings/modify-training/modify-training.component';
import { ForgotPasswordComponent } from './components/public/forgot-password/forgot-password.component';
import { MessageListComponent } from './components/private/messages/message-list/message-list.component';
import { MessageList2Component } from './components/private/messages/message-list2/message-list2.component';
import { UsersListComponent } from './components/private/users/users-list/users-list.component';
import { BlogListComponent } from './components/private/blog/blog-list/blog-list.component';
import { AddArticleComponent } from './components/private/blog/add-article/add-article.component';
import { UpdateArticleComponent } from './components/private/blog/update-article/update-article.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { ArticleComponent } from './components/public/article/article.component';
import { SingleArticleComponent } from './components/private/blog/single-article/single-article.component';
import { SingleTrainerComponent } from './components/private/trainers/single-trainer/single-trainer.component';
import { SingleTrainingComponent } from './components/private/trainings/single-training/single-training.component';
import { AdminLoginComponent } from './components/private/admin-login/admin-login.component';
import { SingleCourseComponent } from './components/public/single-course/single-course.component';
import { InscriptionsComponent } from './components/private/trainings/inscriptions/inscriptions.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CourseCardComponent } from './components/public/shared/course-card/course-card.component';
import { TemoignageListComponent } from './components/private/temoignage/temoignage-list/temoignage-list.component';
import { AddTemoignageComponent } from './components/private/temoignage/add-temoignage/add-temoignage.component';
import { ViewTemoignageComponent } from './components/private/temoignage/view-temoignage/view-temoignage.component';
import { UpdateTemoignageComponent } from './components/private/temoignage/update-temoignage/update-temoignage.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes } from '@angular/router';

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
    UpdateArticleComponent,
    BlogComponent,
    ArticleComponent,
    SingleArticleComponent,
    SingleTrainerComponent,
    SingleTrainingComponent,
    AdminLoginComponent,
    SingleCourseComponent,
    InscriptionsComponent,
    CourseCardComponent,
    TemoignageListComponent,
    AddTemoignageComponent,
    ViewTemoignageComponent,
    UpdateTemoignageComponent,
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
    SweetAlert2Module.forRoot(),
    SwiperModule,
    CarouselModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
