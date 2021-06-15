import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = false;
  serverName = "No name yet!";
  servers = ['Test server 1', 'Test server 1'];
  showSecret = false;
  clickLog = [];

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onShowSecret() {
    var date = new Date();
    this.showSecret = !this.showSecret;
    this.clickLog.push(new Date() +' '+this.showSecret);
  }

}
