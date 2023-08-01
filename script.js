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
            if(operator===''){
                firstNumber=firstNumber+e.target.innerText;
                input.textContent=firstNumber;
            } else {
                secondNumber+=e.target.innerText;
                input.textContent=secondNumber;
            }
        })
    });
}

function handleOperator(){
    let operation = '';
    operators.forEach(item => {
        item.addEventListener('click',(e)=>{
            if(secondNumber===''&&e.target.innerText!='='){
                operator=e.target.innerText;
                input.textContent=firstNumber+operator;
            } else if (e.target.innerText==="="){
                operate(parseFloat(firstNumber),parseFloat(secondNumber),operator);
            } else {
                operate(parseFloat(firstNumber),parseFloat(secondNumber),operator);
                firstNumber=ans;
                secondNumber='';
                operator=e.target.innerText;
                input.textContent=firstNumber+operator;
            }
        })
    });
}

function operate(a,b,operator){
    switch (operator){
        case '+':
            ans=addition(a,b);
            break;
        case '-':
            ans=substraction(a,b);
            break;
        case '*':
            ans=multiplication(a,b);
            break;
        case '/':
            ans=division(a,b);
            break;
        case '^':
            ans=power(a,b);
            break;
    }
    output.textContent=ans;
    firstNumber = '';
    operator = '';
    secondNumber = '';
}

handleOperand()
handleOperator()