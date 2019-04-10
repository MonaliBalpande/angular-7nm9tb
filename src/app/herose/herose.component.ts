import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes';
import { HeroService } from  '../hero.service';

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

  heroes : Hero[];
  selectedHero: Hero;


  constructor(private heroService: HeroService ) { }
 
 

  ngOnInit() {
   this.getHeroes();
  }

   onSelect(hero: Hero): void {
    this.selectedHero = hero;
   }

   getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  //  getHeroes(){
  //    this.heroes=this.heroService.getHeroes();
  //  }
}