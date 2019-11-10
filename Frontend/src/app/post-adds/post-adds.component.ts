import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-adds',
  templateUrl: './post-adds.component.html',
  styleUrls: ['./post-adds.component.css']
})
export class PostAddsComponent implements OnInit {

  constructor(private restaurantservice: RestaurantServiceService,private router : Router) { }

  add={}

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.add);
    this.add['email']=localStorage.getItem('username');
    this.restaurantservice.postAdd(this.add).subscribe(
      response=>console.log('Success!',response),
        error=>{
          if(error) console.log("Failure") 
          else console.log("Success No Errors")
        }
    )
  }


  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.add['addImage'] = data['url']
    
  }

}
