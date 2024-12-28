

const numbers = document.querySelector('.numbers');
const display = document.querySelector('#display')
const clear = document.querySelector('.clear');
const opp = document.querySelector('.operators')
const equals = document.querySelector('.equal');


function add(a,b){
    return (Number(a) + Number(b))
}

function subtract(a,b){
    return (Number(a) - Number(b))
}

function multiply(a,b){
    return (Number(a) * Number(b))
}

function divide(a,b){
    if(a == '0' || b == '0'){
        alert('Cannot divide by 0')
        clears()
        return
    }
    return (Number(a) / Number(b))
}



function operate(numberOne, operator, numberTwo){
    let result;
    switch(operator){
        case 'x':
            result = multiply(numberOne, numberTwo)
            clears();
            break;
        
        case '/':
            result = divide(numberOne, numberTwo)
            clears();
            break;

        case '+':
            result = add(numberOne, numberTwo)
            clears();
            break;

        case '-':
            result = subtract(numberOne, numberTwo)
            clears();
            break;
    }
    return result;
}

function calc(e){
    
    if(e.target.value == '.' && display.innerText.includes('.')){
        display.innerText = display.innerText;
        return display.innerText;
    }

    else if(e.target.value == '.' && !display.innerText.includes('.')){
        display.innerText = display.innerText + e.target.value;
        return display.innerText;
    }
    else if(display.innerText == '0'){
        display.innerText = e.target.value;
        return display.innerText;
    }
    else{
        display.innerText = display.innerText + e.target.value;
        return display.innerText;
    }
}

function clears(){
    display.textContent = '';
    numberOne = 0;
    numberTwo = 0;
    opp.classList.remove('active'); 
}

function smartRound(num, decimal = 5){
    const part = num.toString().split('.');

    if(part.length < 2 || part[1].length <= decimal){
        return num;
    }
    else{
        return Number(num.toFixed(3));
    }
}

clear.addEventListener('click', (clears));

let numberOne;
let numberTwo;
let operator;
numbers.addEventListener('click', (e) =>{
    if(opp.classList.contains('active')){ 
        numberTwo = calc(e);
    }else{
        
        numberOne = calc(e);
    }
    

})

opp.addEventListener('click', (e) =>{
    opp.classList.toggle('active');
    
    if(opp.classList.contains('active')){
        operator = e.target.value;
        display.textContent = '';   //doesnt display numberone number
    }else{
        numberOne = operate(numberOne, operator, numberTwo);
        display.textContent = '';
        operator = e.target.value;
        opp.classList.toggle('active');
    }
})

equals.addEventListener('click', (e) =>{
    result = operate(numberOne, operator, numberTwo);
    numberOne = smartRound(result);
    display.textContent = numberOne;
    opp.classList.remove('active');   
})

// opp.addEventListener('click', (e) =>{
//      numberOne = display.textContent;
//      operator = e.target.value;
//      console.log(numberTwo);
//     clears();
// })


// equals.addEventListener('click', (e) => {
//     numberTwo = display.textContent;
//     console.log(numberTwo, numberOne, operator);
//     result = operate(numberOne, operator, numberTwo);
//     display.textContent = result;
//     numberOne = display.textContent;
// })



