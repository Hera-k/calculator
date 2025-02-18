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

const firstValue = Number(prompt("Enter the first Number"));
const secondValue = Number(prompt("Enter the second Number"));
const result = add(firstValue, secondValue);
alert(result);