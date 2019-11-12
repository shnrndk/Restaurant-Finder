import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-request-to-add-restaurant',
  templateUrl: './request-to-add-restaurant.component.html',
  styleUrls: ['./request-to-add-restaurant.component.css']
})
export class RequestToAddRestaurantComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantServiceService,private router: Router,private _snackBar: MatSnackBar) { }

  restaurantForm: FormGroup;
  name;
  restaurants;

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.restaurantForm = this.formBuilder.group({
      
      "yourname": [this.name,Validators.required],
      "restaurant_name":['',Validators.required],
      "owner_name": ['',Validators.required],
      "contactno": [''],
      "email": [''],
      "address":['']
      
    });
    this.restaurantForm.valueChanges.subscribe(console.log)
  }


  onSubmit() {

        this.restaurantService.searchandRequest(this.restaurantForm.value['restaurant_name'])
        .subscribe(
          Response=> {
            
            console.log(Response['status'])
            if(Response['status']==200){
              this.openSnackBar("Restaurant is Availble in the Database");
            }else{
              this.openSnackBar("Restaurant Cannot Find in DB, Request Has been Sent")
              this.sendEmail();
            }
          }
          
        );

  }

  openSnackBar(msg) {
    this._snackBar.open(msg,"OK");
  }

  sendEmail(){
    this.restaurantService.sendRequest(this.restaurantForm.value)
        .subscribe(

        );
  }
  

  
}
