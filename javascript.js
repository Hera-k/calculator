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
    if(b === 0 ){
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

let waitingforSecond = false;
//alert(operate(operator, firstValue, secondValue));

const buttons= document.querySelectorAll(".number");
const display = document.getElementById("display");
display.textContent = "";
const dotoperator = document.querySelector(".dotoperator");
dotoperator.addEventListener("click", () => {
    display.textContent += dotoperator.textContent;
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        if(!waitingforSecond){
            console.log("first Value");
            firstValue += button.textContent;
            display.textContent += button.textContent;
        } else{
            console.log("Second Value");
            secondValue += button.textContent;
            display.textContent += button.textContent;
        }
        
    });
});
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        operatorString = operator.textContent;
        display.textContent += " " + operator.textContent + " ";
        waitingforSecond = true;
    });
})
const equalsoperator = document.querySelector(".equalsoperator");
equalsoperator.addEventListener("click", () => {
    //firstValue = Number(equationSplit[0]);
    //operatorString = equationSplit[1];
    //secondValue = Number(equationSplit[2]);
    console.log(firstValue);
    console.log(secondValue);
    //console.log(result);
    if(firstValue != "" && secondValue != ""){
        let result = operate(operatorString, Number(firstValue), Number(secondValue));
        display.textContent += " = ";
        display.textContent += result;
        firstValue = result.toString();
        secondValue = "";
        waitingforSecond = true;
    } else{
        console.log("nothing happened");
    }
}
);
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", () => {
    display.textContent = "";
    firstValue = "";
    secondValue = "";
    waitingforSecond = false;
});

const ACbutton = document.querySelector(".ACbutton");
ACbutton.addEventListener("click", () => {
    let spliteq = display.textContent.split(" ");
    spliteq.pop();
    display.textContent = spliteq.join(" ");
});