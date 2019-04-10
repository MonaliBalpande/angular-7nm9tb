import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes';
@Component({
  selector: 'app-herose',
  templateUrl: './herose.component.html',
  styleUrls: ['./herose.component.css']
})
export class HeroseComponent implements OnInit {

 hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  selectedHero: Hero;


  constructor() { }

  ngOnInit() {
  }

   onSelect(hero: Hero): void {
    this.selectedHero = hero;
   }
}