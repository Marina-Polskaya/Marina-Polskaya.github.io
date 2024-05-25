const phone = document.querySelector('#phone');

phone.addEventListener('keydown', function(e) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    let isPlus = false;

    if (e.key >= 0 && e.key <=9) {
        isDigit = true;
    }
    
    if (e.key == '-') {
        isDash = true;
    } 
    
    if (e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Backspace') {
        isControl = true;
    } 

    if (e.key == '+') {
        isPlus = true;
    }

    if (!isDigit && !isDash && !isControl && !isPlus) {
        e.preventDefault();
    }
});