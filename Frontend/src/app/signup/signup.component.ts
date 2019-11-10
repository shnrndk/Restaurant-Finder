import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
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

    constructor(private _auth: AuthService, private _router: Router,private snackBar: MatSnackBar) { }


    ngOnInit() {}

    registerUser(){
        this._auth.registerUser(this.registerUserData)
        .subscribe(
            res=>{
                console.log(res)
                let snackBarRef = this.snackBar.open('Registered Successfully', 'Ok');
                localStorage.setItem('token',res.token)
                this._router.navigate(['/home']);
            },
            err=>{
                console.log(err)
                let snackBarRef = this.snackBar.open('Registered Unsuccessfull', 'Try Again');
            }
        )
    }
}
