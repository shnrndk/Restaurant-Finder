import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './Models/Restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http: HttpClient) { }

  
  
   add(restaurantData){     
    let url= "http://localhost:3000/restaurants/add";                              //Post the approved family details
    console.log(restaurantData)
    return this.http.post<Restaurant>(url,restaurantData);
   }

   view(): Observable<Restaurant>{
     let url = "http://localhost:3000/restaurants/view";
     return this.http.get<Restaurant>(url)
   }

   search(searchdata){
    let url = `http://localhost:3000/restaurants/search/${searchdata}`
    return this.http.get<Restaurant>(url);
   }

   viewById(reg_no){
     let url = `http://localhost:3000/restaurants/viewbyid/${reg_no}`
     return this.http.get<Restaurant>(url);
   }

   addReview(reviewData){
      let url="http://localhost:3000/reviews/add";
      return this.http.post<any>(url,reviewData);
   }
/*
  upload(restaurantData){                                   //Post the approved family details
    console.log(restaurantData)
    return this.http.post<Restaurant>(this.__url,restaurantData);
   }*/
}
