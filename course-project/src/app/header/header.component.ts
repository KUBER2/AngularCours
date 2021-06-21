import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() pageEvent = new EventEmitter<string>();
  
  onNavigationClick(page:string){
    this.pageEvent.emit(page);
  }
}
