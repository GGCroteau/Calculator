//////////Global//////////
const display = document.querySelector("#display");
const operators = ["+", "-", "÷", "×"];
let Equation = {
    value1: "",
    operator: "",
    value2: "",
    displayEquation: function () {
        console.log(`value1:${this.value1}, operator:${this.operator}, value2:${this.value2}`)
    },
    isComplete: function () {
        return this.value1 != "" && this.operator != "" && this.value2 != "";
    }
}
//////////////////////////

function add(val1, val2) {
    return val1 + val2;
}

function subtract(val1, val2) {
    return val1 - val2;
}

function multiply(val1, val2) {
    return val1 * val2;
}

function divide(val1, val2) {
    return val1 / val2;
}

function operate(number1, operator, number2) {
    if (operator === '+')
        return add(number1, number2);
    else if (operator === '-')
        return subtract(number1, number2);
    else if (operator === '×')
        return multiply(number1, number2);
    else if (operator === '÷')
        return divide(number1, number2);
    else {
        alert("operator not recognised");
        return 0;
    }
}

function clearDisplay() {
    display.innerText = "0";

    Equation.value1 = "0";
    Equation.operator = "";
    Equation.value2 = "";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);

    //Make the same change to the Equation object. The parameter that is not empty must be updated.
    if (Equation.value2 != "") {
        Equation.value2 = Equation.value2.slice(0, -1);
    }
    else if (Equation.operator != "") {
        Equation.operator = Equation.operator.slice(0, -1);
    }
    else if (Equation.value1 != "") {
        Equation.value1 = Equation.value1.slice(0, -1);
    }
    Equation.displayEquation();
    //Update the display to always have at least 0 if it should be empty.
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

function writeOperator(operator) {
    //If there is already an operator in the display, replace it.
    //But if all the elements of the equation are present, then resolve the equation and add the new operator after.
    if (Equation.operator != "" && Equation.value2 != "") {
        resolveEquation();
        display.innerText += operator;
    }
    else if (Equation.operator != "") {
        const index = display.innerText.lastIndexOf(Equation.operator);
        display.innerText = replaceAt(display.innerText, index, operator);
    }
    else {
        display.innerText += operator;
    }
    Equation.operator = operator;
}

function resolveEquation() {
    if (!Equation.isComplete())
        return;
    //Do the operate with the unary + to convert string to numeric. 
    const result = Math.round(operate(+Equation.value1, Equation.operator, +Equation.value2) * 1000000000000000) / 1000000000000000;
    display.innerText = result;

    //Since the equation is resolved, update the Equation object to only have Value1 equal our result.
    Equation.value1 = result;
    Equation.operator = "";
    Equation.value2 = "";
}

//function addComma() {
//    if (Equation.operator != "" && Equation.value2 != "") {
//        Equation.value2 += ".";
//        display.innerText += ".";
//    }
//    else if (Equation.operator != "" && Equation.value2 == "") {
//        Equation.value2 += "0.";
//        display.innerText += "0.";
//    }
//    else{
//        Equation.value1 += ".";
//        display.innerText += ".";
//    }
//}

function changeSign() {
    //When operator is not empty, toggle the negative sign on value2, else do it on value1.
    //Update the display with the new Equation.
    if (Equation.operator != "") {
        if (!Equation.value2.includes('-'))
            Equation.value2 = "-" + Equation.value2;
        else
            Equation.value2 = Equation.value2.slice(1);
    }
    else {
        if (!Equation.value1.includes('-')) 
            Equation.value1 = "-" + Equation.value1;
        else if (Equation.value1.includes('-'))
            Equation.value1 = Equation.value1.slice(1);
    }

    display.innerText = Equation.value1 + Equation.operator + Equation.value2;
}

function initialisation() {
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

    //const btnComma = document.querySelector("#comma");
    //btnComma.onclick = addComma;

    const btnPlusMinus = document.querySelector("#plus-minus");
    btnPlusMinus.onclick = changeSign;
}

initialisation();


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate
};