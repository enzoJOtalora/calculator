let ans = 0;
let firstNumber = '';
let operator = '';
let secondNumber = '';
let answerExists = true;
let operations = ['+','-','*','/'];
let result=42;

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
            if(answerExists){
                input.textContent='';
                answerExists=false;
            }
            input.textContent+=e.target.textContent;
        })
    });
}

function handleOperator(){
    operators.forEach(item => {
        item.addEventListener('click',(e)=>{
            console.log(e.target.textContent);
            if(answerExists){
                input.textContent='Ans';
                answerExists=false;
                input.textContent+=e.target.textContent;
            }
            else if(e.target.textContent==='='){
                /* evaluate */
                output.textContent='43';
                answerExists=true;
                
            } else if(input.textContent.split('').some(r=> operations.includes(r))){
                /* evaluate */
                console.log(input.textContent);
                input.textContent='Ans';
                output.textContent='42' //DUMMY RESULT
                answerExists=true;
            } else {
                input.textContent+=e.target.textContent;
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
        default:
            ans=a;
    }
    output.textContent=ans;
    firstNumber = '';
    operator = '';
    secondNumber = '';
}

function clearTop(){
    input.textContent='';
    firstNumber ='';
    secondNumber='';
    operator='';
}

handleOperand()
handleOperator()