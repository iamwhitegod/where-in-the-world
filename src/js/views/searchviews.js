import { domElements } from "./base";

export const getInput = () => domElements.searchInput.value;

export const clearInputs = () => {
  domElements.searchInput.value = "";
};

export const clearUI = () => {
  domElements.cardContainer.innerHTML = "";
};

const renderCountry = (country) => {
  const markup = `
  <div class="card">
    <div class="card__img">
      <a href="#${country.alpha2Code.toLowerCase()}">
        <img src="https://assets.thebasetrip.com/api/v2/countries/flags/${country.name
          .replace(/\s/g, "-")
          .toLowerCase()}.svg" alt="${country.name}">
      </a >
    </div >
  <div class="card__details">
    <h2 class="card__title">${country.name}</h2>
    <span class="card__info">Population: ${country.population}</span>
    <span class="card__info">Region: ${country.region}</span>
    <span class="card__info">Capital: ${country.capital}</span>
  </div>
  </div >
  `;

  domElements.cardContainer.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = (results) => {
  results.forEach(renderCountry);
};
