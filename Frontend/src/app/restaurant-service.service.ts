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

   searchByCity(searchdata){
    let url = `http://localhost:3000/restaurants/searchByCity/${searchdata}`
    return this.http.get<Restaurant>(url);
   }
/*
   searchByFilters(searchdata){
    delete searchdata['filters']
    let url = `http://localhost:3000/restaurants/searchByFilters/${searchdata}`
    console.log(searchdata);
    return this.http.get<Restaurant>(url);
   }*/

   searchByFilters(searchdata){     
    let url= "http://localhost:3000/restaurants/searchByFilters";                              //Post the approved family details
    console.log(searchdata)
    return this.http.post<Restaurant>(url,searchdata);
   }

   viewById(reg_no){
     let url = `http://localhost:3000/restaurants/viewbyid/${reg_no}`
     return this.http.get<Restaurant>(url);
   }

   addReview(reviewData){
      let url="http://localhost:3000/reviews/add";
      return this.http.post<any>(url,reviewData);
   }

   viewReview(reg_no){
     let url = `http://localhost:3000/reviews/viewbyid/${reg_no}`;
     return this.http.get<any>(url);
   }

   postAdd(addData){
    let url= "http://localhost:3000/adds/add";                              //Post the approved family details
    console.log(addData)
    return this.http.post<any>(url,addData);
   }

   viewAdds(){
    let url= "http://localhost:3000/adds/view";                              //Post the approved family details
    return this.http.get<any>(url);
   }

   sendEmail(information){
    let url= "http://localhost:3000/adds/sendEmail";                              //Post the approved family details
    console.log(information)
    return this.http.post<Restaurant>(url,information);
   }

   searchandRequest(searchdata){
     console.log(searchdata)
    let url = `http://localhost:3000/restaurants/searchandRequest/${searchdata}`
    return this.http.get<Restaurant>(url,{observe : 'response'});
   }

   sendRequest(information){
    console.log(information)
    let url = `http://localhost:3000/restaurants/sendEmail/`
    return this.http.post<Restaurant>(url,information);
   }

   getSortedRatings(){
    let url = "http://localhost:3000/restaurants/sort";
    return this.http.get<Restaurant>(url)
   }

}
