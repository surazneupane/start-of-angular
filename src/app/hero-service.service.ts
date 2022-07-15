import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './heroes/hero';
import { HEROES } from './heroes/mock-hero';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor(private messageService:MessagesService) { }

  getHeroes() : Observable<Hero []>{
    const heroes = of(HEROES);
    this.messageService.add('Fetched Heroes');
    return heroes;
  }

  getHero(id: number): Observable <Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
