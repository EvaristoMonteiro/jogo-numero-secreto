const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recogniton = new SpeechRecognition();
recogniton.start();

recogniton.addEventListener('result', onSpeak);
recogniton.addEventListener('end', () => recogniton.start())

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