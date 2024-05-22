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
            const response = document.querySelector('#response'); 
            const modalBtn = document.querySelector('#modal-btn');
            const modalContent = document.querySelector('#modal-content');
            
            response.classList.add('response--active');

            if (xhr.status >= 400) {
                modalContent.textContent = 'Попробуйте позже';
            } else {
                orderForm.reset();
            }

            modalBtn.addEventListener('click', (e) => {
                e.preventDefault();
                response.classList.remove('response--active');
                modalContent.textContent = 'Сообщение отправлено';
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
