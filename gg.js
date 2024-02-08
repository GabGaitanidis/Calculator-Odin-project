function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}
function mod(a, b){
    return a % b
}

const display = document.querySelector('.display');
const ac = document.querySelector(".AC");
const numbers = document.querySelectorAll('input');
const equal = document.querySelector('.equal');
const operators = document.querySelectorAll('.operator')
const de = document.querySelector('.DE')

let firstNumber = '';
let operation = '';
let secondNumber = '';
let results = ''; 

function operate(num1, num2, operation) {
    if (operation == "+") {
        return add(num1, num2);
    } else if (operation == "-") {
        return subtract(num1, num2);
    } else if (operation == "/") {
        return divide(num1, num2);
    } else if (operation == "*") {
        return multiply(num1, num2);
    } 
}

function updateDisplay() {
    display.textContent = firstNumber + (operation ? ' ' + operation + ' ' : '') + secondNumber;
}


operators.forEach(operator => {
    operator.addEventListener('click', () =>{
        operation = operator.value
        updateDisplay()
    })
})

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            const value = number.value;
            if (!operation) {
                firstNumber += value;
            } else if(operation){
                secondNumber += value;
            }
            updateDisplay();
        });
    });



ac.addEventListener('click', () => {
    firstNumber = '';
    operation = '';
    secondNumber = '';
    updateDisplay();
});

equal.addEventListener('click', () => {
    const result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operation);
    if((firstNumber == 0 || secondNumber == 0) && operation == '/'){
        alert('Cant divide by 0')
        firstNumber = '';
        secondNumber = '';
        operation = ''
        updateDisplay()
    }
    if(!firstNumber && !operation && !secondNumber){
        alert('Put number')
    } else if(firstNumber && operation && secondNumber){
    display.textContent += result;
    firstNumber = result;
    secondNumber = ''
    operation = ''
    updateDisplay()
    } else{
    alert('Put number')
}
    
});





