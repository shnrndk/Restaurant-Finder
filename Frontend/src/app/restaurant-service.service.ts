import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './Models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http: HttpClient) { }

  
  __url= "http://localhost:3000/restaurants/add";
   add(restaurantData){                                   //Post the approved family details
    console.log(restaurantData)
    return this.http.post<any>(this.__url,restaurantData);
   }
}
