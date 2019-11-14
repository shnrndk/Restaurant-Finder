import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css'],
  providers:[ChatService]
})
export class ChatAppComponent implements OnInit{

  user:String;
  room:String;
  messageText:String;
  isJoined = false;
  
  messageArray:Array<{user:String,message:String}> = [];
  constructor(private _chatService:ChatService,private userservice : AuthService,private _snackBar : MatSnackBar){
      this._chatService.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));


      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));
  }

  ngOnInit() {
    this.room = "Restaurant Finder";
    this.user = localStorage.getItem('username')
  }

  join(){
      this._chatService.joinRoom({user:this.user, room:this.room});
      this.isJoined = true;
  }

  leave(){
      this._chatService.leaveRoom({user:this.user, room:this.room});
      this.clearBar();
  }

  sendMessage()
  {
      this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }

  clearBar()
  {
    this._snackBar.dismiss();
    this.isJoined = true;
  }

  checkJoined(){
    if(this.isJoined==true){
      return true
    }else{
      return false
    }
  }
}
