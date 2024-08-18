import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public age: number = 45;
  public name:string = 'ironman';

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }


  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 25;

  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
