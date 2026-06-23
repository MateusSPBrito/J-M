const votosDele = document.getElementById('votos-dele')
const votosDela = document.getElementById('votos-dela')
const btnDele = document.getElementById('btn-dele')
const btnDela = document.getElementById('btn-dela')

const mudaVotos = (isBtnDele) => {
    votosDele.classList.toggle('show', isBtnDele);
    votosDela.classList.toggle('show', !isBtnDele);

    btnDele.classList.toggle('btn1', isBtnDele);
    btnDela.classList.toggle('btn1', !isBtnDele);
}