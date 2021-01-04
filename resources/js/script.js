// Mobile Navigation 
let menuIcon = document.querySelector('.menu-icon svg');
let arrowIcon = document.getElementById('arrow-icon');
let menu = document.getElementById('menu');
let navigationLinks = document.querySelectorAll('.nav-link');

function displayMobileNavigation() {
    menu.style.left = '5%';
}

function hideMobileNavigation() {
    menu.style.left = '100%';
}

menuIcon.addEventListener('click', displayMobileNavigation);
arrowIcon.addEventListener('click', hideMobileNavigation);
navigationLinks.forEach(link => link.addEventListener('click', hideMobileNavigation));

// Form Validation

let form = document.getElementById('form');
let nameInputElement = document.getElementById('name');

const nameValidation = () => {
    if (!isNaN(nameInputElement.value)) {
        alert('Please enter a valid name. e.g Ubaid Aslam');
    }
};

form.addEventListener('submit', nameValidation);

// FAQ Section Accordion Creation

// get all accordions
let accordions = document.querySelectorAll(".accordion");
console.log(accordions);
function createAccordion() {
    // get attribute value
    let ariaAttribute = this.getAttribute('aria-expanded');

    // change all accordions aria-expanded attribute value into false.
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].setAttribute('aria-expanded', 'false');
    }

    // check if aria-expanded value is false.
    if (ariaAttribute === 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

accordions.forEach(accordion => accordion.addEventListener('click', createAccordion));