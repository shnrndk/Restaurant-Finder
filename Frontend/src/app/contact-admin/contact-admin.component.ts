import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.css']
})
export class ContactAdminComponent implements OnInit {

  constructor(private restaurantservice: RestaurantServiceService) { }

  information={}

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.information);
    this.information['email']=localStorage.getItem('username');
    this.restaurantservice.sendEmail(this.information).subscribe(
      response=>console.log('Success!',response),
        error=>{
          if(error) console.log("Failure") 
          else console.log("Success No Errors")
        }
    )
  }
}
