const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está trabalhando em uma obra quando vê um novo equipamento que usa tecnologia avançada para ajudar na construção, como uma máquina que pode levantar e posicionar materiais com alta precisão. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é incrível! Vai facilitar muito o meu trabalho.",
                afirmacao: "Você ficou empolgado com a possibilidade de usar a tecnologia para melhorar a eficiência e segurança no trabalho."
            },
            {
                texto: "Isso parece complicado e caro. Prefiro continuar com os métodos tradicionais.",
                afirmacao: "Você preferiu confiar nos métodos que já conhece e se sentir mais seguro com o que já está acostumado."
            }
        ]
    },
    {
        enunciado: "Com o avanço dessa tecnologia, o chefe da obra pede que você faça um relatório sobre como essas novas ferramentas podem impactar a construção civil. O que você faz?",
        alternativas: [
            {
                texto: "Usa um software de análise para coletar dados e gerar um relatório detalhado sobre as vantagens e desafios da nova tecnologia.",
                afirmacao: "Você conseguiu criar um relatório informativo e detalhado, mostrando como a tecnologia pode transformar o setor da construção."
            },
            {
                texto: "Escreve o relatório baseado na sua experiência e conhecimento pessoal sobre a obra e a tecnologia.",
                afirmacao: "Você optou por usar sua experiência prática para escrever o relatório, refletindo sobre o impacto real da tecnologia no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Durante uma reunião com outros profissionais da construção, a discussão gira em torno do futuro da tecnologia na construção civil. Como você contribui para a conversa?",
        alternativas: [
            {
                texto: "Defende que a tecnologia pode aumentar a produtividade e reduzir os acidentes de trabalho.",
                afirmacao: "Você acredita que a tecnologia é uma aliada na melhoria das condições de trabalho e aumento da produtividade."
            },
            {
                texto: "Exprime preocupações sobre a substituição de empregos tradicionais e a necessidade de treinamento para os trabalhadores.",
                afirmacao: "Você se preocupa com o impacto da tecnologia sobre o emprego e defende a importância de treinar os trabalhadores para novas habilidades."
            }
        ]
    },
    {
        enunciado: "No final da reunião, você é solicitado a criar um modelo 3D de um novo projeto usando um software de design. O que você faz?",
        alternativas: [
            {
                texto: "Cria o modelo usando o software de design avançado, aproveitando suas funcionalidades para um projeto mais preciso.",
                afirmacao: "Você usou a tecnologia para criar um modelo detalhado e ajudar no planejamento da obra, destacando a importância das ferramentas modernas."
            },
            {
                texto: "Desenha o modelo manualmente em papel e digitaliza para o software, mantendo o controle sobre cada detalhe.",
                afirmacao: "Você optou por desenhar o modelo manualmente para garantir que cada detalhe fosse cuidadosamente planejado antes de digitalizar."
            }
        ]
    },
    {
        enunciado: "Você tem uma grande tarefa de reforma para finalizar, mas o prazo está apertado e parte do trabalho foi feito com a ajuda de um software de planejamento. O problema é que o plano não reflete exatamente o que foi realizado. O que você faz?",
        alternativas: [
            {
                texto: "Considera que usar o software foi a melhor solução e aceita o plano como está, mesmo com algumas inconsistências.",
                afirmacao: "Você percebeu que o uso excessivo de ferramentas digitais pode ter limitações e começou a confiar mais no seu julgamento e habilidades práticas."
            },
            {
                texto: "Revê o plano, faz ajustes e integra o trabalho manual realizado com as informações do software para garantir que tudo esteja correto.",
                afirmacao: "Você ajustou o plano para refletir a realidade do trabalho e aprendeu a usar a tecnologia como uma ferramenta complementar ao seu conhecimento."
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();