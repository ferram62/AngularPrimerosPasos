import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter:number = 10;


  public increaseBy(value:number):void {
    if (this.counter + value == 0)
      return;

    this.counter += value;
  }
  public resetCounter():void {

    this.counter = 10;
  }
}
