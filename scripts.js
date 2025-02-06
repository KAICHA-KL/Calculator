// Initialize variables to store calculator state
let firstNumString = '';      // Stores first number as string
let secondNumString = '';     // Stores second number as string
let totalString ='';         // Stores result as string
let operand ='';            // Stores the operator (+, -, *, /)
let firstNum = 0;           // First number converted to numeric
let secondNum = 0;          // Second number converted to numeric
let len1 = 0;              // Length of first number
let len2 = 0;              // Length of second number

// Add click event listeners to all number buttons
let numberList = document.querySelectorAll(".number");
numberList.forEach(button => {button.addEventListener('click',(e) => concat(e.target.value))});

// Add click event listeners to all operator buttons
let operatorList = document.querySelectorAll(".operator");
operatorList.forEach(butto => {butto.addEventListener('click',(e)=> operateNum(e.target.value))});

// Add click event listener to equals button
let equals = document.querySelector(".equal");
equals.addEventListener('click',(e) => totalIt(e.target.value));

// Add click event listener to clear button
let clears = document.getElementById("AC");
clears.addEventListener('click',(e) => clearIt());

// Get reference to calculator display element
let screenNumber = document.querySelector(".screen");

// Function to concatenate numbers as they're entered
function concat(partNum){
    if(operand ==''){ // If no operator selected, build first number
        firstNumString += partNum;
        screenNumber.textContent = firstNumString;
    }else {          // If operator selected, build second number
        secondNumString += partNum;
        screenNumber.textContent = secondNumString;
    }
}

// Function to handle operator button clicks
function operateNum(operateSym){
    if(operand ==''){ // If no operator set, store it
        operand = operateSym;
    }
    else totalIt('='); // If operator exists, calculate current expression
}

// Function to perform calculation based on stored operator
function totalIt(equalVal){
    firstNum = Number(firstNumString);  // Convert strings to numbers
    secondNum = Number(secondNumString);
    if(operand =='+')
    {
        add(firstNum,secondNum);
    }
    if(operand =='-')
    {
        subtract(firstNum,secondNum);
    }
    if(operand =='*')
    {
        multiply(firstNum,secondNum);
    }
    if(operand =='/')
    {
        divide(firstNum,secondNum);
    }
}

// Reset calculator state after calculation, preserving result as first number
function relapse() {
    firstNumString = totalString; 
    secondNumString = '';
    totalString ='';
    operand ='';
    firstNum = 0;
    secondNum = 0;
    len2 = 0;
}

// function for all clear 
function clearIt(){
    firstNumString = '';      
    secondNumString = '';     
    totalString ='';        
    operand ='';            
    firstNum = 0;           
    secondNum = 0;          
    len1 = 0;             
    len2 = 0; 
    screenNumber.textContent = 0;
}

// Addition function with decimal rounding
function add(a,b) {
    let inputA = Math.round((a + Number.EPSILON)*1000)/1000;  // Round to 3 decimal places
    let inputB = Math.round((b + Number.EPSILON)*1000)/1000;
    let total = inputA + inputB;
    screenNumber.textContent = total;
    totalString = total.toString();
    relapse();
}

// Subtraction function with decimal rounding
function subtract(a,b){
    let inputA = Math.round((a + Number.EPSILON)*1000)/1000;
    let inputB = Math.round((b + Number.EPSILON)*1000)/1000;
    let total = inputA - inputB;
    total = Math.round((total + Number.EPSILON)*1000)/1000;
    screenNumber.textContent = total;
    totalString = total.toString();
    relapse();
}

// Multiplication function with decimal rounding
function multiply(a,b){
    let inputA = Math.round((a + Number.EPSILON)*1000)/1000;
    let inputB = Math.round((b + Number.EPSILON)*1000)/1000;
    let total = inputA * inputB;
    total = Math.round((total + Number.EPSILON)*1000)/1000;
    screenNumber.textContent = total;
    totalString = total.toString();
    relapse();
}

// Division function with decimal rounding
function divide(a,b){
    let inputA = Math.round((a + Number.EPSILON)*1000)/1000;
    let inputB = Math.round((b + Number.EPSILON)*1000)/1000;
    let total = inputA / inputB;
    total = Math.round((total + Number.EPSILON)*1000)/1000;
    screenNumber.textContent = total;
    totalString = total.toString();
    relapse();
}