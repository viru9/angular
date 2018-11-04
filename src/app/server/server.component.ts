import {Component} from '@angular/core';

@Component({
selector:'app-server',
templateUrl: './server.component.html'
})

export class ServerComponent {

  serverNumber : number = 123;
  serverName : string = "Viraj's server...";
  serverStatus : string = "online";

  constructor(){
    this.serverStatus === Math.random() > 0.5 ? "online" : "offline";
  }

  getServerName(){
    return this.serverName;
  }

  getColor(){
    return serverStatus === "online" ? "green" : "red";
  }



}
