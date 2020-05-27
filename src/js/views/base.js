export const domElements = {
  searchForm: document.querySelector(".form"),
  searchInput: document.querySelector(".form__search-input"),
  searchIcon: document.querySelector(".form__search-icon"),
  cardContainer: document.querySelector(".content__cards"),
  countryCard: document.querySelector(".country-card"),
  dropdown: document.querySelector(".form__dropdown"),
  dropdownBtn: document.querySelector(".form__dropdown-btn"),
  dropdownContent: document.querySelector(".form__dropdown-content"),
};

export const elementStrings = {
  loader: "loader",
};

export const renderLoader = (parent) => {
  const loader = `
  <div class="${elementStrings.loader} ${elementStrings.loader}--style2" title="1">
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="80px" height="80px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
      <animateTransform attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
  `;

  parent.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};
