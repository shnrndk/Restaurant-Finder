import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  restaurantForm: FormGroup;

  fooditems = [{ fooditem: "Sri Lankan" }, { fooditem: "Arabian" }, { fooditem: "Western" }, { fooditem: 'Indian' }, { fooditem: 'Vegetarian' }]

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
      "food_types":this.formBuilder.array([])
    });
    this.restaurantForm.valueChanges.subscribe(console.log)
  }

  onSubmit() {

 
  
    if (this.restaurantForm.invalid) {
        return;
    }
  
   console.log(this.restaurantForm.value)
    this.restaurantService.add(this.restaurantForm.value)
      .subscribe(
        response=>console.log('Success!',response),
        error=>{
          if(error) console.log("Failure") 
          else console.log("Success No Errors")
        }
    );
  }

  
  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.restaurantForm.value['owner_pics'] = data['link']
    console.log(this.restaurantForm.value)
  }

  onChange(email: string, isChecked: boolean) {
    console.log(isChecked)
    const emailFormArray = <FormArray>this.restaurantForm.controls.food_types;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
  }

}


