import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { AboutComponent } from './components/public/about/about.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { OurTeamComponent } from './components/public/our-team/our-team.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';
import { CategoriesListComponent } from './components/private/shared/categories/categories-list/categoriesList.component';
import { AddCategoryComponent } from './components/private/shared/categories/add-category/add-category.component';
import { ModifyCategoryComponent } from './components/private/shared/categories/modify-category/modify-category.component';
import { TrainersListComponent } from './components/private/shared/trainers/trainers-list/trainers-list.component'
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
import { BlogComponent } from './components/public/blog/blog.component';
import { ArticleComponent } from './components/public/article/article.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "blog/:id",
    component: ArticleComponent
  },
  {
    path: "our-team",
    component: OurTeamComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },

  {
    path:"forgotPassword",
    component :ForgotPasswordComponent
 
  },
  
  {
    path:"category",
    component: CategoriesListComponent
  },
  {
    path:"add-new-category",
    component: AddCategoryComponent
  },
  {
    path:"modify-category/:id",
    component: ModifyCategoryComponent
  },
  {
    path:"trainer-list",
    component: TrainersListComponent
  },
  {
    path:"users-list",
    component: UsersListComponent
  },
  {
    path:"add-new-trainer",
    component: AddTrainerComponent
  },
  {
    path:"modify-trainer/:id",
    component: ModifyTrainerComponent
  },
  {
    path:"training-list",
    component: TrainingListComponent
  },
  {
    path:"add-new-training",
    component: AddTrainingComponent
  },
  {
    path:"modify-training/:id",
    component: ModifyTrainingComponent
  },
  
  {
    path:"article-list",
    component: BlogListComponent
  },
  {
    path:"add-new-article",
    component: AddArticleComponent
  },
  {
    path:"modify-article/:id",
    component: UpdateArticleComponent
  },
  
  {
    path:"message-list",
    component:MessageListComponent
  },

  {
    path:"message/:id",
    component:MessageList2Component
  },
  {
    path: "**",
    component: Page404Component
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
