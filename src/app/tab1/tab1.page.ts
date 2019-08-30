import { Component, OnInit } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';
import * as moment from 'moment';
import { LocalDataService } from '../services/local-data.service';
import { BankRates } from '../interfaces/bank.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  rates: BankRates[] = [];
  bankCodes: any[];

  constructor( private indexaApi: IndexaApiService,
               private localData: LocalDataService ) {}

  ngOnInit() {
    this.bankCodes = this.localData.getBankCodes();
  }

  getBankRates( event ) {
    const today = moment();
    const sevenDaysAgo = moment().subtract(1, 'week');

    this.indexaApi.getRates(event.detail.value.code).subscribe(
      resp => {
        const rates = resp.data.filter( rate =>
          new Date(rate.date) >= sevenDaysAgo.toDate()
        ).filter( rate =>
          new Date(rate.date) <= today.toDate());

        this.rates = rates;
      }
    );
  }

}
