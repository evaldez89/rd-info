import { Component, OnInit, ViewChild } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';
import * as moment from 'moment';
import { FuelPrice } from '../interfaces/fuel.interface';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  today: moment.Moment = moment();
  dayPicker: string;
  initialDate: moment.Moment = moment();
  daysToShow: string[] = [];
  fuelPrices: FuelPrice[] = [];
  @ViewChild('daySelector', {static: true}) daySelectorPicker: IonDatetime;

  constructor( private indexaApi: IndexaApiService ) {}

  ngOnInit() {
    this.setPublishDays(this.initialDate.toISOString());
  }

  setPublishDays(date: string) {
    this.daysToShow = [];

    const firstDayOfTheMonth = moment(date).startOf('month');
    const lastDayOfTheMonth = moment(date).endOf('month');

    while (firstDayOfTheMonth.diff(lastDayOfTheMonth) < 0) {
      if (firstDayOfTheMonth.weekday() === 6 && firstDayOfTheMonth <= this.today ) {
        this.daysToShow.push(firstDayOfTheMonth.format('DD'));
      }
      firstDayOfTheMonth.add(1, 'days');
    }
  }

  periodChanged( event ) {
    this.dayPicker = '';
    const periodDate = moment(event.detail.value);
    this.setPublishDays(periodDate.format('Y-MM-DD'));
    this.daySelectorPicker.value = `${periodDate.year()}-${periodDate.format('MM')}-${this.daysToShow[0]}`;
  }

  getFuelPrices() {
    if (!this.dayPicker) {
      return;
    }

    const queryDate = moment(this.daySelectorPicker.value).format('Y-MM-DD');

    this.indexaApi.getFuelPrices(queryDate)
    .subscribe( resp => {
      this.fuelPrices = resp.data;
    });
  }
}
