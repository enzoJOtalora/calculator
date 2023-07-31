let ans = 0;
let firstNumber = '';
let operator = '';
let secondNumber = '';

const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const floatPoint = document.querySelectorAll(".floatingPoint");
const input = document.getElementById("input");
const output = document.getElementById("output");

function addition (a,b) {
    return a+b;
}
function substraction (a,b) {
    return a-b;
}
function multiplication (a,b) {
    let result = a*b;
    return Math.round(result * 1000) / 1000
}
function division (a,b){
    let result = a/b;
    return Math.round(result * 1000) / 1000
}

function power(a,b){
    let result = 1;
    if (b>0){
    for (let i=0;i<b;i++){
        result = result*a;
        }
    } else if (b<0){
        result = result*1/a;
    }
    return Math.round(result * 1000) / 1000;
}

function handleOperand(){
    operands.forEach(item => {
        item.addEventListener('click',(e)=>{
            firstNumber=firstNumber+e.target.innerText;
            input.textContent=firstNumber;
        })
    });
}
handleOperand()