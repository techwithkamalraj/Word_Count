let inputText = document.getElementById('txt');
let displayCount = document.getElementById('output');

inputText.addEventListener('input', showLength);

function showLength() {
    let text = inputText.value;
    let length = text.length;
    displayCount.textContent = `${length}`;
}