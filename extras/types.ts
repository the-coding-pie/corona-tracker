// country
export interface Country {
  name: string;
  flag: string;
  total: number;
  iso3: string;
}

// world data
export interface WorldWideData {
  total: number;
  active: number;
  recovered: number;
  deaths: number;
}
