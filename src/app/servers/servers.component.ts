import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  disableButton: boolean = false;
  buttonClickEvent: string = "No button clicked yet";
  inputTextValue : string = "viraj madhushanka";
  showParagraph : boolean = false;
  servers : array = ["server1","server2"];

  constructor() {

    setTimeout(() => {
      this.disableButton = true;
    }, 2000);

  }

  ngOnInit() {
  }

  buttonClick(){
    this.buttonClickEvent = "button clicked successfully...";
    this.showParagraph = true;
    this.servers.push('this.inputTextValue');
  }

  onChangeInput(event){
    this.inputTextValue = event.target.value;
  }

}
