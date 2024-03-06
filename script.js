function somaPrimeirosTrezeInteirosPositivos() {
  const indice = 13;
  let soma = 0;
  let k = 0;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  return soma;
}

function FibonacciNumber() {
  const indexOfNumberInSequence = Math.floor(Math.random() * 8) + 10;
  // const indexOfNumberInSequence = 8;
  let a = 0;
  let b = 1;
  for (let i = 0; i < indexOfNumberInSequence; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

function reverseString(word) {
  let invertedString = '';
  for (let i = word.length - 1; i > -1; i--) {
    invertedString += word[i];
  }
  return invertedString;
}

const questions = [
  {
    question: 'Qual a soma dos 13 primeiros números inteiros positivos?',
    answers: [
      { text: '90', correct: false },
      { text: somaPrimeirosTrezeInteirosPositivos(), correct: true },
      { text: '78', correct: false },
      { text: '105', correct: false },
    ],
  },
  {
    question: 'Qual número pertence a sequencia de Fibonacci?',
    answers: [
      { text: FibonacciNumber() - 1, correct: false },
      { text: FibonacciNumber() - 2, correct: false },
      { text: FibonacciNumber() - 3, correct: false },
      { text: FibonacciNumber(), correct: true },
    ],
  },
  {
    question: 'Qual o próximo número 1, 3, 5, 7, __?',
    answers: [
      { text: 8, correct: false },
      { text: 9, correct: true },
      { text: 11, correct: false },
      { text: 10, correct: false },
    ],
  },
  {
    question: 'Qual o próximo número 2, 4, 8, 32, 64, __?',
    answers: [
      { text: 128, correct: true },
      { text: 65, correct: false },
      { text: 112, correct: false },
      { text: 32, correct: false },
    ],
  },
  {
    question: 'Qual o próximo número 0, 1, 4, 9, 16, 25, 36, __?',
    answers: [
      { text: 56, correct: false },
      { text: 42, correct: false },
      { text: 49, correct: true },
      { text: 47, correct: false },
    ],
  },
  {
    question: 'Qual o próximo número 4, 16, 36, 64, __?',
    answers: [
      { text: 102, correct: false },
      { text: 88, correct: false },
      { text: 128, correct: false },
      { text: 100, correct: true },
    ],
  },
  {
    question: 'Qual o próximo número 1, 1, 2, 3, 5, 8, __?',
    answers: [
      { text: 17, correct: false },
      { text: 11, correct: false },
      { text: 13, correct: true },
      { text: 10, correct: false },
    ],
  },
  {
    question: 'Qual o próximo número 2, 10, 12, 16, 17, 18, 19, __?',
    answers: [
      { text: 200, correct: true },
      { text: 50, correct: false },
      { text: 100, correct: false },
      { text: 20, correct: false },
    ],
  },
  {
    question: 'Qual palavra é um palíndromo?',
    answers: [
      { text: 'repor', correct: false },
      { text: 'cívico', correct: false },
      { text: 'amada', correct: false },
      { text: 'omissíssimo', correct: true },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('answer-option');
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
    if (currentQuestionIndex == 8) {
      button.innerHTML = reverseString(button.innerHTML);
    }
  });
  nextButton.style.display = 'block';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  answerButtons.innerHTML = /*html*/ `<div class='last-question'>Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente.
  Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
  Seu objetivo é descobrir qual interruptor controla qual lâmpada.</div>
  <div class='last-answer'>Ligue um dos interruptores e espere um pouco. Desligue e ligue um segundo interruptor.
  Vá até a sala. A lâmpada desligada e quente corresponde ao primeiro interruptor, a lâmpada acesa ao segundo e a lâmpada apagada e fria ao terceiro.</div>`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
