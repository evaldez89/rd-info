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
      { name: 'Gasoil Optimo',
        queryCode: 'GasoilOptimo',
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
        type: 'Venta'
      },
      {
        longCode: `dollarbuyrate`,
        shortCode: 'USD',
        type: 'Compra'
      },
      {
        longCode: `eurosellrate`,
        shortCode: 'EUR',
        type: 'Venta'
      },
      {
        longCode: `eurobuyrate`,
        shortCode: 'EUR',
        type: 'Compra'
      },
      {
        longCode: `swissfrancsellrate`,
        shortCode: 'swissfranc',
        type: 'Venta'
      },
      {
        longCode: `swissfrancbuyrate`,
        shortCode: 'swissfranc',
        type: 'Compra'
      },
      {
        longCode: `poundsterlingsellrate`,
        shortCode: 'poundsterling',
        type: 'Venta'
      },
      {
        longCode: `poundsterlingbuyrate`,
        shortCode: 'poundsterling',
        type: 'Compra'
      },
      {
        longCode: `cdollarsellrate`,
        shortCode: 'CAD',
        type: 'Venta'
      },
      {
        longCode: `cdollarbuyrate`,
        shortCode: 'CAD',
        type: 'Compra'
      },
    ];
  }
}
