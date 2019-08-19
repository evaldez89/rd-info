export interface RncDetailsResponse {
  status: string;
  data: RncDetails[];
}

export interface RncDetails {
  sector: string;
  street_number: string;
  street: string;
  economic_activity: string;
  phone: string;
  tradename: string;
  state: string;
  business_name: string;
  rnc: string;
  payment_regime: string;
  constitution_date: string;
}
