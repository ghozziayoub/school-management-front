import { NgModule } from '@angular/core';
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
    path:"add-new-trainer",
    component: AddTrainerComponent
  },
  {
    path:"modify-trainer/:id",
    component: ModifyTrainerComponent
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
