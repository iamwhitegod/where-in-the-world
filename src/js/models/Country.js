import axios from "axios";

export default class Country {
  constructor() {}

  async getCountries() {
    try {
      const res = await axios("https://restcountries.eu/rest/v2/all");
      this.name = res.data.name;
      this.population = res.data.population;
      this.flag = res.data.flag;
      this.region = res.data.region;
      this.capital = res.data.capital;
      this.nativeName = res.data.nativeName;
      this.subRegion = res.data.subregion;
      this.topLevelDomain = res.data.topLevelDomain;
      this.currencies = res.data.currencies;
      this.languages = res.data.languages;
      this.borders = res.data.borders;
    } catch (err) {
      console.log(err);
    }
  }
}
