const headerFindDealerSection = document.getElementById('header__find-dealer-section');
const headerSearchSection = document.querySelector('.header__search-section');
const headerSearchXIcon = document.querySelector('.header__search-x-icon');
const headerSearchIcon = document.querySelector('.header__search-icon');
const headerSearchDropDown = document.querySelector('.header__search-dropDown');
let searchDropDownOpen = false;
const rightDownAngle = document.querySelector('.right__down-angle');
const rightVehicleNearbySection = document.querySelector('.right__vehicle-nearby-section');
const rightFeaturesItem = document.querySelectorAll('.right__features-item');
const rightContactDealerBtn = document.querySelector('.right__contact-dealer-btn');
const rightMainFinishBuild = document.querySelector('.right__main-finish-build');
let downAngleClicked = false;

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

const expandBuildSection = () => {
  rightVehicleNearbySection.id = "right__vehicle-nearby-section-expanded";
  rightFeaturesItem.forEach(item => item.removeAttribute('id'))
  rightContactDealerBtn.removeAttribute('id');
  rightMainFinishBuild.id = "right__main-finish-build-open";
}

const closeBuildSection = () => {
  rightVehicleNearbySection.removeAttribute('id');
  rightFeaturesItem.forEach(item => item.id = "right__features-item-closed");
  rightContactDealerBtn.id = "right__contact-dealer-btn-closed";
  rightMainFinishBuild.removeAttribute('id');
}

rightDownAngle.addEventListener('click', function() {
  if (!downAngleClicked) {
    rightDownAngle.style.transform = "rotate(180deg)";
    downAngleClicked = true;
    expandBuildSection();
  } else {
    rightDownAngle.style.transform = "rotate(0deg)";
    downAngleClicked = false;
    closeBuildSection();
  }
})

/* id- right__vehicle-nearby-section-expanded 
    id-   right__features-item-closed
    id -      right__contact-dealer-btn-closed
    id -    right__main-finish-build-open
*/