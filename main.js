calculator = {
    display: document.querySelector('.display'),
    buttons: [...document.querySelectorAll('.btn')],
    // miscBtns: [...document.querySelector('.misc').children],
    // digitBtns: [...document.querySelector('.digits').children],
    // operatorBtns: [...document.querySelector('.operators').children],

    displayValue: '0',
    displayState: "replace",
    operand1: null,
    operand2: null,
    operation: null,
    result: null,

    
    updateDisplay: function() {
        this.display.innerText = this.displayValue;
    },
    //TODO: write and implement functionality for displayState.
    resetAll: function() {
        this.operand1 = null;
        this.operand2 = null;
        this.operation = null;
        this.result = null;
        this.displayValue = '0';
        this.updateDisplay();
    },

    processInput: function(data) {
        if (data.digit) {
            calculator.processDigit(data.digit);
        }
        if (data.misc) {
            calculator.processMisc(data.misc);
        }
        if (data.operation) {
            calculator.processOperation(data.operation);
        }
    },
    processDigit: function(digit) {
        if (calculator.displayValue === '0' && digit !== '.') {
            calculator.displayValue = digit;
        } else {
            calculator.displayValue += digit;
        }
        calculator.updateDisplay();
    },
    processMisc: function(misc) {
        if (misc === 'clear') {
            console.log(`processing ${misc}`);
            this.operand1 = null;
            this.operand2 = null;
            this.operation = null;
            this.result = null;
            this.displayValue = '0';
            this.updateDisplay();
        }
        if (misc === 'sign') {
            console.log(`processing ${misc}`);
            calculator.displayValue *= -1;
            calculator.updateDisplay();
        }
        if (misc === 'percentage') {
            console.log(`processing ${misc}`);
            calculator.displayValue *= 0.01;
            calculator.updateDisplay();
        }
    },
    processOperation: function(operation) {
        if (calculator.operation === null) {
            calculator.operand1 = calculator.displayValue;
            calculator.operation = calculator[operation];
            calculator.displayValue = '0';
        } else {
            calculator.operand2 = calculator.displayValue;
            calculator.operation();
            calculator.displayValue = calculator.result;
            calculator.updateDisplay();
            calculator.operation = null;
            calculator.result = null;
        }
    },
    
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
    calculate: function() {
        
    },
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
        calculator.processInput(data);
        console.log(`Display value: ${calculator.displayValue}`);
        console.log(`Operand 1: ${calculator.operand1}`);
        console.log(`Operation: ${calculator.operation}`);
        console.log(`Operand 2: ${calculator.operand2}`);
        console.log(`Result: ${calculator.result}`);
    });
});

calculator.resetAll();