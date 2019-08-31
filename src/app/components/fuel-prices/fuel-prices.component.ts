import { Component, OnInit, Input } from '@angular/core';
import { FuelPrice } from 'src/app/interfaces/fuel.interface';

@Component({
  selector: 'app-fuel-prices',
  templateUrl: './fuel-prices.component.html',
  styleUrls: ['./fuel-prices.component.scss'],
})
export class FuelPricesComponent implements OnInit {

  @Input() fuelPrices: FuelPrice[] = [];
  @Input() publisdDate: Date;

  constructor() { }

  ngOnInit() {}

}
