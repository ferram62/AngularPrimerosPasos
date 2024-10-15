import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  changeAge():void {
    this.age = 25;
  }
  changeHero(): void {
    this.name = "Spiderman";
  }

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  resetForm():void {
    this.name = "ironman";
    this.age = 45;
  }
}
