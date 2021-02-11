import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombaso' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    return { heroes };
  }
  // Παρακάμπτει τη μέθοδο genId για να διασφαλίσει ότι ο ήρωας έχει πάντα ένα αναγνωριστικό.
  // Εάν ο heroes array είναι άδειος,
  // η παρακάτω μέθοδος επιστρέφει τον αρχικό αριθμό (11).
  // εάν ο πίνακας ηρώων δεν είναι κενός, η παρακάτω μέθοδος επιστρέφει το υψηλότερο
  // αναγνωριστικό ήρωας + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
