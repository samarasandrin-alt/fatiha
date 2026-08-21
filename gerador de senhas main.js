// Seleção dos elementos do DOM
const campoSenha = document.querySelector('#campo-senha');
const barraForca = document.querySelector('.forte');
const botoesTamanho = document.querySelectorAll('.parametro-senha__botao');
const textoTamanho = document.querySelector('.parametro-senha__texto');

// Checkboxes de opções
const chkMaiusculo = document.querySelector('#chk-maiusculo');
const chkMinusculo = document.querySelector('#chk-minusculo');
const chkNumero = document.querySelector('#chk-numero');
const chkSimbolo = document.querySelector('#chk-simbolo');
const todasCheckboxes = document.querySelectorAll('.checkbox');

// Dicionário de caracteres
const caracteres = {
    maiusculo: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    minusculo: 'abcdefghijklmnopqrstuvwxyz',
    numero: '0123456789',
    simbolo: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

// 1. Função para gerar a senha aleatória
function gerarSenha() {
    let alfabeto = '';
    let senhaGerada = '';
    const tamanho = parseInt(textoTamanho.textContent);

    if (chkMaiusculo.checked) alfabeto += caracteres.maiusculo;
    if (chkMinusculo.checked) alfabeto += caracteres.minusculo;
    if (chkNumero.checked) alfabeto += caracteres.numero;
    if (chkSimbolo.checked) alfabeto += caracteres.simbolo;

    if (alfabeto.length === 0) {
        campoSenha.value = '';
        avaliarForcaSenha('');
        return;
    }

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
        senhaGerada += alfabeto[indiceAleatorio];
    }

    campoSenha.value = senhaGerada;
    avaliarForcaSenha(senhaGerada);
}

// 2. Função para avaliar a força da senha (gerada ou digitada)
function avaliarForcaSenha(senha) {
    let pontuacao = 0;

    if (senha.length === 0) {
        atualizarBarra(0, 'transparent');
        return;
    }

    if (senha.length >= 8) pontuacao += 20;
    if (senha.length >= 12) pontuacao += 15;
    if (/[a-z]/.test(senha)) pontuacao += 15;
    if (/[A-Z]/.test(senha)) pontuacao += 20;
    if (/[0-9]/.test(senha)) pontuacao += 15;
    if (/[^A-Za-z0-9]/.test(senha)) pontuacao += 15;

    if (pontuacao < 40) {
        atualizarBarra(33, '#ff3c00'); // Fraca
    } else if (pontuacao < 70) {
        atualizarBarra(66, '#ffc800'); // Média
    } else {
        atualizarBarra(100, '#00ff88'); // Forte
    }
}

// 3. Função auxiliar para alterar o visual da barra
function atualizarBarra(larguraPorcentagem, cor) {
    barraForca.style.width = `${larguraPorcentagem}%`;
    barraForca.style.backgroundColor = cor;
}

// 4. Eventos dos botões + e -
let tamanhoAtual = parseInt(textoTamanho.textContent);

botoesTamanho.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.textContent === '+' && tamanhoAtual < 30) {
            tamanhoAtual++;
        } else if (botao.textContent === '-' && tamanhoAtual > 4) {
            tamanhoAtual--;
        }
        textoTamanho.textContent = tamanhoAtual;
        gerarSenha();
    });
});

// 5. Eventos para gerar nova senha ao alterar checkboxes
todasCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', gerarSenha);
});

// 6. Avaliar a força da senha quando você digita manualmente
campoSenha.addEventListener('input', () => {
    avaliarForcaSenha(campoSenha.value);
});

// Gera uma senha inicial ao carregar a página
gerarSenha();
