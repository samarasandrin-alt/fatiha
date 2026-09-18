const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você precisa entregar um trabalho escolar importante e descobre uma nova ferramenta de Inteligência Artificial que gera textos prontos. Como você decide usá-la?",
        alternativas: [
            {
                texto: "Utilizo a IA para pesquisar o tema e organizar ideias, mas escrevo o texto final com minhas próprias palavras.",
                afirmacao: "Você enxerga a tecnologia como uma ferramenta de apoio para aprimorar seu próprio aprendizado."
            },
            {
                texto: "Peço para a IA gerar o texto completo e entrego a resposta para otimizar meu tempo.",
                afirmacao: "Você prefere priorizar a praticidade e a automação de tarefas no seu dia a dia."
            }
        ]
    },

    {
        enunciado: "Sua escola abre inscrições para uma feira de tecnologia do futuro. Qual projeto você gostaria de desenvolver com seus colegas?",
        alternativas: [
            {
                texto: "Um tutor virtual interativo que ajuda alunos com dificuldades no aprendizado de forma personalizada.",
                afirmacao: "Você valoriza soluções educacionais que tornam o conhecimento acessível para diferentes pessoas."
            },
            {
                texto: "Um aplicativo com jogos interativos que torna as aulas mais divertidas e engajadoras.",
                afirmacao: "Você acredita que a gamificação e o entretenimento são essenciais para transformar a educação."
            }
        ]
    },

    {
        enunciado: "Em uma conversa sobre o futuro do trabalho, um colega afirma que robôs e IAs vão substituir todas as profissões humanas. Qual é a sua opinião?",
        alternativas: [
            {
                texto: "Novas tecnologias vão automatizar tarefas, mas profissões que exigem criatividade, empatia e ética continuarão humanas.",
                afirmacao: "Você enxerga o futuro como uma colaboração entre humanos e máquinas, destacando nossas habilidades únicas."
            },
            {
                texto: "Muitas profissões tradicionais vão desaparecer, por isso devemos nos focar desde já em aprender programação e dados.",
                afirmacao: "Você foca na adaptação técnica rápida para se destacar em um mercado dominado pela tecnologia."
            }
        ]
    },

    {
        enunciado: "Você descobre que imagens e vozes produzidas por IA estão sendo usadas para espalhar informações falsas na internet. O que você faz?",
        alternativas: [
            {
                texto: "Busco sempre checar as fontes das notícias antes de compartilhar qualquer conteúdo suspeito.",
                afirmacao: "Você demonstra responsabilidade digital e senso crítico diante do impacto da desinformação."
            },
            {
                texto: "Incentivo a criação de leis e ferramentas capazes de identificar e punir o uso indevido de IA.",
                afirmacao: "Você defende a regulamentação ética para garantir a segurança no uso de novas tecnologias."
            }
        ]
    },

    {
        enunciado: "Ao pensar na sua futura carreira profissional, qual caminho você prefere seguir?",
        alternativas: [
            {
                texto: "Trabalhar criando e aprimorando tecnologias inovadoras para resolver problemas da sociedade.",
                afirmacao: "Você busca liderar a transformação tecnológica e construir as ferramentas do amanhã."
            },
            {
                texto: "Utilizar as tecnologias existentes para potencializar meu trabalho em áreas humanas, artísticas ou sociais.",
                afirmacao: "Você utiliza a inovação digital como um meio para ampliar o alcance do seu impacto humano."
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
    caixaPerguntas.textContent = "Seu perfil em relação ao futuro:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
