/*
const input = prompt('Enter a text: ');
const el = document.querySelector('.title');

//el.innerText = input;
el.innerHTML =`<i>${input}</i>`;
*/
// добавить элемент на страницу и положить его внутрь существующего элемента
// const e = document.createElement('p');

const input = prompt('Enter a message: ');
const messageEl = document.createElement('p');

messageEl.innerText = input;
const messageBox = document.querySelector('.messages');
messageBox.append(messageEl);

setTimeout(hideMessage, 2000);
// setTimeout(removeMessage, 2000);

function hideMessage() {
    messageEl.hidden = true;
}

function removeMessage() {
    messageEl.remove();
}