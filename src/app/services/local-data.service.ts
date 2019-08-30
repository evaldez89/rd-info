import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  getRateNames( type: string ) {
    return [
      `dollar${type}rate`,
      `euro${type}rate`,
      `swissfranc${type}rate`,
      `poundsterling${type}rate`,
      `cdollar${type}rate`,
    ];
  }
}
