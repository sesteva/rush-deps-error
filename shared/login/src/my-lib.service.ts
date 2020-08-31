import { Component, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Customer {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  load(): Observable<Customer[]> {
    return of([]);
  }
}
