import "../sass/main.scss";
import Search from "./models/Search";
import Countries from "./models/Country";
import * as searchViews from "./views/searchviews";
import { domElements } from "./views/base";

/**
 * Search Object
 * Filter Object
 * Advanced Search Objects
 */

const state = {};

const crltDataOnLoad = async () => {
  // 1) Prepare UI for Results
  domElements.cardContainer.innerHTML = '';

  // 2) New Country Object and add to state
  state.countries = new Countries();

  // 3) fetch Data from model
  await state.countries.getCountries();
  console.log(state.countries.result)

  // 4) Render UI
  searchViews.renderResults(state.countries.result);
}

const crltSearch = async () => {
  // 1) Get query from view
  const query = searchViews.getInput();

  if (query) {
    // 2) New Search Object and add to state
    state.search = new Search(query);
    // 3) Prepare UI for Results
    searchViews.clearInputs();
    searchViews.clearUI();

    // 4) Search for Country
    await state.search.searchByName();
    // 5) Render UI
    searchViews.renderResults(state.search.result);
  }
};

window.onload = () => {
  crltDataOnLoad();
}

domElements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  crltSearch();
});

domElements.searchIcon.addEventListener("click", (e) => {
  crltSearch();
});

// const dropdownfilterBtn = document.querySelector(".form__dropdown-btn");
// const dropdownContent = document.querySelector(".form__dropdown-content");
// const header = document.querySelector(".header");
// dropdownfilterBtn.addEventListener("click", (e) => {
//   dropdownContent.classList.toggle("active");
// });
