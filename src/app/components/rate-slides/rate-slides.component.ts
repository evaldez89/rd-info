import { Component, OnInit, Input } from '@angular/core';
import { BankRates } from 'src/app/interfaces/bank.interface';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-rate-slides',
  templateUrl: './rate-slides.component.html',
  styleUrls: ['./rate-slides.component.scss'],
})
export class RateSlidesComponent implements OnInit {

  @Input() rates: BankRates[] = [];
  slidesOpt = {
    slidesPerView: 1,
    freeMode: true,
    spaceBetween: -5
  };


  constructor( private localData: LocalDataService, ) { }

  ngOnInit() {  }

  // TODO: this method must be simplified
  getRateProperty( longCode, property: string ) {
    return this.localData.getRateCodes().find( rate => rate.longCode === longCode )[property];
  }

}
