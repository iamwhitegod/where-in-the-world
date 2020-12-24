import "../sass/main.scss";
import Search from "./models/Search";
import Country from "./models/Country";
import * as searchViews from "./views/searchviews";
import * as countryViews from "./views/countryviews";
import { domElements, renderLoader, clearLoader, theme } from "./views/base";

/**
 * Search Object
 * Filter Object
 * Advanced Search Objects
 */

const state = {};

/**
 * All COUNTRIES CONTROLLER
 */
const crltAllCountries = async () => {
  // 1) Prepare UI for Results
  domElements.cardContainer.innerHTML = "";
  renderLoader(domElements.cardContainer);

  // 2) New Country Object and add to state
  state.countries = new Country();
  try {
    // 3) fetch Data from model
    await state.countries.getAllCountries();
    // 4) Render UI
    clearLoader();
    searchViews.renderResults(state.countries.result);
  } catch (err) {
    console.log(err);
  }
};

/**
 * SEARCH CONTROLLER
 */
const crltSearch = async () => {
  // 1) Get query from view
  const query = searchViews.getInput();

  if (query) {
    // 2) New Search Object and add to state
    state.search = new Search(query);
    // 3) Prepare UI for Results
    searchViews.clearInputs();
    searchViews.clearUI();
    renderLoader(domElements.cardContainer);
    try {
      // 4) Search for Country
      await state.search.searchByName();
      // 5) Render UI
      clearLoader();
      searchViews.renderResults(state.search.result);
    } catch (err) {
      console.log(err);
    }
  }
};

/**
 * COUNTRY DETAILS CONTROLLER
 */
const crltCountry = async () => {
  // 1) Get alphaCode(hash) from URL
  const alphaCode = window.location.hash.replace("#", "");

  if (alphaCode) {
    // 2) Prepare UI for Changes
    renderLoader(domElements.countryCard);
    // 3) New Country Object and add to state
    state.country = new Country(alphaCode);
    try {
      // 4) Get Country Data
      await state.country.getCountry();
      // 5) Render UI
      console.log(state.country);
      clearLoader();
      countryViews.renderCountryDetails(state.country);
    } catch (err) {
      console.log(err);
    }
  }
};

/**
 * FIlTER CONTROLLER
 */

const crltFilter = async () => {
  // 1) Get filter query from hash url
  const region = window.location.hash.replace("#", "");

  if (region) {
    // 2) Prepare UI for changes
    searchViews.clearUI();
    renderLoader(domElements.cardContainer);
    // 3) New Country Object and add to state
    state.filter = new Country();

    try {
      // 4) Filter Country by Region
      await state.filter.getByRegion(region);

      // 5) Render UI
      clearLoader();
      searchViews.renderResults(state.filter.result);
    } catch (err) {
      console.log(err);
    }
  }
};

if (window.location.pathname === "/") {
  window.addEventListener("load", crltAllCountries);

  if (domElements.searchForm) {
    domElements.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      crltSearch();
    });
  }

  if (domElements.searchIcon) {
    domElements.searchIcon.addEventListener("click", (e) => {
      crltSearch();
    });
  }

  if (domElements.dropdownBtn) {
    domElements.dropdownBtn.addEventListener("click", (e) => {
      domElements.dropdownContent.classList.toggle("active");

      if (domElements.dropdownContent.classList.contains("active")) {
        window.addEventListener("hashchange", crltFilter);
      }
    });
  }
}

if (window.location.pathname === "/pages/details.html") {
  window.addEventListener("load", crltCountry);
}

// domElements.navMode.addEventListener("click", (e) => {
//   theme();
// });
