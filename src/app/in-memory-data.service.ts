import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Produs } from './tarife';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const produse = [
      {id:1, denumire:'Coca-Cola1', pret:7.5 },
      {id:2, denumire:'Coca-Cola2', pret:7.5 },
      {id:3, denumire:'Coca-Cola3', pret:7.5 },
      {id:4, denumire:'Coca-Cola4', pret:7.5 },
      {id:5, denumire:'Coca-Cola5', pret:7.5 },
      {id:6, denumire:'Coca-Cola6', pret:7.5 },
      {id:7, denumire:'Coca-Cola7', pret:7.5 },
      {id:8, denumire:'Coca-Cola8', pret:7.5 },
      {id:9, denumire:'Coca-Cola9', pret:7.5 },
      {id:10, denumire:'Coca-Cola10', pret:7.5 },
  ];
  return {produse};
  }

  genId(produse: Produs[]): number {
    return produse.length > 0 ? Math.max(...produse.map(produs => produs.id)) + 1 : 11;
  }

  constructor() { }
}
