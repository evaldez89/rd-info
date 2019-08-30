import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { IndexaApiService } from '../services/indexa-api.service';
import * as moment from 'moment';
import { FuelPrice } from '../interfaces/fuel.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  customDate: IonDatetime;
  minDate: string;
  maxDate: string;
  daysToShow: number[] = [];
  fuelPrices: FuelPrice[] = [];

  constructor( private indexaApi: IndexaApiService ) {}

  ngOnInit() {
    this.minDate = moment().subtract(1, 'year').format('Y-MM');
    this.maxDate = moment().format('Y-MM');
  }

  periodChanged( event ) {
    this.daysToShow = [];
    const firstDayOfTheMonth = moment(event.detail.value).startOf('month');
    const lastDayOfTheMonth = moment(event.detail.value).endOf('month');

    while (firstDayOfTheMonth.add(1, 'days').diff(lastDayOfTheMonth) < 0) {
      if (firstDayOfTheMonth.weekday() === 6 && firstDayOfTheMonth.toDate() <= new Date() ) {
        this.daysToShow.push(firstDayOfTheMonth.date());
      }
    }
  }

  async getFuelPrices( event ) {
    const date = moment( event.detail.value ).format('Y-MM-DD');
    await this.indexaApi.getFuelPrices(date)
    .subscribe( resp => {
      const prices = resp.data;
      this.fuelPrices = prices;
    });

    console.log(this.fuelPrices);
  }
}
