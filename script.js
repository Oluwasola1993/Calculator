let result = document.getElementById('input');
let calculator = document.getElementById('calculator');
let isOn = false;

function show(val) {
    if (isOn) {
        result.value += val;
        console.log(result.value);
    }
}

function clearInput() {
    if (isOn) {
        result.value = '';
    }
}

function calculate() {
    if (isOn) {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = 'Error';
        }
    }
}

function deleteLast() {
    if (isOn) {
        let currentInput = result.value;
        result.value = currentInput.slice(0, -1);
    }
}

function centAge() {
    if (isOn) {
        let cal = parseFloat(result.value);
        let answer = cal / 100;
        result.value = answer;
        console.log(answer);
    }
}

function powerOn() {
    isOn = true;
    result.value = '';
    calculator.classList.remove('off');
    document.getElementById('onBtn').style.display = 'none';
    document.getElementById('offBtn').style.display = 'block';
}

function powerOff() {
    isOn = false;
    result.value = '';
    calculator.classList.add('off');
    document.getElementById('onBtn').style.display = 'block';
    document.getElementById('offBtn').style.display = 'none';
}
