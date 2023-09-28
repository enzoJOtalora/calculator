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
            if(answerExists){                       //expresión -> "=" -> operador
                input.textContent='Ans';
                answerExists=false;
                input.textContent+=e.target.textContent;
            }
            else if(e.target.textContent==='='){ //expresión -> "=" en cualquier momento
                /* evaluate */
                evalInput();
                //output.textContent='43';
                answerExists=true;
                
            } else if(input.textContent.split('').some(r=> operations.includes(r))){ //expresión -> operador
                evalInput();
                console.log(input.textContent);
                input.textContent='Ans'+e.target.textContent;
                //output.textContent='42' //DUMMY RESULT
                answerExists=true;
            } else {
                input.textContent+=e.target.textContent; //expresión incompleta
            }
        })
    });
}

function evalInput(){
    let a = 0;
    let b = 0;
    let operator = input.textContent[input.textContent.search(/\+|\-|\*|\//)];
    let inputString = input.textContent.split(/\+|\-|\*|\//);
    console.log(inputString);
    if(input.textContent.includes("Ans")){
        a = parseFloat(output.textContent);
    } else {
        a = parseFloat(inputString[0]);
    }
        b = parseFloat(inputString[1]);
        operate(a,b,operator);
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
}

function clearTop(){
    input.textContent='';
    firstNumber ='';
    secondNumber='';
    operator='';
}

handleOperand()
handleOperator()