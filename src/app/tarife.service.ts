import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Produs } from './tarife';

@Injectable({
  providedIn: 'root'
})

export class TarifeService {

  private produseUrl = 'api/produse';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getProduse(): Observable<Produs[]> {
    return this.http.get<Produs[]>(this.produseUrl)
    .pipe(
      catchError(this.handleError<Produs[]>('getProduse', []))
    );
  }

  updateProdus(produs: Produs): Observable<any> {
    return this.http.put(this.produseUrl, produs, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProdus'))
    );
  }

  addProdus(produs: Produs): Observable<Produs> {
    return this.http.post<Produs>(this.produseUrl, produs, this.httpOptions). pipe(
      catchError(this.handleError<Produs>('addProdus'))
    );
  }

  stergereProdus(produs: Produs | number): Observable<Produs> {
    const id = typeof produs === 'number' ? produs : produs.id;
    const url = `${this.produseUrl}/${id}`;

    return this.http.delete<Produs>(url, this.httpOptions).pipe(
      catchError(this.handleError<Produs>('stergereProdus'))
    );
  }

  searchProdus(term: string): Observable<Produs[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Produs[]>(`${this.produseUrl}/?denumire=${term}`).pipe(
      catchError(this.handleError<Produs[]>('searchProdus', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
