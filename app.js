const statusText = document.getElementById('status');
const messages = document.getElementById('message');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localhost:3000');

function setStatus(value){
    statusText.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');
    li.innerHTML = value;

    messages.append(li);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    ws.send(input.value);
    input.value = '';
});

ws.onopen = () => setStatus('Online');

ws.onclose = () => setStatus('Disconnected');

ws.onmessage = (response) => printMessage(response.data); 

