function addtodisplay(input) {
    display.value += input;
}

const display = document.querySelector('.Input');

function calculate() {
    try {
        let expression = display.value;

       
        expression = expression.replace(/%/g, '/100');

        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = "";
}
function clearLast() {
    display.value = display.value.slice(0, -1);
}
