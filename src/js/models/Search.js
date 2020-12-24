import axios from "axios";

// https://restcountries.eu/rest/v2/name/aruba?fullText=true

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async searchByName() {
    try {
      // const res = await axios(`https://restcountries-v1.p.rapidapi.com/name/${this.query}`, {
      //   headers: {
      //     "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      //     "x-rapidapi-key": "8b2040f64bmsh170259eb8d262f2p174604jsne4daa4f73d42",
      //     "useQueryString": true
      //   }
      // });
      const res = await axios(
        `https://restcountries.eu/rest/v2/name/${this.query}`
      );
      this.result = res.data;
      //console.log(this.result);
    } catch (err) {
      console.log(err.response);
    }
  }
}
