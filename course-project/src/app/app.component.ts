import { Component, OnInit } from '@angular/core';

import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeUsers: string[] = [];
  inactiveUsers = [];

  constructor(private userService: UserServiceService){}

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;    
  }  

  
}
