let currentQuestion = 0;
let score = 0;
const questions = [
    {
        number: 1,
        question: "What does the term 'phishing' refer to in hacking?",
        options: [
            "Pretending to be someone else online to steal information",
            "Using malware to encrypt files",
            "Cracking passwords",
            "None of the above"
        ],
        correct: 0
    },
    {
        number: 2,
        question: "What is a DDoS attack?",
        options: [
            "Distributing malicious emails",
            "Flooding a server with traffic to make it unavailable",
            "Hacking a user's computer",
            "None of the above"
        ],
        correct: 1
    },
    {
        number: 3,
        question: "What is 'social engineering' in hacking?",
        options: [
            "Cracking encryption algorithms",
            "Exploiting a software vulnerability",
            "Manipulating people into giving away information",
            "Using brute-force methods to break into accounts"
        ],
        correct: 2
    },
    {
        number: 4,
        question: "Which of the following is a common form of malware?",
        options: [
            "Virus",
            "Rootkit",
            "Spyware",
            "All of the above"
        ],
        correct: 3
    },
    {
        number: 5,
        question: "What is the primary goal of ethical hacking?",
        options: [
            "To find and fix vulnerabilities",
            "To steal sensitive information",
            "To destroy computer systems",
            "None of the above"
        ],
        correct: 0
    }
];

/**
 * Shows current question or score.
 */
function showCurrentStep() {
    // TODO: define the elements globally to avoid definition in multiple methods
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result');

    // show question or score depending on current question
    if (currentQuestion >= questions.length) {
        showScore(questionContainer, resultContainer);
    } else {
        showQuestion(questionContainer);
    }
}

/**
 * Shows next question or score if all questions were answered.
 */
function showNextStep() {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    const resultContainer = document.getElementById('result');

    // show error when no answer is selected
    if (!selectedAnswer) {
        resultContainer.innerHTML = "Wähle bitte eine Antwort aus, um fortzufahren.";
        resultContainer.style.color = "orange";
    }

    // handle answer
    const answerIndex = parseInt(selectedAnswer.value);
    const correctAnswer = questions[currentQuestion].correct;

    if (answerIndex === correctAnswer) {
        score++;
        resultContainer.innerHTML = "Richtig!";
        resultContainer.style.color = "green";
    } else {
        resultContainer.innerHTML = "Falsch!";
        resultContainer.style.color = "red";
    }

    // show next question after short timeout to see result
    currentQuestion++;
    setTimeout(() => {
        showCurrentStep();
    }, 1000);
}

/**
 * Shows current question.
 * @param {HTMLElement | null} questionContainer 
 */
function showQuestion(questionContainer) {
    const question = questions[currentQuestion];
    questionContainer.innerHTML = `
        <div class="form-group">
            <h3>Frage ${question.number}: ${question.question}</h3>
            ${question.options.map((option, index) => `
                <div class="quiz-option">
                    <input type="radio" id="q${currentQuestion}a${index}" name="q${currentQuestion}" value="${index}">
                    <label for="q${currentQuestion}a${index}">${option}</label>
                </div>
            `).join('')}
        </div>
        <div class="button-group">
            <button class="next-button" onclick="showNextStep()">Next</button>
        </div>
    `;
}

/**
 * Shows current score.
 * @param {HTMLElement | null} questionContainer 
 * @param {HTMLElement | null} resultContainer 
 */
function showScore(questionContainer, resultContainer) {
    resultContainer.innerHTML = '';
    questionContainer.innerHTML = `
        <div class="form-group">
            <h3>Quiz abgeschlossen</h3>
            <p>Du hast ${score} von ${questions.length} Fragen richtig beantwortet.</p>
        </div>
        <div class="button-group">
            <button class="redo-button" onclick="redoQuiz()">Quiz wiederholen</button>
        </div>
    `;
}

/**
 * Resets the score and restarts the quiz.
 */
function redoQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result').innerHTML = '';
    showCurrentStep();
}
