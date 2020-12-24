import { domElements } from "./base";

const renderDetails = (countryInfo) => {
  //   const markup = `
  //   <div class="country-card__img">
  //   <img src="https://assets.thebasetrip.com/api/v2/countries/flags/${countryInfo.name
  //     .replace(/\s/g, "-")
  //     .toLowerCase()}.svg" alt="${countryInfo.name}">
  // </div>
  // <div class="country-card__desc">
  //   <h1 class="country-card__title">${countryInfo.name}</h1>
  //   <div class="country-card__info">
  //     <ul class="country-card__list">
  //       <li class="country-card__item">Native name: <span>${countryInfo.nativeName}</span></li>
  //       <li class="country-card__item">Population: <span>${countryInfo.population}</span></li>
  //       <li class="country-card__item">Region: <span>${countryInfo.region}</span></li>
  //       <li class="country-card__item">Sub Region: <span>${countryInfo.subRegion}</span></li>
  //       <li class="country-card__item">Capital: <span>${countryInfo.capital}</span></li>
  //     </ul>
  //     <ul class="country-card__list">
  //       <li class="country-card__item">Top Level Domain: <span>${countryInfo.topLevelDomain}</span></li>
  //       <li class="country-card__item">Currencies: <span>${countryInfo.currencies}</span></li>
  //       <li class="country-card__item">Languages: <span>${countryInfo.languages.join(", ")}</span></li>
  //     </ul>
  //   </div>
  //   <div class="country-card__btns">
  //     <span class="country-card__boundries">Border Countries</span>
  //     <button class="country-card__btn">${countryInfo.borders[0]}</button>
  //     <button class="country-card__btn">${countryInfo.borders[1]}</button>
  //     <button class="country-card__btn">${countryInfo.borders[2]}</button>
  //   </div>
  // </div>
  //   `;

  const markup = `
  <div class="country-card__img">
  <img src="${countryInfo.flag}">
</div>
<div class="country-card__desc">
  <h1 class="country-card__title">${countryInfo.name}</h1>
  <div class="country-card__info">
    <ul class="country-card__list">
      <li class="country-card__item">Native name: <span>${
        countryInfo.nativeName
      }</span></li>
      <li class="country-card__item">Population: <span>${
        countryInfo.population
      }</span></li>
      <li class="country-card__item">Region: <span>${
        countryInfo.region
      }</span></li>
      <li class="country-card__item">Sub Region: <span>${
        countryInfo.subRegion
      }</span></li>
      <li class="country-card__item">Capital: <span>${
        countryInfo.capital
      }</span></li>
    </ul>
    <ul class="country-card__list">
      <li class="country-card__item">Top Level Domain: <span>${
        countryInfo.topLevelDomain
      }</span></li>
      <li class="country-card__item">Currencies: <span>${
        countryInfo.currencies
      }</span></li>
      <li class="country-card__item">Languages: <span>${countryInfo.languages.join(
        ", "
      )}</span></li>
    </ul>
  </div>
  <div class="country-card__btns">
    <span class="country-card__boundries">Border Countries</span>
    <button class="country-card__btn">${countryInfo.borders[0]}</button>
    <button class="country-card__btn">${countryInfo.borders[1]}</button>
    <button class="country-card__btn">${countryInfo.borders[2]}</button>
  </div>
</div>
  `;

  domElements.countryCard.insertAdjacentHTML("beforeend", markup);
};

export const renderCountryDetails = (result) => {
  renderDetails(result);
};
