const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.start();

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start())

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValorChuteValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:<div>
        <span class="box">${chute}</span>
    `;
}