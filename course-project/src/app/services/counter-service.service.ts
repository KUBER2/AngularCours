import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  clicks: number = 0;
  constructor() { }

  addClick(){
    this.clicks++;
    console.log('number of clicks: '+this.clicks);
  }

}
