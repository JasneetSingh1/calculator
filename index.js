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
