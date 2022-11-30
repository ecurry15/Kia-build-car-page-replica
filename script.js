
const headerFindDealerSection = document.getElementById('header__find-dealer-section');
const headerSearchSection = document.querySelector('.header__search-section');
const headerSearchXIcon = document.querySelector('.header__search-x-icon');
const headerSearchIcon = document.querySelector('.header__search-icon');
const headerSearchDropDown = document.querySelector('.header__search-dropDown');
const headerSearchInput = document.querySelector('.header__search-section-input');
let searchDropDownOpen = false;
const rightDownAngle = document.querySelector('.right__down-angle');
const rightVehicleNearbySection = document.querySelector('.right__vehicle-nearby-section');
const rightFeaturesItem = document.querySelectorAll('.right__features-item');
const rightContactDealerBtn = document.querySelector('.right__contact-dealer-btn');
const rightMainFinishBuild = document.querySelector('.right__main-finish-build');
let downAngleClicked = false;
const carContainer = document.querySelector('.car-container__car-section');
const carSectionImg = document.querySelector('.car-section__img');
const rightMobileContactDealerSection = document.querySelector('.right__mobile-contact-dealer-section');

//SetUp for car 360 rotation ----
let initialXPosition = 0;
let mouseDownOnImg = false;
let currentImg = 1;
let dragPosition = '';
//SetUp for car 360 rotation End----

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
  headerSearchInput.value = "";
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
  rightMobileContactDealerSection.removeAttribute('id');
}

const closeBuildSection = () => {
  rightVehicleNearbySection.removeAttribute('id');
  rightFeaturesItem.forEach(item => item.id = "right__features-item-closed");
  rightContactDealerBtn.id = "right__contact-dealer-btn-closed";
  rightMainFinishBuild.removeAttribute('id');
  rightMobileContactDealerSection.id = "right__mobile-contact-dealer-section-closed";
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

carContainer.addEventListener('pointerdown', function() {
  mouseDownOnImg = true;
})
window.addEventListener('pointerup', function() {
  mouseDownOnImg = false;
})
window.addEventListener('pointerleave', function() {
  mouseDownOnImg = false;
})

const paintColorCircles = document.querySelectorAll('.paint__circle');
let currentCarColor = "0c0c0c";
const paintColorName = document.querySelector('.paint-color__name');


paintColorCircles.forEach(e => {
  e.addEventListener('pointerdown', (circle) => {
    // method to add the check icon to to the selected color --//
    //1. check if selected color is already selected or is nonSelectable-
    //2. if selected color is available a div with the icon is appended to the selected color --
    //3. finally the data-current attribute is removed from all and re-added to the selected color --
    const isCurrent = circle.currentTarget.matches("[data-current]");
    const isNonSelectable = circle.currentTarget.matches("[data-nonSelectable]");
    if(!isCurrent && !isNonSelectable) {
      paintColorCircles.forEach(paint => {
        paint.removeAttribute('data-current')
       });
      circle.currentTarget.setAttribute('data-current', "");
      let paintSelectedIcon = document.querySelectorAll('.paint-and-seat__selected-icon');
  paintSelectedIcon.forEach(i => {
  i.remove();
  });
  const span = document.createElement('span');
  span.className = "paint-and-seat__selected-icon";
  span.id = "selected-icon-active";
  const divIcon = document.createElement('i');
  divIcon.classList = "fa-solid fa-check";
  span.appendChild(divIcon);
  const newdiv = circle.currentTarget;
  newdiv.appendChild(span);
   // method to add the check icon to to the selected color  End--//

//changeCarImg color ---
      if (e.id === "paint__black") {
        currentCarColor = "0c0c0c";
        paintColorName.textContent = "Ebony Black";
        carSectionImg.src = "https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2023/trims/gt/exterior/0c0c0c/360/01.png/jcr:content/renditions/desktop.png";
      } else if(e.id === "paint__pearl") {
        currentCarColor = "e3e7ee";
        paintColorName.textContent = "Glacial White Pearl";
        carSectionImg.src = "https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2023/trims/gt/exterior/e3e7ee/360/01.png/jcr:content/renditions/desktop.png";
      } else if(e.id === "paint__wolf-gray") {
        currentCarColor = "adb4c0";
        paintColorName.textContent = "Wolf Gray";
        carSectionImg.src = "https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2023/trims/gt/exterior/adb4c0/360/01.png/jcr:content/renditions/desktop.png";
      } else if(e.id === "paint__red") {
        currentCarColor = "9e212b";
        paintColorName.textContent = "Passion Red Tint Coat";
        carSectionImg.src = "https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2023/trims/gt/exterior/9e212b/360/01.png/jcr:content/renditions/desktop.png";
      } else if(e.id === "paint__blue") {
        currentCarColor = "283eab";
        paintColorName.textContent = "Sapphire Blue";
        carSectionImg.src = "https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2023/trims/gt/exterior/283eab/360/01.png/jcr:content/renditions/desktop.png";
      } 
    }
  
  });
});


const changeCarImg = () => {
  if(dragPosition == 'left') {
    if(currentImg < 36) { 
      currentImg++;
    } else if (currentImg == 36) {
      currentImg = 1;
    }

  } else if (dragPosition == 'right') {
    if (currentImg > 1) {
      currentImg--;
    } else if (currentImg == 1) {
      currentImg = 36;
    }
  }
  if(currentImg < 10) {
carSectionImg.src = `https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2023/trims/gt/exterior/${currentCarColor}/360/${"0" + currentImg}.png/jcr:content/renditions/desktop.png`
  } else {
    carSectionImg.src = `https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2023/trims/gt/exterior/${currentCarColor}/360/${currentImg}.png/jcr:content/renditions/desktop.png`
  }
}


carContainer.addEventListener('pointermove', function(e) {
 if (mouseDownOnImg) {
if(initialXPosition < e.pageX) {
  dragPosition = 'right';
  initialXPosition = e.pageX;
} else {
  dragPosition = 'left';
  initialXPosition = e.pageX;
}
changeCarImg();
 }
})

setTimeout(() => {
  if(localStorage.getItem("firstTime")==null){
    alert('Hi, some features were omitted to avoid excessive time. The main features are to change the car color(5 available) and its position (360 movement). Thanks for viewing!');
    localStorage.setItem("firstTime","done");
  }
}, "1000");