function updateLineNumbers() {
    const textarea = document.getElementById('textarea');
    const lineNumbersDiv = document.querySelector('.line-numbers');

    const lines = textarea.value.split('\n');
    const lineNumbers = Array.from({ length: lines.length }, (_, index) => index + 1);

    lineNumbersDiv.innerHTML = lineNumbers.join('<br>');
}
