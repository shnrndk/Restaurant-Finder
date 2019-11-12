import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {

  constructor(private restaurantservice: RestaurantServiceService,private router : Router) { }

  reg_no;
  reviews;
  nums = [1,2,3,4,5]

  ngOnInit() {
    this.reg_no = this.getRegNo()
    this.restaurantservice.viewReview(this.reg_no).subscribe(data => this.reviews = data);
  }

  getRegNo(){
    var routeurl = this.router.url;
    var urlarray = routeurl.split("/");
    return urlarray[2];
  }

}
