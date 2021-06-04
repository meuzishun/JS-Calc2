calculator = {
    display: document.querySelector('.display'),
    buttons: [...document.querySelectorAll('.btn')],
    miscBtns: [...document.querySelector('.misc').children],
    digitBtns: [...document.querySelector('.digits').children],
    operatorBtns: [...document.querySelector('.operators').children],

    displayValue: '0',
    updateDisplay: function() {
        this.display.innerText = this.displayValue;
    },

    operand1: null,
    operand2: null,
    operation: null,
    result: null,

    clearOperand1: function() {
        this.operand1 = null;
    },
    clearOperand2: function() {
        this.operand2 = null;
    },
    clearOperation: function() {
        this.operation = null;
    },
    clearResult: function() {
        this.result = null;
    },
    resetAll: function() {
        this.clearOperand1();
        this.clearOperand2();
        this.clearOperation();
        this.clearResult();
        this.displayValue = '0';
        this.updateDisplay();
    },
    calculate: {
        plus: function() {
            calculator.result = +calculator.operand1 + +calculator.operand2;
        },
        minus: function() {
            calculator.result = calculator.operand1 - calculator.operand2;
        },
        times: function() {
            calculator.result = calculator.operand1 * calculator.operand2;
        },
        divide: function() {
            calculator.result = calculator.operand1 / calculator.operand2;
        },
    },
    processInput: function(data) {
        if (data.digit) {
            console.log(`digit ${data.digit}`);
            calculator.processDigit(data.digit);
        }
        if (data.misc) {
            console.log(`misc ${data.misc}`);
        }
        if (data.operation) {
            console.log(`operation ${data.operation}`);
        }
    },
    clear: function() {
        calculator.resetAll();
    },
    sign: function() {
        calculator.result = calculator.displayValue * -1;
        calculator.displayValue = calculator.result;
        calculator.updateDisplay();
    },
    percentage: function() {
        calculator.result = calculator.displayValue * 0.01;
        calculator.displayValue = calculator.result;
        calculator.updateDisplay();
    },
    applyMisc: function(misc) {
        
    },
    applyOperator: function(operation) {
        calculator.operation = operation;
    },
    processDigit: function(digit) {
        if (calculator.displayValue === '0' && digit !== '.') {
            calculator.displayValue = digit;
        } else {
            calculator.displayValue += digit;
        }
        calculator.updateDisplay();
    },

    plus: function() {
        calculator.operation = 'plus';
    },
    minus: function() {
        calculator.operation = 'minus';
    },
    times: function() {
        calculator.operation = 'times';
    },
    divide: function() {
        calculator.operation = 'divide';
    },
    equals: function() {},
}

// calculator.digitBtns.forEach(btn => {
//     btn.addEventListener('click', (evt) => {
//         let char = evt.currentTarget.innerText;
//         if (calculator.displayValue == '0' && char !== '.') {
//             calculator.displayValue = char;
//         } else {
//             calculator.displayValue += char;
//         }
//         calculator.updateDisplay();
//     });
// });

// calculator.miscBtns.forEach(btn => {
//     btn.addEventListener('click', (evt) => {
//         let char = evt.currentTarget.innerText;
//         calculator.input[char]();
//     });
// });

// calculator.operatorBtns.forEach(btn => {
//     btn.addEventListener('click', (evt) => {
//         let char = evt.currentTarget.innerText;
//         calculator.input[char]();
//     });
// });

calculator.buttons.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        const elem = evt.currentTarget;
        const data = elem.dataset;
        // console.log(data);
        calculator.processInput(data);
    });
});

calculator.resetAll();