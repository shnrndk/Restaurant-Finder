import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Restaurant } from '../Models/Restaurant.model';

@Component({
  selector: 'app-view-restaurantby-id',
  templateUrl: './view-restaurantby-id.component.html',
  styleUrls: ['./view-restaurantby-id.component.css']
})
export class ViewRestaurantbyIdComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute,private restaurantservice: RestaurantServiceService) { }

  restaurants : Restaurant;
  reg_no

  ngOnInit() {
    this.reg_no = this.activeroute.snapshot.paramMap.get('reg_no');
    console.log(this.reg_no)
    this.restaurantservice.viewById(this.reg_no).subscribe(data => 
      this.restaurants = data
    )



  }

}
