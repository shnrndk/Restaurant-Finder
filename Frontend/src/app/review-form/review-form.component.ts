import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  reviewForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantServiceService) { }

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      "review": ['']
    });
    this.reviewForm.valueChanges.subscribe(console.log)
  }

}
