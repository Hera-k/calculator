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
let checkIfValid = true;
//alert(operate(operator, firstValue, secondValue));

const buttons= document.querySelectorAll(".number");
const display = document.getElementById("display");
display.textContent = "";
const dotoperator = document.querySelector(".dotoperator");
dotoperator.addEventListener("click", () => {
    display.textContent += dotoperator.textContent;
    if(!waitingforSecond){
        firstValue += dotoperator.textContent;
        dotoperator.disabled = true;

    } else{
        secondValue += dotoperator.textContent;
        dotoperator.disabled = true;
    }
    
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        if(!waitingforSecond){
            firstValue += button.textContent;
            display.textContent += button.textContent;
        } else{
            secondValue += button.textContent;
            display.textContent += button.textContent;
        }
        
    });
});
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if(checkIfValid){
            operatorString = operator.textContent;
            display.textContent += " " + operator.textContent + " ";
            checkIfValid = false;
            waitingforSecond = true;
            dotoperator.disabled = false;
        } else{
            display.textContent = "Invalid operation";
            firstValue = "";
            secondValue = "";
            checkIfValid = true;
        }
        
    });
})
const equalsoperator = document.querySelector(".equalsoperator");
equalsoperator.addEventListener("click", () => {
    if(firstValue != "" && secondValue != ""){
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        let result = operate(operatorString, firstValue, secondValue).toFixed(1);
        checkIfValid = true;
        display.textContent += " = ";
        display.textContent += result;
        firstValue = result.toString();
        secondValue = "";
        waitingforSecond = true;
        dotoperator.disabled = false;
    } else{
        console.log("nothing happened");
    }
}
);
const ACButton = document.querySelector(".ACbutton");
ACButton.addEventListener("click", () => {
    display.textContent = "";
    firstValue = "";
    secondValue = "";
    waitingforSecond = false;
    dotoperator.disabled = false;
});

const Deletebutton = document.querySelector(".DeleteButton");
Deletebutton.addEventListener("click", () => {
    let spliteq = display.textContent.split(" ");
    spliteq.pop();
    display.textContent = spliteq.join(" ");
});