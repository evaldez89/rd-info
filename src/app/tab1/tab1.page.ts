import { Component } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private indexaApi: IndexaApiService ) {}

  getBankRates() {
    this.indexaApi.getRates('bpd').subscribe(
      resp => {
        console.log(resp);
      }
    );
  }

}
