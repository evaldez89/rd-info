import { Component } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  searchByName = false;
  searchType = 'number';
  searchBy = 'rnc';
  isSearching = false;

  constructor( private indexaApi: IndexaApiService ) {}

  searchCompany( event ) {
    this.indexaApi.getCompanyInfo(this.searchBy, event.detail.value).subscribe(
      console.log
    );
  }

  changeSearchType() {
    if ( this.searchByName ) {
      this.searchType = 'text';
      this.searchBy = 'name';
    } else {
      this.searchType = 'number';
      this.searchBy = 'rnc';
    }
  }
}
