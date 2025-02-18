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
    return a/b;
};
function operate(operator, a, b){
if(operator === "+"){
    return add(a,b);
} else if(operator === "-"){
    return subtract(a,b);
} else if(operator === "*"){
    return multiply(a,b);
} else if(operator === "/"){
    return divide(a,b);
}
};
const firstValue = Number(prompt("Enter the first Number"));
const secondValue = Number(prompt("Enter the second Number"));
const operator = prompt("Choose an operator(+, -, *, /)");
alert(operate(operator, firstValue, secondValue));