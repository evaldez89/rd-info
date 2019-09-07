import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  searchByName = false;
  searchType = 'number';

  constructor() {}

  searchCompany( event ) {

  }

  changeSearchType() {
    if ( this.searchByName ) {
      this.searchType = 'text';
    } else {
      this.searchType = 'number';
    }
  }

}
