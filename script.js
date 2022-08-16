const headerFindDealerSection = document.getElementById('header__find-dealer-section');
const headerSearchSection = document.querySelector('.header__search-section');
const headerSearchXIcon = document.querySelector('.header__search-x-icon');
const headerSearchIcon = document.querySelector('.header__search-icon');
const headerSearchDropDown = document.querySelector('.header__search-dropDown');
let searchDropDownOpen = false;

const openSearchDropDown = () => {
headerFindDealerSection.style.display = "none";
headerSearchSection.id = "header__search-section-open";
headerSearchXIcon.id = "header__search-open-x-icon";
headerSearchIcon.id = "header__search-open-icon";
headerSearchDropDown.removeAttribute('id');
headerSearchSection.style.animation = "searchBarOpen .4s";
searchDropDownOpen = true;
}

const closeSearchDropDown = () => {
  headerSearchSection.removeAttribute('id');
  headerSearchXIcon.removeAttribute('id');
  headerSearchIcon.removeAttribute('id');
  headerSearchDropDown.id = "header__search-dropDown-closed";
headerSearchSection.style.animation = "searchBarClose .4s";
searchDropDownOpen = false;
/* Timeout so dealer section movement isn't visible */
  setTimeout(displayDealerSection, 100);
function displayDealerSection() {
  headerFindDealerSection.style.display = "flex";
}
}

headerSearchSection.addEventListener('click', openSearchDropDown);

window.addEventListener('click', function(e) {
const isSearchElement = e.target.matches('[data-search-section]');
if (searchDropDownOpen) {
  if (isSearchElement) {
    return
    } else {
      closeSearchDropDown();
    }
}
})

