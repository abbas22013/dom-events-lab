/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
let currentInput = "";
let operator = null;
let firstNumber = null;

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
  
      if (button.classList.contains("number")) {
        currentInput += buttonText;
        updateDisplay();
      } else if (button.classList.contains("operator")) {
        if (buttonText === "C") {
          currentInput = "";
          firstNumber = null;
          operator = null;
        } else {
          if (firstNumber === null) {
            firstNumber = currentInput;
          } else if (operator) {
            firstNumber = calculate(firstNumber, operator, currentInput);
          }
          operator = buttonText;
          currentInput = "";
        }
        updateDisplay();
      } else if (button.classList.contains("equals")) {
        if (operator && firstNumber !== null) {
          currentInput = calculate(firstNumber, operator, currentInput);
          operator = null;
          firstNumber = null;
        }
        updateDisplay();
      }
    });
  });



/*-------------------------------- Functions --------------------------------*/
function updateDisplay() {
    display.textContent = currentInput || "0";
  }
  
  function calculate(firstNumber, operator, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
  
    if (operator === '+') {
      return (firstNumber + secondNumber).toString();
    } else if (operator === '-') {
      return (firstNumber - secondNumber).toString();
    } else if (operator === '*') {
      return (firstNumber * secondNumber).toString();
    } else if (operator === '/') {
      if (secondNumber !== 0) {
        return (firstNumber / secondNumber).toString();
      } else {
        return 'Error'; 
      }
    } else {
      return ''; 
    }
  }


