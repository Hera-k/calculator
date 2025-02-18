function add(a,b){
    return a+b;
};
function subtract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b;
};
function divide(a,b){
    if( a===0 || b === 0 ){
        return "Can't divide by 0";
    }
    return a/b;
};
function operate(operator, a, b){
if(operator === "+"){
    return add(a,b);
} else if(operator === "-"){
    return subtract(a,b);
} else if(operator === "x"){
    return multiply(a,b);
} else if(operator === "➗"){
    return divide(a,b);
}
};
let firstValue = "";
let secondValue = "";
let operatorString = "";
//alert(operate(operator, firstValue, secondValue));

const buttons= document.querySelectorAll(".number");
const display = document.getElementById("display");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;;
    });
});
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        display.textContent += operator.textContent;
    });
})
const equalsoperator = document.querySelector(".equalsoperator");
equalsoperator.addEventListener("click", () => {
    const equationSplit = display.textContent.split("");
    firstValue = Number(equationSplit[0]);
    operatorString = equationSplit[1];
    secondValue = Number(equationSplit[2]);
    display.textContent+= "=";
    display.textContent += operate(operatorString, firstValue, secondValue);
});
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", () => {
    display.textContent = "";
});

const ACbutton = document.querySelector(".ACbutton");
ACbutton.addEventListener("click", () => {
    let spliteq = display.textContent.split("");
    const len = display.textContent.split("").length;
    spliteq.splice(-1, 1);
    display.textContent = spliteq.join("");
});