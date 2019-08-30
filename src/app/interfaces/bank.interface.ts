export interface BankRatesResponse {
  status: string;
  data: BankRates[];
}

export interface BankRates {
  bank: string;
  rate: number;
  date: string;
  name: string;
  type?: string;
  currencyCode?: string;
}
