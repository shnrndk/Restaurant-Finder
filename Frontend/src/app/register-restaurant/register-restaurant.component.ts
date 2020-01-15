import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  restaurantForm: FormGroup;
  parking;
  submitted = false;
  success = false;
  url;
  latitude = 6.7876072;
  longitude = 79.8838391;
  locationChosen = false;
  fooditems = [{ fooditem: "SriLankan" }, { fooditem: "Arabian" }, { fooditem: "Western" }, { fooditem: 'Indian' }, { fooditem: 'Vegetarian' }];
  times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantServiceService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.restaurantForm = this.formBuilder.group({
      "reg_no": ['',Validators.required],
      "restaurant_name": ['',Validators.required],
      "discription":['',Validators.required],
      "owner_name": ['',Validators.required],
      "NIC": ['',Validators.required],
      "streetAddress1":['',Validators.required],
      "streetAddress2":[''],
      "city":['',Validators.required],
      "phone_no": ['',Validators.required],
      "email": ['',Validators.required],
      "food_types":this.formBuilder.array([]),
      "wifi":[false],
      "parking":[''],
      "parking_slots":[false],
      "child_care":[false],
      "liquor":[false],
      "familyrestaurant":[false],
      "beachfront":[false],
      "wheelchair":[false],
      "delivery":[false],
      "openinghrs":[false],
      "closinghrs":[false]
    });
    this.restaurantForm.valueChanges.subscribe(console.log)
    
  }

  onSubmit() {
    this.submitted = true
 
  
    if (this.restaurantForm.invalid) {
      return;
   }

   if (this.restaurantForm.value['owner_pics']==undefined && this.url==undefined) {
     console.log("fskf")
    return;
    }

    if(this.restaurantForm.value['openinghrs']==undefined || this.restaurantForm.value['closinghrs']==undefined){
      console.log("fsdka")
    }else{
      this.restaurantForm.value['opening_hours']=`${this.restaurantForm.value['openinghrs']}-${this.restaurantForm.value['closinghrs']}`
      delete this.restaurantForm.value['openinghrs']
      delete this.restaurantForm.value['closinghrs']
    }
    
    this.restaurantForm.value['owner_pics']=this.url;
    this.restaurantForm.value['latitude']=this.latitude;
    this.restaurantForm.value['longitude']=this.longitude;
/*
    if(this.restaurantForm.value['wifi']='') { this.restaurantForm.value['wifi']='false' }
    if(this.restaurantForm.value['parking']='') { this.restaurantForm.value['parking']='false' }
    if(this.restaurantForm.value['parking_slots']='') { this.restaurantForm.value['parking_slots']='false' }
    if(this.restaurantForm.value['child_care']='') { this.restaurantForm.value['child_care']='false' }
    if(this.restaurantForm.value['liquor']='') { this.restaurantForm.value['liquor']='false' }
    if(this.restaurantForm.value['familyrestaurant']='') { this.restaurantForm.value['familyrestaurant']='false' }
    if(this.restaurantForm.value['beachfront']='') { this.restaurantForm.value['beachfront']='false' }
    if(this.restaurantForm.value['wheelchair']='') { this.restaurantForm.value['wheelchair']='false' }
*/

   console.log(this.restaurantForm.value)
    this.restaurantService.add(this.restaurantForm.value)
      .subscribe(
        response=>console.log('Success!',response),
        error=>{
          if(error) console.log("Failure") 
          else console.log("Success No Errors")
        }
      
    );
    this.openSnackBar("Registered Successfully");
  }
  openSnackBar(msg) {
    this._snackBar.open(msg,"OK");
    this.router.navigate(['']);
  }
  
  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    if(data==undefined){
      this.openSnackBar("Please Upload Your Image again");
    }
    this.url = data['url']
    this.restaurantForm.value['owner_pics'] = data['url']
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

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
    this.restaurantForm.value['latitude']=this.latitude;
    this.restaurantForm.value['longitude']=this.longitude;
  }

  checkParking(){
    if((this.parking==true)){
      return true
    }else{
      return false
    }
  }

}


