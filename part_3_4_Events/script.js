function buttonClick() {
    console.log('Click!');
    const text = getInputText();
    addElementToList(text);
    console.log(text);
    clearInput();
    console.log('Clear!');
}

function getInputText() {
    const input = document.querySelector('.text-field');
    return input.value;
}

function addElementToList(text) {
    const listItem = document.createElement('li');
    listItem.innerText = text;

    const list = document.querySelector('.list');
    list.append(listItem);
}

function clearInput() {
    const input = document.querySelector('.text-field');
    input.value = '';
}