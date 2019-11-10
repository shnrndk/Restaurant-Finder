import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  reviewForm: FormGroup;
  reg_no;
  array=[]
  imagecount=0;
  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantServiceService,private router : Router) { }

  ngOnInit() {
    this.reg_no = this.getRegNo();

    this.reviewForm = this.formBuilder.group({
      "review": ['']
    });
    this.reviewForm.valueChanges.subscribe(console.log)

  }
  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    let link = data['link']
    this.array.push(link)
    console.log(this.array)
    this.reviewForm.value['pics']=this.array
    this.imagecount = this.array.length;
    console.log(this.reviewForm.value)
  }

  getRegNo(){
    var routeurl = this.router.url;
    var urlarray = routeurl.split("/");
    return urlarray[2];
  }

  onSubmit() {

    this.reviewForm.value['reg_no'] = this.reg_no;
  
    if (this.reviewForm.invalid) {
        return;
    }
  
   console.log(this.reviewForm.value)
    this.restaurantService.addReview(this.reviewForm.value)
      .subscribe(
        response=>console.log('Success!',response),
        error=>{
          if(error) console.log("Failure") 
          else console.log("Success No Errors")
        }
    );
  }

}
