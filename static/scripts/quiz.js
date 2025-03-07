let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "1. What does the term 'phishing' refer to in hacking?",
        options: [
            "Pretending to be someone else online to steal information",
            "Using malware to encrypt files",
            "Cracking passwords",
            "None of the above"
        ],
        correct: 0
    },
    {
        question: "2. What is a DDoS attack?",
        options: [
            "Distributing malicious emails",
            "Flooding a server with traffic to make it unavailable",
            "Hacking a user's computer",
            "None of the above"
        ],
        correct: 1
    },
    {
        question: "3. What is 'social engineering' in hacking?",
        options: [
            "Cracking encryption algorithms",
            "Exploiting a software vulnerability",
            "Manipulating people into giving away information",
            "Using brute-force methods to break into accounts"
        ],
        correct: 2
    },
    {
        question: "4. Which of the following is a common form of malware?",
        options: [
            "Virus",
            "Rootkit",
            "Spyware",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "5. What is the primary goal of ethical hacking?",
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
                <label>${question.question}</label>
                ${question.options.map((option, index) => `
                    <div>
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
                resultContainer.innerHTML = `Quiz Completed! Your score is ${score} out of ${questions.length}.`;
                resultContainer.style.color = "blue";
                showRedoButton();
            }, 1000);
        }
    } else {
        resultContainer.innerHTML = "Please select an answer.";
        resultContainer.style.color = "orange";
    }
}

function showRedoButton() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
            <div class="button-group">
                <button class="redo-button" onclick="redoQuiz()">Redo Quiz</button>
            </div>
        `;
}

function redoQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result').innerHTML = '';
    showQuestion();
}
