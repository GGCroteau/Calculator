function add(val1, val2){
    return val1+val2;
}

function subtract(val1, val2){
    return val1-val2;
}

function multiply(val1, val2){
    return val1*val2;
}

function divide(val1, val2){
    return val1/val2;
}

function operate(number1, operator, number2){
    if(operator === '+')
        return add(number1,number2);
    else if(operator === '-')
        return subtract(number1,number2);
    else if(operator === '*')
        return multiply(number1,number2);
    else if(operator === '/')
        return divide(number1,number2);
    else{
        alert("operator not recognised");
        return 0;
    }        
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate
};