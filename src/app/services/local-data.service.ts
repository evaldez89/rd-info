import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  getFuelTypes() {
    return [
      { name: 'Kerosene',
        queryCode: 'Kerosene',
        code: ''
      },
      { name: 'Gasoil Óptimo',
        queryCode: 'GasoilÓptimo',
        code: ''
      },
      { name: 'Gasoil Regular',
        queryCode: 'GasoilRegular',
        code: ''
      },
      { name: 'Gas Natural',
        queryCode: 'GasNaturalVehicular(GNV)',
        code: 'GNV'
      },
      { name: 'Gas Licuado de Petróleo',
        queryCode: 'GasLicuadodePetróleo(GLP)',
        code: 'GLP'
      },
      { name: 'Gasolina Premium',
        queryCode: 'GasolinaPremium',
        code: ''
      },
      { name: 'Gasolina Regular',
        queryCode: 'GasolinaRegular',
        code: ''
       }
    ];
  }

  getBankCodes() {
    // TODO: consider using more properties like: short name, long name, etc.
    return [
      { name: 'Banco Central',	code: 'bcd'},
      { name: 'Banco Popular',	code: 'bpd'},
      { name: 'Banco Vimenca',	code: 'bvm'},
      { name: 'Banco de Reservas',	code: 'bnr'},
      { name: 'Banco del Progreso',	code: 'bpr'},
      { name: 'Banco Santa Cruz',	code: 'bsc'},
      { name: 'Banco BDI',	code: 'bdi'},
      { name: 'Banco Promerica',	code: 'bpm'},
    ];
  }

  getRateCodes() {
    return [
      {
        longCode: `dollarsellrate`,
        shortCode: 'USD',
        name: 'Dolar Estados Unidos',
        type: 'Venta'
      },
      {
        longCode: `dollarbuyrate`,
        shortCode: 'USD',
        name: 'Dolar Estados Unidos',
        type: 'Compra'
      },
      {
        longCode: `eurosellrate`,
        shortCode: 'EUR',
        name: 'Euro',
        type: 'Venta'
      },
      {
        longCode: `eurobuyrate`,
        shortCode: 'EUR',
        name: 'Euro',
        type: 'Compra'
      },
      {
        longCode: `swissfrancsellrate`,
        shortCode: 'CHF',
        name: 'Franco Suizo',
        type: 'Venta'
      },
      {
        longCode: `swissfrancbuyrate`,
        shortCode: 'CHF',
        name: 'Franco Suizo',
        type: 'Compra'
      },
      {
        longCode: `poundsterlingsellrate`,
        shortCode: 'GBP',
        name: 'Libra Esterlina',
        type: 'Venta'
      },
      {
        longCode: `poundsterlingbuyrate`,
        shortCode: 'GBP',
        name: 'Libra Esterlina',
        type: 'Compra'
      },
      {
        longCode: `cdollarsellrate`,
        shortCode: 'CAD',
        name: 'Dolar Canadiense',
        type: 'Venta'
      },
      {
        longCode: `cdollarbuyrate`,
        shortCode: 'CAD',
        name: 'Dolar Canadiense',
        type: 'Compra'
      },
    ];
  }
}
