import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './heroes/hero';
import { HEROES } from './heroes/mock-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }

  getHeroes() : Observable<Hero []>{
    const heroes = of(HEROES);
    return heroes;
  }
}
