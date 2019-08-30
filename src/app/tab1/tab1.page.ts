import { Component } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private indexaApi: IndexaApiService ) {}

  getBankRates() {
    const today = moment();
    const sevenDaysAgo = moment().subtract(1, 'week');

    this.indexaApi.getRates('bpd').subscribe(
      resp => {
        const rates = resp.data.filter( rate =>
          new Date(rate.date) >= sevenDaysAgo.toDate()
        ).filter( rate =>
          new Date(rate.date) <= today.toDate());
        console.log(rates);
      }
    );
  }

}
