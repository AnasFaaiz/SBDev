const calculator = document.querySelector('.textview');
let currentValue = '';

function clearScreen() {
  currentValue = '';
  calculator.value = '';
}

function backspace() {
  currentValue = currentValue.slice(0, -1);
  calculator.value = currentValue;
}

function insert(value) {
  currentValue += value;
  calculator.value = currentValue;
}

function equal() {
  try {
    const result = eval(calculator.value);
    calculator.value = result.toString();
    currentValue = result.toString();
  } catch (error) {
    calculator.value = 'Error';
    currentValue = '';
  }
}

// Event listeners
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    switch(value) {
      case 'C':
        clearScreen();
        break;
      case 'B':
        backspace();
        break;
      default:
        insert(value);
    }
  });
});

calculator.addEventListener('input', () => {
  currentValue = calculator.value;
});
