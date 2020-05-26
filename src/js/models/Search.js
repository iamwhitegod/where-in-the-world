import axios from "axios";

// https://restcountries.eu/rest/v2/name/aruba?fullText=true

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async searchByName() {
    try {
      const res = await axios(`https://restcountries.eu/rest/v2/name/${this.query}?fullText=true`);
      this.result = res.data;
      //console.log(this.result);
    } catch (err) {
      console.log(err);
    }
  }
}
