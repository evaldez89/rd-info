import { Component, OnInit, Input } from '@angular/core';
import { RncDetails } from 'src/app/interfaces/rnc.interface';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {

  @Input() companyInfo: RncDetails;

  constructor() { }

  ngOnInit() {}

}
