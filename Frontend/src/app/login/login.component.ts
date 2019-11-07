import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  loginUserData = {}

  constructor(private _auth: AuthService,private _router: Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res=>{
        console.log(res)
        let snackBarRef = this.snackBar.open('Login Successfull', 'Ok');
        localStorage.setItem('token',res.token)
        this._router.navigate(['/home']);
    },
      err=>{
        console.log(err)
        let snackBarRef = this.snackBar.open('Login Failed', 'Try Again');
      }
    )
  }

}
