import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './Models/Restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http: HttpClient) { }

  
  __url= "http://localhost:3000/restaurants/add";
   add(restaurantData){                                   //Post the approved family details
    console.log(restaurantData)
    return this.http.post<Restaurant>(this.__url,restaurantData);
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
/*
   upload(): Observable<Restaurant>{
    let url = "http://localhost:3000/restaurants/view";
    return this.http.get<Restaurant>(url)
  }
*/
  upload(restaurantData){                                   //Post the approved family details
    console.log(restaurantData)
    return this.http.post<Restaurant>(this.__url,restaurantData);
   }
}
