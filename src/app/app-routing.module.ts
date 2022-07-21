import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { AboutComponent } from './components/public/about/about.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { OurTeamComponent } from './components/public/our-team/our-team.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';
import { CategoriesListComponent } from './components/private/categories/categories-list/categoriesList.component';
import { AddCategoryComponent } from './components/private/categories/add-category/add-category.component';
import { ModifyCategoryComponent } from './components/private/categories/modify-category/modify-category.component';
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
import { SingleArticleComponent } from './components/private/blog/single-article/single-article.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { ArticleComponent } from './components/public/article/article.component';
import { SingleTrainerComponent } from './components/private/trainers/single-trainer/single-trainer.component';
import { SingleTrainingComponent } from './components/private/trainings/single-training/single-training.component';
import { AdminLoginComponent } from './components/private/admin-login/admin-login.component';
import { AuthGuard } from './guards/auth.guard';
import { SingleCourseComponent } from './components/public/single-course/single-course.component';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { InscriptionsComponent } from './components/private/trainings/inscriptions/inscriptions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    canActivate:[AuthGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate:[AuthGuard],
    component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path:'courses/:id',
    component: SingleCourseComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:id',
    component: ArticleComponent,
  },
  {
    path: 'our-team',
    component: OurTeamComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },

  {
    path: 'admin',
    canActivate:[AuthAdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: CategoriesListComponent,
          },
          {
            path: 'add',
            component: AddCategoryComponent,
          },
          {
            path: 'update/:id',
            component: ModifyCategoryComponent,
          },
        ],
      },
      {
        path: 'trainers',
        children: [
          {
            path: '',
            component: TrainersListComponent,
          },
          {
            path: 'add',
            component: AddTrainerComponent,
          },
          {
            path: 'update/:id',
            component: ModifyTrainerComponent,
          },
          {
            path: ':id',
            component: SingleTrainerComponent,
          },
        ],
      },
      {
        path: 'trainings',
        children: [
          {
            path: '',
            component: TrainingListComponent,
          },
          {
            path: 'add',
            component: AddTrainingComponent,
          },
          {
            path: 'update/:id',
            component: ModifyTrainingComponent,
          },
          {
            path: ':id',
            component: SingleTrainingComponent,
          },
          { 
            path:'inscriptions/:id',
            component:InscriptionsComponent

          }
        ],
      },
      {
        path: 'articles',
        children: [
          {
            path: '',
            component: BlogListComponent,
          },
          {
            path: 'add',
            component: AddArticleComponent,
          },
          {
            path: 'update/:id',
            component: UpdateArticleComponent,
          },
          {
            path: ':id',
            component: SingleArticleComponent,
          },
        ],
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            component: MessageListComponent,
          },

          {
            path: ':id',
            component: MessageList2Component,
          },
        ],
      },
      {
        path: 'users',
        component: UsersListComponent,
      },
     
    ],
  },
  {
    path: 'admin/login',
    canActivate:[AuthGuard],
    component: AdminLoginComponent,
  },

  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
