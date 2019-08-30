import { Component, OnInit, ViewChild } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';
import * as moment from 'moment';
import { LocalDataService } from '../services/local-data.service';
import { BankRates } from '../interfaces/bank.interface';
import { IonSegment, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonSegment, { static: true }) bankCodesSegment: IonSegment;
  isSearching = true;

  rates: BankRates[] = [];
  bankCodes: any[];

  constructor( private indexaApi: IndexaApiService,
               private localData: LocalDataService ) {}

  ngOnInit() {
    this.bankCodes = this.localData.getBankCodes();
    this.bankCodesSegment.value = this.bankCodes[0];
    this.loadBankChange();
  }

  changeBank(event) {
    this.isSearching = true;
    this.bankCodesSegment.value = event.detail.value;
    this.loadBankChange();
  }

  async loadBankChange() {
    // TODO: Add loading
    this.rates = [];
    await this.loadBankRates();
  }

  async loadBankRates() {
    const today = moment();
    const sevenDaysAgo = moment().subtract(1, 'week');
    const code = this.bankCodesSegment.value['code'];
    this.rates = [];

    await this.indexaApi.getRates(code).subscribe(
      resp => {
        const rates = resp.data
        .filter( rate =>
          new Date(rate.date) >= sevenDaysAgo.toDate()
        ).filter( rate =>
          new Date(rate.date) <= today.toDate());
        this.isSearching = false;

        rates.forEach(rate => {
          const currencyDetail = this.localData.getRateCodes().find( r => r.longCode === rate.name );
          rate.type = currencyDetail.type;
          rate.currencyCode = currencyDetail.shortCode;
        });

        this.rates = rates.reverse();
      }
    );
  }

}
