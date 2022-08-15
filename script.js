const headerFindDealerSection = document.getElementById('header__find-dealer-section');
const headerSearchSection = document.querySelector('.header__search-section');
const headerSearchXIcon = document.querySelector('.header__search-x-icon');
const headerSearchIcon = document.querySelector('.header__search-icon');
const headerSearchDropDown = document.querySelector('.header__search-dropDown');

const openSearchDropDown = () => {
headerFindDealerSection.style.display = "none";
headerSearchSection.id = "header__search-section-open";
headerSearchXIcon.id = "header__search-open-x-icon";
headerSearchIcon.id = "header__search-open-icon";
headerSearchDropDown.removeAttribute('id');
}

const closeSearchDropDown = () => {
  headerSearchSection.removeAttribute('id');
  headerSearchXIcon.removeAttribute('id');
  headerSearchIcon.removeAttribute('id');
  headerSearchDropDown.id = "header__search-dropDown-closed";

  setTimeout(displayDealerSection, 100);
function displayDealerSection() {
  headerFindDealerSection.style.display = "flex";
}
}

headerSearchSection.addEventListener('click', openSearchDropDown);

window.addEventListener('click', function(e) {
const isSearchElement = e.target.matches('[data-search-section]');
if (isSearchElement) {
return
} else {
  closeSearchDropDown();
}
})

/* header - header__search-section-open
x-icon - header__search-open-x-icon
search-icon - header__search-open-icon */
