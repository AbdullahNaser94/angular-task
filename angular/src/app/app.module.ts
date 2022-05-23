import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TokenInterceptoService } from './service/token-intercepto.service';
import { BlogComponent } from './blog/blog.component';
import { DetailsComponent } from './blog/details/details.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BlogComponent,
    DetailsComponent,
    CreateBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptoService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
