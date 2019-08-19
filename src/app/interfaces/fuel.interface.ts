export interface FuelPriceResponse {
  status: string;
  data: FuelPrice[];
}

export interface FuelPrice {
  date: string;
  price: number;
  name: string;
}
