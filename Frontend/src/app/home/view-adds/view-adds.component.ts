import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/restaurant-service.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-view-adds',
  templateUrl: './view-adds.component.html',
  styleUrls: ['./view-adds.component.css']
})
export class ViewAddsComponent implements OnInit {

  constructor(private restaurantService: RestaurantServiceService) { }

  adds;

  ngOnInit() {
    this.restaurantService.viewAdds().subscribe(data => this.adds = data);
    }
}
