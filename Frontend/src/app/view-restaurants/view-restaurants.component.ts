import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';
import { Restaurant } from '../Models/Restaurant.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-view-restaurants',
  templateUrl: './view-restaurants.component.html',
  styleUrls: ['./view-restaurants.component.css']
})
export class ViewRestaurantsComponent implements OnInit {

  constructor(private restaurantservice: RestaurantServiceService, private formBuilder: FormBuilder, private router : Router) { }

  restaurants : Restaurant;
  searchForm: FormGroup;
  ngOnInit() {
    this.restaurantservice.view().subscribe(data => this.restaurants = data);

    this.searchForm = this.formBuilder.group({
      "searchdata" : ['']
    });
    this.searchForm.valueChanges.subscribe(console.log)
  }

  onSubmit(){
    console.log(this.searchForm.value['searchdata'].length)
    
    if(this.searchForm.value['searchdata'].length==0){
      this.searchForm.value['searchdata']=0;
    }
    this.restaurantservice.search(this.searchForm.value['searchdata'])
        .subscribe(
          data=>this.restaurants = data,
          response=>console.log('Success!',response),
          
      );
  }

  onClick(reg_no){
    this.router.navigate(['ViewRestaurantById',reg_no])
  }
}
