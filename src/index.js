import questions from '../assets/data.js'

const quesNumber = document.getElementById('question-number');
const score = document.getElementById('score');
const question = document.getElementById('question');
const answersElement = document.getElementById('answers');
const btn = document.getElementById('btn');

let questionIndex = 0;
let quizScore = 0;
const correctAudio = new Audio('../assets/sounds/correct-sound.wav');
const wrongAudio = new Audio('../assets/sounds/wrong-sound.wav');

const startQuiz = () => {
    if (questionIndex == questions.length - 1) {
        btn.innerText = 'Complete Quiz'
    } else {
        btn.innerText = 'Next';
    }

    btn.disabled = true;

    quesNumber.innerText = questionIndex + 1;
    score.innerText = quizScore;

    question.innerText = (questions[questionIndex].question);
    questions[questionIndex].answers.forEach((answer) => {
        let answerPara = document.createElement('p');
        answerPara.classList.add('border', 'text-lg', 'border-slate-950', 'p-2', 'cursor-pointer');
        answerPara.innerText = answer.text;
        answerPara.dataset.isCorrect = answer.isCorrect;
        answersElement.appendChild(answerPara);
        answerPara.addEventListener('click', () => answerSelected(answer, answerPara))
    })
}

const answerSelected = (answer, answerPara) => {
    btn.disabled = false;
    if (answer.isCorrect) {
        correctAudio.play()
        answerPara.classList.add("bg-green-600", "text-white");
        answerPara.setAttribute("pointer-events", "none");
        quizScore += 1;
        questionIndex += 1;
        Array.from(answersElement.children).forEach(child => {
            child.style.pointerEvents = "none";
        })
    } else {
        wrongAudio.play()
        answerPara.classList.add("bg-red-600", "text-white");
        Array.from(answersElement.children).forEach(child => {
                if (child.dataset.isCorrect == "true") {
                    child.classList.add("bg-green-600", "text-white");
                }
            child.style.pointerEvents = "none";
        })
        questionIndex += 1;
    }
}

btn.addEventListener('click', () => {
    if (questionIndex < questions.length) {
        answersElement.innerHTML = '';
        startQuiz();
    } else {
        answersElement.innerHTML = '';
        completed();
    }
});


const completed = () => {
    score.innerText = quizScore;
    question.innerText = (quizScore > 5) ? `Congratulations, you've scored ${quizScore} out of 10` : `Quiz completed, your score is ${quizScore} out of 10`;
    btn.innerText = 'Reset';
    questionIndex = 0;
    quizScore = 0;
}

startQuiz();