import axios from "axios";

export default class Country {
  constructor(alphaCode) {
    this.alphaCode = alphaCode;
  }

  async getAllCountries() {
    try {
      //   const res = await axios("https://restcountries-v1.p.rapidapi.com/all", {
      //     headers: {
      //       "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      //       "x-rapidapi-key":
      //         "8b2040f64bmsh170259eb8d262f2p174604jsne4daa4f73d42",
      //       useQueryString: true,
      //     },
      //   });

      const res = await axios("https://restcountries.eu/rest/v2/all");
      console.log(res.data);
      this.result = res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getCountry() {
    try {
      // const res = await axios(
      //   `https://restcountries-v1.p.rapidapi.com/alpha/${this.alphaCode}`,
      //   {
      //     headers: {
      //       "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      //       "x-rapidapi-key":
      //         "ce361666fdmsh7d2a740965f889ep1edfc7jsn8a2d7fa08cda",
      //       useQueryString: true,
      //     },
      //   }
      // );

      const res = await axios(`
      https://restcountries.eu/rest/v2/alpha/${this.alphaCode}`);

      console.log(res.data);

      this.name = res.data.name;
      this.population = res.data.population;
      this.region = res.data.region;
      this.capital = res.data.capital;
      this.nativeName = res.data.nativeName;
      this.subRegion = res.data.subregion;
      this.topLevelDomain = res.data.topLevelDomain;
      this.currencies = res.data.currencies;
      this.languages = res.data.languages;
      this.borders = res.data.borders;
      this.flag = res.data.flag;
    } catch (err) {
      console.log(err);
    }
  }

  async getByRegion(region) {
    try {
      // const res = await axios(
      //   `https://restcountries-v1.p.rapidapi.com/region/${region}`,
      //   {
      //     headers: {
      //       "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      //       "x-rapidapi-key":
      //         "ce361666fdmsh7d2a740965f889ep1edfc7jsn8a2d7fa08cda",
      //       useQueryString: true,
      //     },
      //   }
      // );
      const res = await axios(`
      https://restcountries.eu/rest/v2/region/${region}`);
      console.log(res.data);
      this.result = res.data;
    } catch (err) {
      console.log(err);
    }
  }
}
