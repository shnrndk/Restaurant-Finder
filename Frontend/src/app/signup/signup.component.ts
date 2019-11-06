import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;

    registerUserData = {}

    constructor(private _auth: AuthService, private _router: Router) { }


    ngOnInit() {}

    registerUser(){
        console.log(this.registerUserData)
        this._auth.registerUser(this.registerUserData)
        .subscribe(
            res=>console.log(res),
            err=>console.log(err)
        )
    }
}
