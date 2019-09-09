import { Component, OnInit, Input } from '@angular/core';
import { FuelPrice } from 'src/app/interfaces/fuel.interface';
import { LocalDataService } from 'src/app/services/local-data.service';
import * as accents from 'remove-accents';

@Component({
  selector: 'app-fuel-prices',
  templateUrl: './fuel-prices.component.html',
  styleUrls: ['./fuel-prices.component.scss'],
})
export class FuelPricesComponent implements OnInit {

  @Input() fuelPrices: FuelPrice[] = [];
  @Input() publishedDate: Date;

  constructor( private localData: LocalDataService ) { }

  ngOnInit() {}

  getFuelName( queryCode: string ) {
    const fuel = this.localData.getFuelTypes().find( rate => rate.queryCode === accents.remove(queryCode) );
    if ( fuel.name ) {
      return fuel.name;
    }
    return fuel.queryCode;
  }

}
