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

// generic data
export interface SpecificData {
  name: string;
  flag: string | undefined;
  iso3: string | undefined;
  total: number;
  active: number;
  recovered: number;
  deaths: number;
  todayTotal: number | undefined;
  todayRecovered: number | undefined;
  todayActive: number | undefined;
  todayDeaths: number | undefined;
}
