import { Component, OnInit, ViewChild } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';
import * as moment from 'moment';
import { LocalDataService } from '../services/local-data.service';
import { BankRates } from '../interfaces/bank.interface';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonSegment) bankCodesSegment: IonSegment;

  rates: BankRates[] = [];
  bankCodes: any[];
  slidesOpt = {
    slidesPerView: 1,
    freeMode: true,
    spaceBetween: -5
  };


  constructor( private indexaApi: IndexaApiService,
               private localData: LocalDataService ) {}

  ngOnInit() {
    this.bankCodes = this.localData.getBankCodes();
    this.bankCodesSegment.value = this.bankCodes[0];
    this.loadBankChange();
  }

  changeBank(event) {
    this.bankCodesSegment.value = event.detail.value;
    this.loadBankChange();
  }

  async loadBankChange() {
    this.rates = [];
    await this.loadBankRates();
  }

  async loadBankRates() {
    const today = moment();
    const sevenDaysAgo = moment().subtract(1, 'week');
    const code = this.bankCodesSegment.value['code'];

    await this.indexaApi.getRates(code).subscribe(
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
