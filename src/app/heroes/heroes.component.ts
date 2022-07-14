import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from './hero';
import { HEROES } from './mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  hreoesArray: Hero[] = [];
  clickedHero ?: Hero;

  constructor(private heroService : HeroServiceService) {

   }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.hreoesArray = heroes);
    // this.hreoesArray = this.heroService.getHeroes();
  }

  onClick(hero : Hero)
  {
    this.clickedHero = hero;
  }

}
