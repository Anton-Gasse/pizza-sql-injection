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

function showQuestion() {
    const question = questions[currentQuestion];
    const questionContainer = document.getElementById('question-container');
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
                <button class="next-button" onclick="nextQuestion()">Next</button>
            </div>
        `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    const resultContainer = document.getElementById('result');
    const questionContainer = document.getElementById('question-container');

    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        const correctAnswer = questions[currentQuestion].correct;

        if (answerIndex === correctAnswer) {
            score++;
            resultContainer.innerHTML = "Correct!";
            resultContainer.style.color = "green";
        } else {
            resultContainer.innerHTML = "Incorrect!";
            resultContainer.style.color = "red";
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            setTimeout(() => {
                resultContainer.innerHTML = '';
                showQuestion();
            }, 1000);
        } else {
            setTimeout(() => {
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
            }, 1000);
        }
    } else {
        resultContainer.innerHTML = "Please select an answer.";
        resultContainer.style.color = "orange";
    }
}

function redoQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result').innerHTML = '';
    showQuestion();
}
