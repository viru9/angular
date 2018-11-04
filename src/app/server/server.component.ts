import {Component} from '@angular/core';

@Component({
selector:'app-server',
templateUrl: './server.component.html'
})

export class ServerComponent {

  serverNumber : number = 123;
  serverName : string = "Viraj's server...";

  getServerName(){
    return this.serverName;
  }

}
