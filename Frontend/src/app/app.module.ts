import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatRadioModule,
  MatExpansionModule,
  MatDatepickerModule,MatNativeDateModule

} from '@angular/material';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { ViewRestaurantsComponent } from './view-restaurants/view-restaurants.component';
import { ViewRestaurantbyIdComponent } from './view-restaurantby-id/view-restaurantby-id.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { ReviewFormComponent } from './review-form/review-form.component';
import { MaterialFileUploadComponent } from './material-file-upload/material-file-upload.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { PostAddsComponent } from './post-adds/post-adds.component';
import { AgmCoreModule } from '@agm/core';
import { RequestToAddRestaurantComponent } from './request-to-add-restaurant/request-to-add-restaurant.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterRestaurantComponent,
    ViewRestaurantsComponent,
    ViewRestaurantbyIdComponent,
    ReviewFormComponent,
    MaterialFileUploadComponent,
    ChatAppComponent,
    ViewReviewsComponent,
    ContactAdminComponent,
    PostAddsComponent,
    RequestToAddRestaurantComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,MatNativeDateModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatFileUploadModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsXYtv6Q8JjojhHD7V0L6H8fNUjRohqlU'
    })
  
  ],
  providers: [AuthService,AuthGuard,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
