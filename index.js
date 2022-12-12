"use strict";

const numbersBtn = document.querySelectorAll('[data-number]');
const operationsBtn = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const previousOperandDisplay = document.querySelector('[data-previous-operand]');
const currentOperandDisplay = document.querySelector('[data-current-operand]');

numbersBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', (event)=>{
        if(currentOperandDisplay.textContent==='' && numBtn.innerText==='0'){
            return;
        } else {
            currentOperandDisplay.textContent += numBtn.innerText;
        }

    });
});

deleteBtn.addEventListener('click', ()=>{
    currentOperandDisplay.textContent = currentOperandDisplay.textContent.slice(0,currentOperandDisplay.textContent.length-1);
});

clearBtn.addEventListener('click', ()=>{
    previousOperandDisplay.textContent = '';
    currentOperandDisplay.textContent = '';
});

operationsBtn.forEach((operationBtn)=>{
    operationBtn.addEventListener('click', ()=>{
        let operator = operationBtn.textContent;
        //console.log(operator);
        if(currentOperandDisplay.textContent===''){
            return;
        } else if (currentOperandDisplay.textContent!=='' && previousOperandDisplay.textContent!==''){
            const currentDisplay = currentOperandDisplay.textContent;
            const previousDisplay = previousOperandDisplay.textContent;
            const previousNum = Number.parseInt(previousDisplay.slice(0,previousDisplay.length-2),10);
            const currentNum = Number.parseInt(currentOperandDisplay.textContent,10);

            switch(operator){

            }
        }


        previousOperandDisplay.textContent = `${currentOperandDisplay.textContent} ${operationBtn.textContent}`;
        currentOperandDisplay.textContent = '';

    })
})


equalsBtn.addEventListener('click', ()=>{
    const currentDisplay = currentOperandDisplay.textContent;
    const previousDisplay = previousOperandDisplay.textContent;
    const previousNum = Number.parseInt(previousDisplay.slice(0,previousDisplay.length-2),10);
    const currentNum = Number.parseInt(currentOperandDisplay.textContent,10);
    const operation = previousDisplay.slice(previousDisplay.length-1,previousDisplay.length);

    function clear(){
        previousOperandDisplay.textContent = '';
        currentOperandDisplay.textContent = '';
    };

    switch(operation){
        case "+":
            clear();
            currentOperandDisplay.textContent = (previousNum + currentNum).toLocaleString('en-US');
            break;
        case "-":
            clear();
            currentOperandDisplay.textContent = (previousNum - currentNum).toLocaleString('en-US');
            break;
        case "÷":
            clear();
            currentOperandDisplay.textContent = (previousNum / currentNum).toLocaleString('en-US');
            break;
        case "x":
            clear();
            currentOperandDisplay.textContent = (previousNum * currentNum).toLocaleString('en-US');
            break;
        default:
            //console.log('error')
            return;
    };

})







