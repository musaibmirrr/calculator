const reset = document.querySelector('#reset');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const decimal = document.querySelector('#decimal');
const screen = document.querySelector('.screen');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const power = document.querySelector('#power');
const mod = document.querySelector('#mod');
const calculate = document.querySelector('#calculate');
const remove = document.querySelector('#remove');

let screenValue = '';
let afterValue = '';
let result = 0;
let isNew = false;
let isAdd = false;
let isSub = false;
let isMul = false;
let isDiv = false;
let isMod = false;
let isPow = false;
let isDecimalClicked = 0;



// Input Logic
zero.addEventListener('click', () => {
    if (isNew == false) {
        if (screenValue == '') {
            screen.innerText = '0';
            screenValue = '0';
        } else if (screenValue == '0') {
            screenValue = '0';
            screen.innerText = screenValue;
        }
        else {
            screenValue += zero.value;
            screen.innerText = screenValue;
        }

    } else if (isNew = true && isAdd == true) {
        if (afterValue == '') {
            afterValue = '0';
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else if (afterValue == '0') {
            afterValue = '0';
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += zero.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '') {
            afterValue = '0';
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else if (afterValue == '0') {
            afterValue = '0';
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += zero.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '') {
            afterValue = '0';
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else if (afterValue == '0') {
            afterValue = '0';
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += zero.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '') {
            afterValue = '0';
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else if (afterValue == '0') {
            afterValue = '0';
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += zero.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '') {
            afterValue = '0';
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else if (afterValue == '0') {
            afterValue = '0';
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += zero.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '') {
            afterValue = '0';
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else if (afterValue == '0') {
            afterValue = '0';
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += zero.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
function isZeroBefore(currentVal, whichButton) {
    if (currentVal == '0') {
        screenValue = whichButton.value;
        screen.innerText = `${screenValue}`;
    } else {
        screenValue += whichButton.value;
        screen.innerText = screenValue;
    }
}

one.addEventListener('click', () => {
    if (isNew == false) {
        isZeroBefore(screenValue, one);
    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = one.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += one.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = one.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += one.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = one.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += one.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = one.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += one.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = one.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += one.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = one.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += one.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
two.addEventListener('click', () => {
    if (isNew == false) {
        isZeroBefore(screenValue, two);
    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = two.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += two.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = two.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += two.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = two.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += two.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = two.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += two.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = two.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += two.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = two.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += two.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
three.addEventListener('click', () => {
    if (isNew == false) {
        isZeroBefore(screenValue, three);
    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = three.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += three.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = three.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += three.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = three.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += three.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = three.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += three.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = three.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += three.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = three.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += three.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
four.addEventListener('click', () => {
    if (isNew == false) {
        // screenValue += four.value;
        // screen.innerText = screenValue;
        isZeroBefore(screenValue, four);
    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = four.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += four.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = four.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += four.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = four.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += four.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = four.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += four.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = four.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += four.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = four.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += four.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
five.addEventListener('click', () => {
    if (isNew == false) {
        // screenValue += five.value;
        // screen.innerText = screenValue;
        isZeroBefore(screenValue, five);
    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = five.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += five.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = five.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += five.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = five.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += five.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = five.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += five.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = five.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += five.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = five.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += five.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
six.addEventListener('click', () => {
    if (isNew == false) {
        // screenValue += six.value;
        // screen.innerText = screenValue;
        isZeroBefore(screenValue, six);
    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = six.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += six.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = six.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += six.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = six.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += six.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = six.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += six.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = six.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += six.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = six.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += six.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
seven.addEventListener('click', () => {
    if (isNew == false) {
        // screenValue += seven.value;
        // screen.innerText = screenValue;
        isZeroBefore(screenValue, seven);

    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = seven.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += seven.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = seven.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += seven.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = seven.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += seven.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = seven.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += seven.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = seven.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += seven.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = seven.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += seven.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
eight.addEventListener('click', () => {
    if (isNew == false) {
        // screenValue += eight.value;
        // screen.innerText = screenValue;
        isZeroBefore(screenValue, eight);
    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = eight.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += eight.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = eight.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += eight.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = eight.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += eight.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = eight.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += eight.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = eight.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += eight.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = eight.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += eight.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});
nine.addEventListener('click', () => {
    if (isNew == false) {
        // screenValue += nine.value;
        // screen.innerText = screenValue;
        isZeroBefore(screenValue, nine);
    } else if (isNew = true && isAdd == true) {
        if (afterValue == '0') {
            afterValue = nine.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else {
            afterValue += nine.value;
            screen.innerText = `${screenValue} + ${afterValue}`;
        }
    } else if (isNew = true && isSub == true) {
        if (afterValue == '0') {
            afterValue = nine.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else {
            afterValue += nine.value;
            screen.innerText = `${screenValue} - ${afterValue}`;
        }
    } else if (isNew = true && isMul == true) {
        if (afterValue == '0') {
            afterValue = nine.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else {
            afterValue += nine.value;
            screen.innerText = `${screenValue} * ${afterValue}`;
        }
    } else if (isNew = true && isDiv == true) {
        if (afterValue == '0') {
            afterValue = nine.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else {
            afterValue += nine.value;
            screen.innerText = `${screenValue} / ${afterValue}`;
        }
    } else if (isNew = true && isPow == true) {
        if (afterValue == '0') {
            afterValue = nine.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else {
            afterValue += nine.value;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        }
    } else if (isNew = true && isMod == true) {
        if (afterValue == '0') {
            afterValue = nine.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        } else {
            afterValue += nine.value;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});

decimal.addEventListener('click', () => {
    if (isNew == false && isDecimalClicked === 0) {
        isDecimalClicked = 1;
        if (screenValue == '') {
            screen.innerText = `0.`
            screenValue = '0.'
        }
        else {
            screenValue += decimal.value;
            screen.innerText = screenValue;
        }
    } else if (isNew == true && isDecimalClicked === 0) {
        isDecimalClicked = 1;

        if (isNew == true && isAdd == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else if (isNew == true && isSub == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else if (isNew == true && isMul == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else if (isNew == true && isDiv == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else if (isNew == true && isPow == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else if (isNew == true && isMod == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    } else if (isNew == true && isDecimalClicked === 1) {
        if (isNew == true && isAdd == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} + ${afterValue}`;
        } else if (isNew == true && isSub == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} - ${afterValue}`;
        } else if (isNew == true && isMul == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} * ${afterValue}`;
        } else if (isNew == true && isDiv == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} / ${afterValue}`;
        } else if (isNew == true && isPow == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} ^ ${afterValue}`;
        } else if (isNew == true && isMod == true && isDecimalClicked === 1) {
            isDecimalClicked = null;
            afterValue = `${afterValue}.`;
            screen.innerText = `${screenValue} Mod ${afterValue}`;
        }
    }
});


//Operators Logic

function add(before, after) {
    result = parseFloat(before) + parseFloat(after);
    screen.innerText = `${result}`;
}

function sub(before, after) {
    result = parseFloat(before) - parseFloat(after);
    screen.innerText = `${result}`;
}

function mult(before, after) {
    result = parseFloat(before) * parseFloat(after);
    screen.innerText = `${result}`;
}

function div(before, after) {

    result = parseFloat(before) / parseFloat(after);
    screen.innerText = `${result}`;

}

function pow(before, after) {
    result = parseFloat(before) ** parseFloat(after);
    screen.innerText = `${result}`;
}

function modu(before, after) {
    result = parseFloat(before) % parseFloat(after);
    screen.innerText = `${result}`;
}

plus.addEventListener('click', () => {
    if (screenValue == '') {
        window.location.reload();
    }
    if(afterValue != ''){
        afterValue = '';
    }
    isNew = true;
    isAdd = true;
    isSub = false;
    isMul = false;
    isMod = false;
    isPow = false;
    isDiv = false;
    screen.innerText = `${screenValue} +`;
});

minus.addEventListener('click', () => {
    if (screenValue == '') {
        window.location.reload();
    }
    if(afterValue != ''){
        afterValue = '';
    }
    isNew = true;
    isSub = true;
    isAdd = false;
    isMul = false;
    isMod = false;
    isPow = false;
    isDiv = false;
    screen.innerText = `${screenValue} -`;
});

multiply.addEventListener('click', () => {
    if (screenValue == '') {
        window.location.reload();
    }
    if(afterValue != ''){
        afterValue = '';
    }
    isNew = true;
    isMul = true;
    isSub = false;
    isAdd = false;
    isMod = false;
    isPow = false;
    isDiv = false;
    screen.innerText = `${screenValue} *`;
});

divide.addEventListener('click', () => {
    if (screenValue == '') {
        window.location.reload();
    }
    if(afterValue != ''){
        afterValue = '';
    }
    isNew = true;
    isDiv = true;
    isSub = false;
    isMul = false;
    isMod = false;
    isPow = false;
    isAdd = false;
    screen.innerText = `${screenValue} /`;
});

mod.addEventListener('click', () => {
    if (screenValue == '') {
        window.location.reload();
    }
    if(afterValue != ''){
        afterValue = '';
    }
    isNew = true;
    isMod = true;
    isSub = false;
    isMul = false;
    isAdd = false;
    isPow = false;
    isDiv = false;
    screen.innerText = `${screenValue} Mod`;
});

power.addEventListener('click', () => {
    if (screenValue == '') {
        window.location.reload();
    }
    if(afterValue != ''){
        afterValue = '';
    }
    isNew = true;
    isPow = true;
    isSub = false;
    isMul = false;
    isMod = false;
    isAdd = false;
    isDiv = false;
    screen.innerText = `${screenValue} ^`;
});



//Calculate logic
calculate.addEventListener('click', () => {
    if (isAdd == true) {
        add(screenValue, afterValue);
        disabler();
    } else if (isSub == true) {
        sub(screenValue, afterValue);
        disabler();

    } else if (isMul == true) {
        mult(screenValue, afterValue);
        disabler();

    } else if (isDiv == true) {
        div(screenValue, afterValue);
        disabler();

    } else if (isPow == true) {
        pow(screenValue, afterValue);
        disabler();

    } else if (isMod == true) {
        modu(screenValue, afterValue);
        disabler();

    }
});

function disabler() {
    one.disabled = true;
    one.style.backgroundColor = "#b5bec6";
    one.style.color = "#b5bec6"
    two.disabled = true;
    two.style.backgroundColor = "#b5bec6";
    two.style.color = "#b5bec6"
    three.disabled = true;
    three.style.backgroundColor = "#b5bec6";
    three.style.color = "#b5bec6"
    four.disabled = true;
    four.style.backgroundColor = "#b5bec6";
    four.style.color = "#b5bec6"
    five.disabled = true;
    five.style.backgroundColor = "#b5bec6";
    five.style.color = "#b5bec6"
    six.disabled = true;
    six.style.backgroundColor = "#b5bec6";
    six.style.color = "#b5bec6"
    seven.disabled = true;
    seven.style.backgroundColor = "#b5bec6";
    seven.style.color = "#b5bec6"
    eight.disabled = true;
    eight.style.backgroundColor = "#b5bec6";
    eight.style.color = "#b5bec6"
    nine.disabled = true;
    nine.style.backgroundColor = "#b5bec6";
    nine.style.color = "#b5bec6"
    zero.disabled = true;
    zero.style.backgroundColor = "#b5bec6";
    zero.style.color = "#b5bec6"
    plus.disabled = true;
    plus.style.backgroundColor = "#b5bec6";
    plus.style.color = "#b5bec6"
    minus.disabled = true;
    minus.style.backgroundColor = "#b5bec6";
    minus.style.color = "#b5bec6"
    divide.disabled = true;
    divide.style.backgroundColor = "#b5bec6";
    divide.style.color = "#b5bec6"
    multiply.disabled = true;
    multiply.style.backgroundColor = "#b5bec6";
    multiply.style.color = "#b5bec6"
    power.disabled = true;
    power.style.backgroundColor = "#b5bec6";
    power.style.color = "#b5bec6"
    mod.disabled = true;
    mod.style.backgroundColor = "#b5bec6";
    mod.style.color = "#b5bec6"
    remove.disabled = true;
    remove.style.backgroundColor = "#b5bec6";
    remove.style.color = "#b5bec6"
    decimal.disabled = true;
    decimal.style.backgroundColor = "#b5bec6";
    decimal.style.color = "#b5bec6"
    calculate.disabled = true;
    calculate.style.backgroundColor = "#b5bec6";
    calculate.style.color = "#b5bec6"
}
//Reset Logic
reset.addEventListener('click', () => {
    window.location.reload();
});


//Remove Logic
remove.addEventListener('click', () => {
    if (isNew == false) {
        isDecimalClicked = 0;
        screenValue = '';
        screen.innerText = '0';
    } else if (isNew == true && isAdd == true) {
        isDecimalClicked = 1;
        afterValue = '';
        screen.innerText = `${screenValue} +`;
    } else if (isNew = true && isSub == true) {
        isDecimalClicked = 1;
        afterValue = '';
        screen.innerText = `${screenValue} -`;
    } else if (isNew = true && isMul == true) {
        isDecimalClicked = 1;
        afterValue = '';
        screen.innerText = `${screenValue} *`;
    } else if (isNew = true && isDiv == true) {
        isDecimalClicked = 1;
        afterValue = '';
        screen.innerText = `${screenValue} /`;
    } else if (isNew = true && isPow == true) {
        isDecimalClicked = 1;
        afterValue = '';
        screen.innerText = `${screenValue} ^`;
    } else if (isNew = true && isMod == true) {
        isDecimalClicked = 1;
        afterValue = '';
        screen.innerText = `${screenValue} Mod`;
    }
});
