function addToOutput(value) {
    document.querySelector('.output').innerText += value;
}

function clearOutput() {
    document.querySelector('.output').innerText = '';
}

function calculate() {
    try {
        const result = eval(document.querySelector('.output').innerText);
        document.querySelector('.output').innerText = result;
    } catch (error) {
        document.querySelector('.output').innerText = 'Error';
    }
}