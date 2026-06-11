//Global constants
const display = document.querySelector("#display");
const operators = ["+", "-", "÷", "×"];
let Equation = {
    value1: "",
    operator: "",
    value2: ""
}

function add(val1, val2) {
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
    else if (operator === '×')
        return multiply(number1,number2);
    else if (operator === '÷')
        return divide(number1,number2);
    else{
        alert("operator not recognised");
        return 0;
    }        
}

function clearDisplay(){
    display.innerText = "0";

    Equation.value1 = "";
    Equation.operator = "";
    Equation.value2 = "";
}

function deleteLast(){
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText == "")
        display.innerText = "0";
}

function writeNumber(number) {
    if (display.innerText == 0)
        display.innerText = number;
    else
        display.innerText += number; 

    // update Equation object
    if (Equation.operator === "")
        Equation.value1 += number;
    else
        Equation.value2 += number;
}

function replaceAt(str, index, replacement) {
    return str.slice(0, index) + replacement + str.slice(index + 1);
}

function writeOperator(operator){
    //If there is already an operator in the display, replace it.
    if (Equation.operator != "") {
        const index = display.innerText.indexOf(Equation.operator);
        display.innerText = replaceAt(display.innerText, index, operator);
    }      
    else {
        display.innerText += operator;
    }
    Equation.operator = operator;
}

function resolveEquation() {
    const result = operate(Equation.value1, Equation.operator, Equation.value2);
    display.innerText = result;

    //Since the equation is resolved, update the Equation object to only have Value1 equal our result.
    Equation.value1 = result;
    Equation.operator = "";
    Equation.value2 = "";
}

function initialisation(){
    const btnClear = document.querySelector("#clear");
    btnClear.onclick = clearDisplay;

    const btnDelete = document.querySelector("#delete");
    btnDelete.onclick = deleteLast;

    //buttons 0 to 9 
    for (let i = 0; i <= 9; i++) {
        const btn9 = document.querySelector(`#nb-${i}`);
        btn9.onclick = () => writeNumber(i);
    } 

    
    const btnDivide = document.querySelector("#divide");
    btnDivide.onclick = () => writeOperator("÷");

    const btnMultiply = document.querySelector("#multiply");
    btnMultiply.onclick = () => writeOperator("×");

    const btnSubtract = document.querySelector("#subtract");
    btnSubtract.onclick = () => writeOperator("-");

    const btnAdd = document.querySelector("#add");
    btnAdd.onclick = () => writeOperator("+");

    const btnEqual = document.querySelector("#equal");
    btnEqual.onclick = resolveEquation;
}

initialisation();


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate
};