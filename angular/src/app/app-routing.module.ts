import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DetailsComponent } from './blog/details/details.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserIdGuard } from './shared/user-id.guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    
    children:[
      {
        path:"",
        component: BlogComponent,
        canActivate: [UserIdGuard] 
      },
      {
        path:"details/:id",
        component: DetailsComponent,
      },
    ]
    
  },
  {
    path: 'createBlog',
    component: CreateBlogComponent,
    canActivate: [UserIdGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
