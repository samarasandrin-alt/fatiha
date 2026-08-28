const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você percebe que existe uma grande quantidade de lixo espalhada pelas ruas. Você pensa em como a tecnologia poderia ajudar nessa situação. O que você faria?",
        alternativas: [
            {
                texto: "Criaria sensores inteligentes para identificar locais com muito lixo e ajudar na coleta.",
                afirmacao: "Você acredita que a tecnologia pode ajudar a tornar as cidades mais limpas e organizadas."
            },
            {
                texto: "Participaria de um mutirão de limpeza e incentivaria outras pessoas a cuidar do meio ambiente.",
                afirmacao: "Você acredita que as atitudes das pessoas são fundamentais para preservar o meio ambiente."
            }
        ]
    },

    {
        enunciado: "Sua escola decidiu criar um projeto para economizar energia. Qual tecnologia você escolheria para ajudar?",
        alternativas: [
            {
                texto: "Instalaria sensores que desligam as luzes automaticamente quando ninguém está na sala.",
                afirmacao: "Você acredita que tecnologias inteligentes podem reduzir o desperdício de energia."
            },
            {
                texto: "Usaria painéis solares para produzir energia limpa para a escola.",
                afirmacao: "Você acredita que fontes de energia renovável são importantes para um futuro mais sustentável."
            }
        ]
    },

    {
        enunciado: "Durante uma pesquisa, você descobre que alguns aparelhos eletrônicos são descartados de maneira incorreta e podem causar impactos ambientais. O que você faria com um celular antigo?",
        alternativas: [
            {
                texto: "Levaria o celular para um ponto de coleta de lixo eletrônico.",
                afirmacao: "Você entende que o descarte correto dos eletrônicos ajuda a diminuir os danos ao meio ambiente."
            },
            {
                texto: "Guardaria o celular em casa, mesmo sem utilizá-lo, para evitar jogá-lo no lixo comum.",
                afirmacao: "Você se preocupa com o descarte dos eletrônicos e procura evitar que eles sejam jogados no lixo comum."
            }
        ]
    },

    {
        enunciado: "Uma empresa criou uma inteligência artificial capaz de analisar imagens de florestas e identificar áreas que estão sendo desmatadas. Como você acha que essa tecnologia deveria ser utilizada?",
        alternativas: [
            {
                texto: "Para monitorar as florestas e identificar rapidamente áreas de desmatamento.",
                afirmacao: "Você acredita que a inteligência artificial pode ser uma importante aliada na proteção das florestas."
            },
            {
                texto: "Com cuidado, pois a tecnologia deve ser utilizada junto com profissionais que conheçam o meio ambiente.",
                afirmacao: "Você acredita que a tecnologia pode ajudar, mas que as decisões devem contar com a participação de especialistas."
            }
        ]
    },

    {
        enunciado: "Imagine que estamos em 2049. As cidades estão cada vez mais tecnológicas, mas também precisam ser sustentáveis. Qual futuro você gostaria de ajudar a construir?",
        alternativas: [
            {
                texto: "Uma cidade com carros elétricos, energia renovável, prédios inteligentes e muitas áreas verdes.",
                afirmacao: "Você imagina um futuro em que a tecnologia e a preservação ambiental caminham juntas."
            },
            {
                texto: "Uma cidade onde as pessoas utilizam menos recursos, consomem de forma consciente e cuidam mais da natureza.",
                afirmacao: "Você acredita que um futuro sustentável depende tanto da tecnologia quanto das escolhas e atitudes das pessoas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
