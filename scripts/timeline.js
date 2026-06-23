const anosJuntos = document.getElementById('anos-juntos')

function calcularAnosJuntos() {
    const dataInicio = new Date('2019-06-10');
    const dataHoje = new Date();

    let anos = dataHoje.getFullYear() - dataInicio.getFullYear();

    const mesAtual = dataHoje.getMonth();
    const mesInicio = dataInicio.getMonth();

    if (mesAtual < mesInicio || (mesAtual === mesInicio && dataHoje.getDate() < dataInicio.getDate())) {
        anos--;
    }
    anosJuntos.textContent = anos;
}

window.addEventListener('DOMContentLoaded', calcularAnosJuntos);

const timeline = document.getElementById('timeline-container');

const abrirTimeline = () => {
    timeline.classList.add('show');
    const page1 = document.getElementById('page1');
    page1.classList.add('show');
    document.body.classList.add('no-scroll'); // trava o scroll de trás

    // Cria um estado no histórico para o botão voltar "esbarrar" nele
    // O terceiro parâmetro adiciona uma hash '#timeline' na URL de forma sutil
    history.pushState({ info: 'timeline-aberta' }, '', '#timeline-show');
};

const fecharTimeline = () => {
    timeline.classList.remove('show');
    document.body.classList.remove('no-scroll');
};

// Ouvinte do evento popstate -> voltar
window.addEventListener('popstate', (event) => {
    if (window.location.hash !== '#timeline-show') fecharTimeline()
});


// logica dos slides da retrospectiva
let slideAtualIndex = 1

const avancaTimeline = () => {
    const slideAntigo = document.getElementById(`page${slideAtualIndex}`);
    slideAntigo.classList.remove('show')

    if (slideAtualIndex === 14) {
        fecharTimeline()
        slideAtualIndex = 1
        return
    }

    slideAtualIndex++
    const slideNovo = document.getElementById(`page${slideAtualIndex}`);
    slideNovo.classList.add('show')
}

const recuaTimeline = () => {
    if (slideAtualIndex === 1) return

    const slideAntigo = document.getElementById(`page${slideAtualIndex}`);
    slideAntigo.classList.remove('show')

    slideAtualIndex--
    const slideNovo = document.getElementById(`page${slideAtualIndex}`);
    slideNovo.classList.add('show')
}