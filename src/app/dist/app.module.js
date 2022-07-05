"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/public/home/home.component");
var about_component_1 = require("./components/public/about/about.component");
var courses_component_1 = require("./components/public/courses/courses.component");
var our_team_component_1 = require("./components/public/our-team/our-team.component");
var contact_component_1 = require("./components/public/contact/contact.component");
var login_component_1 = require("./components/public/login/login.component");
var register_component_1 = require("./components/public/register/register.component");
var page404_component_1 = require("./components/public/page404/page404.component");
var navbar_component_1 = require("./components/public/navbar/navbar.component");
var footer_component_1 = require("./components/public/footer/footer.component");
var http_1 = require("@angular/common/http");
var dashboard_component_1 = require("./components/private/shared/dashboard/dashboard.component");
var top_bar_component_1 = require("./components/private/shared/top-bar/top-bar.component");
var side_bar_component_1 = require("./components/private/shared/side-bar/side-bar.component");
var footer_dashboard_component_1 = require("./components/private/shared/footer-dashboard/footer-dashboard.component");
var ngx_toastr_1 = require("ngx-toastr");
var categoriesList_component_1 = require("./components/private/shared/categories/categories-list/categoriesList.component");
var add_category_component_1 = require("./components/private/shared/categories/add-category/add-category.component");
var modify_category_component_1 = require("./components/private/shared/categories/modify-category/modify-category.component");
var trainer_item_component_1 = require("./components/public/trainer-item/trainer-item.component");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var trainers_list_component_1 = require("./components/private/shared/trainers/trainers-list/trainers-list.component");
var add_trainer_component_1 = require("./components/private/shared/trainers/add-trainer/add-trainer.component");
var modify_trainer_component_1 = require("./components/private/shared/trainers/modify-trainer/modify-trainer.component");
var training_list_component_1 = require("./components/private/shared/trainings/training-list/training-list.component");
var add_training_component_1 = require("./components/private/shared/trainings/add-training/add-training.component");
var modify_training_component_1 = require("./components/private/shared/trainings/modify-training/modify-training.component");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var message_list_component_1 = require("./components/private/shared/messages/message-list/message-list.component");
var message_list2_component_1 = require("./components/private/shared/messages/message-list2/message-list2.component");
var users_list_component_1 = require("./components/private/shared/users/users-list/users-list.component");
var blog_list_component_1 = require("./components/private/shared/blog/blog-list/blog-list.component");
var add_article_component_1 = require("./components/private/shared/blog/add-article/add-article.component");
var update_article_component_1 = require("./components/private/shared/blog/update-article/update-article.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                courses_component_1.CoursesComponent,
                our_team_component_1.OurTeamComponent,
                login_component_1.LoginComponent,
                contact_component_1.ContactComponent,
                register_component_1.RegisterComponent,
                page404_component_1.Page404Component,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                dashboard_component_1.DashboardComponent,
                top_bar_component_1.TopBarComponent,
                side_bar_component_1.SideBarComponent,
                footer_dashboard_component_1.FooterDashboardComponent,
                categoriesList_component_1.CategoriesListComponent,
                add_category_component_1.AddCategoryComponent,
                modify_category_component_1.ModifyCategoryComponent,
                trainer_item_component_1.TrainerItemComponent,
                trainers_list_component_1.TrainersListComponent,
                add_trainer_component_1.AddTrainerComponent,
                modify_trainer_component_1.ModifyTrainerComponent,
                training_list_component_1.TrainingListComponent,
                add_training_component_1.AddTrainingComponent,
                modify_training_component_1.ModifyTrainingComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                message_list_component_1.MessageListComponent,
                message_list2_component_1.MessageList2Component,
                users_list_component_1.UsersListComponent,
                blog_list_component_1.BlogListComponent,
                add_article_component_1.AddArticleComponent,
                update_article_component_1.UpdateArticleComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                common_1.CommonModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
