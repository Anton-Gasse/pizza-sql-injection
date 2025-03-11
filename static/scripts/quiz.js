let currentQuestion = 0;
let score = 0;
const questions = [
    {
        number: 1,
        question: "Worum handelt es sich bei White-Hat-Hackern?",
        options: [
            "Hacker, die legal hacken, um die Sicherheit von Systemen zu verbessern",
            "Hacker, die im Auftrag von Staaten hacken",
            "Hacker, die illegal zur eigenen Bereicherung hacken",
            "Hacker, die zwar illegal, aber aus ethischen Gründen hacken"
        ],
        correct: 0
    },
    {
        number: 2,
        question: "Wie sieht die Reihenfolge eines typischen Angriffs aus?",
        options: [
            "Vulnerability -> Payload -> Exploit",
            "Payload -> Exploit -> Vulnerability",
            "Vulnerability -> Exploit -> Payload",
            "Payload -> Vulnerability -> Exploit"
        ],
        correct: 2
    },
    {
        number: 3,
        question: "Welche Methode fällt unter physische Angriffe?",
        options: [
            "Dumpster Jumping",
            "Brute Force",
            "DOS",
            "Spear-Phishing"
        ],
        correct: 0
    },
    {
        number: 4,
        question: "Worum handelt es sich bei 'Social Engineering'?",
        options: [
            "Knacken von Verschlüsselungsalgorithmen",
            "Ausnutzen Softwareschwachstellen",
            "Ausnutzen schwacher Passwörter",
            "Manipulation von Menschen, damit diese Informationen preisgeben"
        ],
        correct: 3
    },
    {
        number: 5,
        question: "Welche Sprache wird beim Cross-Site-Scripting meistens verwendet?",
        options: [
            "Java",
            "Javascript",
            "SQL",
            "Python"
        ],
        correct: 1
    },
    {
        number: 6,
        question: "Welcher der nachfolgenden Dinge ist mit einer SQL-Injection nicht möglich?",
        options: [
            "eine Datenbank löschen",
            "Datensätze verändern",
            "Cookies auslesen",
            "neue Nutzer anlegen"
        ],
        correct: 2
    },
    {
        number: 7,
        question: "Was ist Ransomware?",
        options: [
            "Schadsoftware, die Dateien verschlüsselt und für deren Freigabe ein Lösegeld verlangt wird",
            "Schadsoftware, die das Nutzerverhalten aufzeichnet",
            "Schadsoftware, die unnötige Rechenleistung beansrpucht"
        ],
        correct: 0
    },
    {
        number: 8,
        question: "Eine DDOS-Attacke ist ein Angriff auf die ...",
        options: [
            "Vertraulichkeit",
            "Integrität",
            "Verfügbarkeit"
        ],
        correct: 2
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
