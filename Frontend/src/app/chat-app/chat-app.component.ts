import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
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

  
  messageArray:Array<{user:String,message:String}> = [];
  constructor(private _chatService:ChatService){
      this._chatService.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));


      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));
  }

  ngOnInit() {
    this.room = "Restaurant Finder";
  }

  join(){
      this._chatService.joinRoom({user:this.user, room:this.room});
  }

  leave(){
      this._chatService.leaveRoom({user:this.user, room:this.room});
  }

  sendMessage()
  {
      this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }

}
