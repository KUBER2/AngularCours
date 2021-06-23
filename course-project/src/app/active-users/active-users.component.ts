import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  
  
  constructor(private userService: UserServiceService){}

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
