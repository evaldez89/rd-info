import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { IndexaApiService } from '../services/indexa-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  customDate: IonDatetime;
  minDate: string;
  maxDate: string;

  constructor( private indexaApi: IndexaApiService ) {}

  ngOnInit() {
    this.minDate = moment().subtract(1, 'year').format('Y-MM-DD');
    this.maxDate = moment().format('Y-MM-DD');
  }

  dateChanged( event ) {
    
  }

}
