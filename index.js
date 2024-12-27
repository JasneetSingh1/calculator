function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

let numberOne;
let numberTwo;
let operator;

const numbers = document.querySelector('.numbers');
const display = document.querySelector('#display')
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => display.textContent = '');

numbers.addEventListener('click', (e) =>{
    if(e.target.value == '.' && display.innerText.includes('.')){
        display.innerText = display.innerText;
    }

    else if(e.target.value == '.' && !display.innerText.includes('.')){
        display.innerText = display.innerText + e.target.value;
    }
    else{
        display.innerText = display.innerText + e.target.value;
    }
    
})


function operate(numberOne, operator, numberTwo){
    let result;
    switch(operator){
        case '*':
            result = multiply(numberOne, numberTwo)
            break;
        
        case '/':
            result = divide(numberOne, numberTwo)
            break;

        case '+':
            result = add(numberOne, numberTwo)
            break;

        case '-':
            result = subtract(numberOne, numberTwo)
            break;
    }
    return result;
}


