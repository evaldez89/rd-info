import { Component, OnInit } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';
import * as moment from 'moment';
import { FuelPrice } from '../interfaces/fuel.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  dayPicker;
  initialDate: Date;
  daysToShow: number[] = [];
  fuelPrices: FuelPrice[] = [];

  constructor( private indexaApi: IndexaApiService ) {}

  ngOnInit() {
    this.initialDate = new Date();
    this.initialDate.setDate(1);
    this.setPublishDays(this.initialDate.toISOString());
  }

  setPublishDays(date: string) {
    this.daysToShow = [];

    const firstDayOfTheMonth = moment(date).startOf('month');
    const lastDayOfTheMonth = moment(date).endOf('month');

    while (firstDayOfTheMonth.add(1, 'days').diff(lastDayOfTheMonth) < 0) {
      if (firstDayOfTheMonth.weekday() === 6 && firstDayOfTheMonth.toDate() <= new Date() ) {
        this.daysToShow.push(firstDayOfTheMonth.date());
      }
    }
  }

  periodChanged( event ) {
    this.dayPicker = '';

    this.setPublishDays(event.detail.value);
  }

  getFuelPrices( event ) {
    if (!this.dayPicker) {
      return;
    }

    const date = moment( event.detail.value ).format('Y-MM-DD');
    this.indexaApi.getFuelPrices(date)
    .subscribe( resp => {
      this.fuelPrices = resp.data;
    });
  }
}
