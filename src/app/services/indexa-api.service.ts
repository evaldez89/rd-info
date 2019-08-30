import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { BankRatesResponse } from '../interfaces/bank.interface';

const API_URL = environment.api_url;
const API_TOKEN = environment.api_token;

@Injectable({
  providedIn: 'root'
})
export class IndexaApiService {

  constructor( private http: HttpClient ) { }

  private constructQuery<T>(endpoint, paramsString) {
    const query = `${API_URL}${endpoint}${paramsString}`;

    return this.http.get<T>(query, {
      headers: {
        'x-access-token': API_TOKEN
      }
    });
  }

  getRates( bankCode: string ) {
    return this.constructQuery<BankRatesResponse>('rates', `?bank=${bankCode}`);
  }
}
