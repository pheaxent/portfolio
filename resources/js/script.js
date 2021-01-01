// Form Validation

let form = document.getElementById('form');
let nameInputElement = document.getElementById('name');

const nameValidation = () => {
    if (typeof Number(nameInputElement.value) == 'number') {
        alert('Please enter a valid name. e.g Ubaid Aslam');
    }
};

form.addEventListener('submit', nameValidation);

// FAQ Section Accordion Creation