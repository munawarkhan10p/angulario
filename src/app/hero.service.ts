import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';
import {MessageService} from './message.service';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():  Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');
     return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
