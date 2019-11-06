import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  restaurantForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantServiceService) { }

  ngOnInit() {
    this.restaurantForm = this.formBuilder.group({
      "reg_no": [''],
      "restaurant_name": [''],
      "discription":[''],
      "owner_name": [''],
      "NIC": [''],
      "streetAddress1":[''],
      "streetAddress2":[''],
      "city":[''],
      "phone_no": [''],
      "owner_pics":[''],
    });
    this.restaurantForm.valueChanges.subscribe(console.log)
  }

  onSubmit() {

 
  
    if (this.restaurantForm.invalid) {
        return;
    }
  
   
    this.restaurantService.add(this.restaurantForm.value)
      .subscribe(
        response=>console.log('Success!',response),
        error=>{
          if(error) console.log("Failure") 
          else console.log("Success No Errors")
        }
    );
  }

}


