import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  getBankCodes() {
    return [
      { name: 'Banco Popular Dominicano',	code: 'bpd'},
      { name: 'Banco de Reservas',	code: 'bnr'},
      { name: 'Banco del Progreso',	code: 'bpr'},
      { name: 'Banco Santa Cruz',	code: 'bsc'},
      { name: 'Banco BDI',	code: 'bdi'},
      { name: 'Banco Promerica',	code: 'bpm'},
      { name: 'Banco Vimenca',	code: 'bvm'},
      { name: 'Banco Central de RD',	code: 'bcd'}
    ];
  }

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
