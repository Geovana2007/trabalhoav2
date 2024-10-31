const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")
const perguntas = 
 questions = [
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
  let perguntaAtual;
  let historiaFinal = "";
  
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      elementoOpcoes.addEventListener("click", () => respostaSelecionada(opcao));
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
  function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();