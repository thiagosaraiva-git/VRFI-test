export interface Country {
  name: { common: string };
  flags: { png: string };
  region: string;
  population: number;
  languages: { [key: string]: string };
  capital: string;
  currencies: { [key: string]: string };
}
