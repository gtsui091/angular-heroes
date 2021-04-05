import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      {id: 1, name: 'Tracer'},
      {id: 2, name: 'Reaper'},
      {id: 3, name: 'Ana'},
      {id: 4, name: 'Mercy'},
      {id: 5, name: 'Widowmaker'},
      {id: 6, name: 'Junkrat'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
