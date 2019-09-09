import { Component } from '@angular/core';
import { IndexaApiService } from '../services/indexa-api.service';
import { RncDetails } from '../interfaces/rnc.interface';

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
  searchTerm: string;
  companyInfo: RncDetails;

  constructor( private indexaApi: IndexaApiService ) {}

  searchCompany() {

    this.searchTerm = this.searchTerm.toUpperCase();

    this.isSearching = true;

    if ( this.searchTerm.length === 0 ) {
      this.isSearching = false;
      return;
    }

    if ( !this.searchByName && ![9, 11].find( x => x === this.searchTerm.length) ) {
      return;
    }

    this.indexaApi.getCompanyInfo(this.searchBy, this.searchTerm).subscribe(
      resp => {
        this.companyInfo = resp.data[0];
        this.isSearching = false;
      });
  }

  changeSearchType() {
    this.searchTerm = '';

    if ( this.searchByName ) {
      this.searchType = 'text';
      this.searchBy = 'name';
    } else {
      this.searchType = 'number';
      this.searchBy = 'rnc';
    }
  }
}
