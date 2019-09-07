import { Component, OnInit, Input } from '@angular/core';
import { FuelPrice } from 'src/app/interfaces/fuel.interface';
import { LocalDataService } from 'src/app/services/local-data.service';

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
    return this.localData.getFuelTypes().find( rate => rate.queryCode === queryCode ).name;
  }

}
