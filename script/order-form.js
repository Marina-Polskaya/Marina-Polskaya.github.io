const orderForm = document.querySelector('#order-form');
const formButton = document.querySelector("#form-button");

formButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    if (validateForm(orderForm)) {
        const data = {
            name: orderForm.elements.name.value,
            phone: orderForm.elements.phone.value,
            comment: orderForm.elements.comment.value,
            to: orderForm.elements.email.value
        };       

        const dataJson = JSON.stringify(data);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(dataJson);


        xhr.addEventListener('load', function() {
            const section = document.querySelector('#section-order-form');
            const orderContainer = document.querySelector('#order-form-container'); 
            const responseContainer = document.querySelector('#response-container');
            const modalBtn = document.querySelector('#modal-btn');
            
            section.classList.remove('order-form');
            orderContainer.classList.add('order-form__container--inactive');
            section.classList.add('response');
            responseContainer.classList.add('response__container--active');
            section.classList.add('response--active');

            if (xhr.status >= 400) {
                const modalContent = document.querySelector('#modal-content');
                modalContent.textContent = 'Попробуйте позже';
                console.log(xhr.statusText);
            }

            modalBtn.addEventListener('click', (e) => {
                e.preventDefault();
                section.classList.remove('response--active');
                section.classList.remove('response');
                responseContainer.classList.remove('response__container--active');
                orderContainer.classList.remove('order-form__container--inactive');
                section.classList.add('order-form');
            });
        });
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateFild(form.elements.name)) {
        valid = false;
    }

    if (!validateFild(form.elements.phone)) {
        valid = false;
    }

    if (!validateFild(form.elements.email)) {
        valid = false;
    }

    if (!validateFild(form.elements.comment)) {
        valid = false;
    }

    return valid;
}

function validateFild(field) {
    let valid = true;
    if (!field.checkValidity()) {
        field.style.borderColor = 'red';
        field.style.backgroundColor = '#fcd4d4';
        valid = false;
    }
    return valid;
}
