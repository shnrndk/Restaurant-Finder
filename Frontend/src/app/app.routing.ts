import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

import { LoginComponent } from './login/login.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { ViewRestaurantsComponent } from './view-restaurants/view-restaurants.component';
import { ViewRestaurantbyIdComponent } from './view-restaurantby-id/view-restaurantby-id.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
 
    { path: 'login',          component: LoginComponent },
    { path: 'registerRestaurant',     component: RegisterRestaurantComponent, canActivate:[AuthGuard]},
    { path: 'viewRestaurants',     component: ViewRestaurantsComponent,
    
    },
    { path: 'ViewRestaurantById/:reg_no',component: ViewRestaurantbyIdComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
