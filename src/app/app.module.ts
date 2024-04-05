import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsComponent } from './lessons.component';
import { LessonsService } from './lessons.service';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderFormComponent } from './order-form/order-form.component';
import {
  PageNotFoundComponent,
} from './page-not-found/page-not-found.component';
import { PostsService } from './posts.service';
import { PostsComponent } from './posts/posts.component';
import { SingupFormComponent } from './singup-form/singup-form.component';

const routes :Routes = [
  {path:'',component: HomeComponent},
  {path:'darslar/:id/:title',component: LessonsComponent} ,
  {path:'darslar',component: LessonsComponent} ,
  {path:'boglanish',component:ContactFormComponent} ,
  {path:'**',component: PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ContactFormComponent,
    SingupFormComponent,
    OrderFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LessonsService,AuthService,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
