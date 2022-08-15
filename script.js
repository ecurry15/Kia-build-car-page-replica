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
document.getElementsByClassName('header__search-section-input').focus();
}

const closeSearchDropDown = () => {
  headerFindDealerSection.style.display = "flex";
}

headerSearchSection.addEventListener('click', openSearchDropDown);

/* header - header__search-section-open
x-icon - header__search-open-x-icon
search-icon - header__search-open-icon */
