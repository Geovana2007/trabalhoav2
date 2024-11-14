const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const iniciarBtn = document.querySelector(".iniciar-btn");
const novamenteBtn = document.querySelector(".novamente-btn");

const perguntas = [
    {
        question: "Quem é o autor de 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar"],
        answer: 0
    },
    {
        question: "Qual obra é conhecida como o 'manifesto do romantismo' no Brasil?",
        options: ["Iracema", "A Moreninha"],
        answer: 1
    },
    {
        question: "Quem escreveu 'O Guarani'?",
        options: ["Aluísio Azevedo", "José de Alencar"],
        answer: 1
    },
    {
        question: "Qual é o nome da protagonista de 'A Moreninha'?",
        options: ["Carolina", "Eugênia"],
        answer: 0
    },
    {
        question: "Quem é considerado o 'pai do modernismo' brasileiro?",
        options: ["Manuel Bandeira", "Mário de Andrade"],
        answer: 1
    },
    {
        question: "Qual obra de Jorge Amado retrata a vida de trabalhadores nas plantações de cacau?",
        options: ["Capitães da Areia", "Gabriela, Cravo e Canela"],
        answer: 1
    },
    {
        question: "Quem escreveu 'Memórias Póstumas de Brás Cubas'?",
        options: ["Eça de Queirós", "Machado de Assis"],
        answer: 1
    },
    {
        question: "Qual dos seguintes autores é conhecido por seus poemas de amor e a temática social?",
        options: ["Carlos Drummond de Andrade", "Augusto dos Anjos"],
        answer: 0
    }
];

let atual = 0;
let pontos = 0;

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.question;
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    perguntaAtual.options.forEach((alternativa, index) => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(index));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(resposta) {
    const perguntaAtual = perguntas[atual];
    if (resposta === perguntaAtual.answer) {
        pontos++;
    }

    atual++;
    if (atual < perguntas.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quiz Finalizado!";
    caixaAlternativas.innerHTML = '';  // Limpa as alternativas
    textoResultado.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
    caixaResultado.style.display = 'block';  // Exibe a caixa de resultado
    caixaPerguntas.style.display = 'none';  // Oculta a caixa de perguntas
    caixaAlternativas.style.display = 'none';  // Oculta a caixa de alternativas
}

function reiniciarQuiz() {
    atual = 0;
    pontos = 0;
    textoResultado.textContent = '';
    caixaResultado.style.display = 'none';  // Esconde o resultado
    caixaPerguntas.style.display = 'block';  // Exibe a caixa de perguntas
    caixaAlternativas.style.display = 'block';  // Exibe as alternativas
    mostraPergunta();  // Reinicia as perguntas
}

iniciarBtn.addEventListener("click", () => {
    document.querySelector(".tela-inicial").style.display = 'none';  // Esconde o botão de iniciar
    mostraPergunta();  // Inicia o quiz
});

novamenteBtn.addEventListener("click", reiniciarQuiz);
