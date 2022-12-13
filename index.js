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
        const previousDisplay = previousOperandDisplay.textContent;
        const currentDisplay = currentOperandDisplay.textContent;
        const operator = operationBtn.textContent;

        if(currentDisplay===''){
            return;
        } else if(currentDisplay!=='' && previousDisplay!==''){
            const previousNum = Number(previousDisplay.slice(0,previousDisplay.length-2));
            const currentNum = Number(currentDisplay);
            switch(operator){
                case "+":
                    previousOperandDisplay.textContent = `${previousNum+currentNum} ${operator}`;
                    currentOperandDisplay.textContent = '';
                    break;
                case "-":
                    result = previousNum-currentNum;
                    previousOperandDisplay.textContent = `${previousNum-currentNum} ${operator}`;
                    currentOperandDisplay.textContent = '';
                    break;
                case "÷":
                    previousOperandDisplay.textContent = `${previousNum/currentNum} ${operator}`;
                    currentOperandDisplay.textContent = '';
                    break;
                case "x":
                    previousOperandDisplay.textContent = `${previousNum*currentNum} ${operator}`;
                    currentOperandDisplay.textContent = '';
                    break;
                default:
                    return;
            };
        }else {
            previousOperandDisplay.textContent =`${currentDisplay} ${operator}`;
            currentOperandDisplay.textContent = '';
        }
    });
})

equalsBtn.addEventListener('click', ()=>{
    const currentDisplay = currentOperandDisplay.textContent;
    const previousDisplay = previousOperandDisplay.textContent;
    const previousNum = Number(previousDisplay.slice(0,previousDisplay.length-2));
    const currentNum = Number(currentDisplay);
    const operator = previousDisplay.slice(previousDisplay.length-1,previousDisplay.length);

    function clear(){
        previousOperandDisplay.textContent = '';
        currentOperandDisplay.textContent = '';
    };

    switch(operator){
        case "+":
            clear();
            currentOperandDisplay.textContent = (previousNum + currentNum);
            break;
        case "-":
            clear();
            currentOperandDisplay.textContent = (previousNum - currentNum);
            break;
        case "÷":
            clear();
            currentOperandDisplay.textContent = (previousNum / currentNum);
            break;
        case "x":
            clear();
            currentOperandDisplay.textContent = (previousNum * currentNum);
            break;
        default:
            return;
    };

})











