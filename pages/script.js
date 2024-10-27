/* document.addEventListener('DOMContentLoaded', function () {
    displayQuestion();
    document.getElementById('next-btn').addEventListener('click', nextQuestion);

});


let currentQuestionIndex = 0;
let score = 0;




const quizQuestions = [
    {
        question: "1. What should be included in an emergency preparedness kit?",
        choices: [
            "A) Food, water, flashlight, first-aid kit, medications",
            "B) Seasonal clothing, family photo album, cooking ingredients, candles",
            "C) Wallet, passport, travel guide, spare car keys",
            "D) Textbooks, sporting equipment, hair products, decorative items"
        ],
        correct: 1
    },
    {
        question: "2. What steps can you take to disaster-proof your home, such as securing heavy objects or reinforcing windows?",
        choices: [
            "A) Move furniture regularly to new spots, unplug electronics when not in use",
            "B) Secure heavy items, reinforce windows and doors, install smoke alarms",
            "C) Paint walls, add decorative items, replace light fixtures often",
            "D) Keep closets and drawers closed, turn off the lights when leaving"
        ],
        correct: 2
    },
    {
        question: "3. What is the minimum amount of water recommended per person in an emergency preparedness kit?",
        choices: [
            "A) 1.5 gallons per day for two days",
            "B) 1 litre per day for five days",
            "C) 2 gallons per week",
            "D) 1 gallon per day for at least three days"
        ],
        correct: 4
    },
    {
        question: "4. How can you prepare pets and animals for emergency situations?",
        choices: [
            "A) Have a pet emergency kit, identify safe pet-friendly locations, keep pets’ ID tags updated",
            "B) Train pets to follow commands, feed them before evacuating, prepare a backup food supply",
            "C) Leave pets with neighbours, provide extra food and water, remove their ID tags",
            "D) Place pets in their usual spaces, ensure they have access to windows, avoid cages"
        ],
        correct: 1
    },
    {
        question: "5. What types of emergency contacts should you maintain, and why is it crucial to include local utilities in your communication list during a disaster?",
        choices: [
            "A) Only family members; utility contacts are unnecessary in emergencies",
            "B) Local, out-of-town, and utility contacts; utility contacts help report outages, ensuring safe living conditions post-disaster",
            "C) Only out-of-town contacts; utilities are not relevant to personal safety",
            "D) Just friends and neighbours; utilities provide no immediate support"
        ],
        correct: 2
    },
    {
        question: "6. How often should you review and update your emergency supplies, and what specific seasonal considerations should you account for to ensure adequacy?",
        choices: [
            "A) Every year; seasonal considerations include temperature changes and potential natural disasters",
            "B) Only when an emergency occurs; seasonal adjustments are unnecessary",
            "C) Every six months; consider food expiration dates and weather-related needs",
            "D) Every three months; update supplies based on current events in your community"
        ],
        correct: 3
    },
    {
        question: "7. What are the recommended steps for safely evacuating your home?",
        choices: [
            "A) Bring large furniture, leave appliances plugged in, exit casually",
            "B) Lock valuables, turn off electronics, call neighbours, leave immediately",
            "C) Wait for official instructions, ignore pets, exit through the main door only",
            "D) Gather essentials, close all doors, follow evacuation routes, check on family members"
        ],
        correct: 4
    },
    {
        question: "8. What should be the focus of public education campaigns regarding natural disaster preparedness?",
        choices: [
            "A) To promote emergency supplies only",
            "B) To educate communities on risk assessment, personal preparedness, and recovery strategies",
            "C) To emphasise social media sharing during disasters",
            "D) To discourage participation in local preparedness activities"
        ],
        correct: 2
    },
    {
        question: "9. What is the first thing you should do when you hear a tornado warning?",
        choices: [
            "A) Go outside to watch the tornado",
            "B) Call friends and family",
            "C) Seek shelter in a sturdy building or basement",
            "D) Continue with your daily activities"
        ],
        correct: 3
    },
    {
        question: "10. What is the primary purpose of having a family emergency plan?",
        choices: [
            "A) To have a fun family activity",
            "B) To ensure that family members know where to go and what to do during an emergency",
            "C) To plan for family vacations",
            "D) To determine who gets the remote control during a power outage"
        ],
        correct: 2
    }

];

function displayQuestion() {
    const questionElement = document.getElementById('questions');
    const choicesElement = document.getElementById('choices');
    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    questionElement.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.classList.add('choice-btn');
        button.onclick = () => checkanswer(index);
        choicesElement.appendChild(button);
    });

}


function checkanswer(selectedIndex) {

    const feedbackElement = document.getElementById('feedback');
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedIndex == currentQuestion.correct) {
        score++;
        feedbackElement.innerText = "correct";
    }
    else {
        feedbackElement.innerText = "incorrect, the answer is " + currentQuestion.correct;
    }

    document.getElementById('score').innerText = `score: ${score} `;
    document.getElementById('next-btn').style.display = 'block';


}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
        document.getElementById('feedback').innerText = '';
        document.getElementById('next-btn').style.display = 'none';
    }
    else {
        showResult();
    }

}

function showResult() {
    document.getElementById('score').innerText = `${score}`;
    document.getElementById('next-btn').onclick = () => {
        score = 0;
        currentQuestionIndex = 0;
        displayQuestion();
        document.getElementById('next-btn').innerText = "Next Question";
    };
}
*/

document.addEventListener('DOMContentLoaded', function () {
    displayQuestion();
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
});

const quizQuestions = [
    {
        question: "1. What should be included in an emergency preparedness kit?",
        choices: [
            "A) Food, water, flashlight, first-aid kit, medications",
            "B) Seasonal clothing, family photo album, cooking ingredients, candles",
            "C) Wallet, passport, travel guide, spare car keys",
            "D) Textbooks, sporting equipment, hair products, decorative items"
        ],
        correct: 0
    },
    {
        question: "2. What steps can you take to disaster-proof your home, such as securing heavy objects or reinforcing windows?",
        choices: [
            "A) Move furniture regularly to new spots, unplug electronics when not in use",
            "B) Secure heavy items, reinforce windows and doors, install smoke alarms",
            "C) Paint walls, add decorative items, replace light fixtures often",
            "D) Keep closets and drawers closed, turn off the lights when leaving"
        ],
        correct: 1
    },
    {
        question: "3. What is the minimum amount of water recommended per person in an emergency preparedness kit?",
        choices: [
            "A) 1.5 gallons per day for two days",
            "B) 1 litre per day for five days",
            "C) 2 gallons per week",
            "D) 1 gallon per day for at least three days"
        ],
        correct: 3
    },
    {
        question: "4. How can you prepare pets and animals for emergency situations?",
        choices: [
            "A) Have a pet emergency kit, identify safe pet-friendly locations, keep pets’ ID tags updated",
            "B) Train pets to follow commands, feed them before evacuating, prepare a backup food supply",
            "C) Leave pets with neighbours, provide extra food and water, remove their ID tags",
            "D) Place pets in their usual spaces, ensure they have access to windows, avoid cages"
        ],
        correct: 0
    },
    {
        question: "5. What types of emergency contacts should you maintain, and why is it crucial to include local utilities in your communication list during a disaster?",
        choices: [
            "A) Only family members; utility contacts are unnecessary in emergencies",
            "B) Local, out-of-town, and utility contacts; utility contacts help report outages, ensuring safe living conditions post-disaster",
            "C) Only out-of-town contacts; utilities are not relevant to personal safety",
            "D) Just friends and neighbours; utilities provide no immediate support"
        ],
        correct: 1
    },
    {
        question: "6. How often should you review and update your emergency supplies, and what specific seasonal considerations should you account for to ensure adequacy?",
        choices: [
            "A) Every year; seasonal considerations include temperature changes and potential natural disasters",
            "B) Only when an emergency occurs; seasonal adjustments are unnecessary",
            "C) Every six months; consider food expiration dates and weather-related needs",
            "D) Every three months; update supplies based on current events in your community"
        ],
        correct: 2
    },
    {
        question: "7. What are the recommended steps for safely evacuating your home?",
        choices: [
            "A) Bring large furniture, leave appliances plugged in, exit casually",
            "B) Lock valuables, turn off electronics, call neighbours, leave immediately",
            "C) Wait for official instructions, ignore pets, exit through the main door only",
            "D) Gather essentials, close all doors, follow evacuation routes, check on family members"
        ],
        correct: 3
    },
    {
        question: "8. What should be the focus of public education campaigns regarding natural disaster preparedness?",
        choices: [
            "A) To promote emergency supplies only",
            "B) To educate communities on risk assessment, personal preparedness, and recovery strategies",
            "C) To emphasise social media sharing during disasters",
            "D) To discourage participation in local preparedness activities"
        ],
        correct: 1
    },
    {
        question: "9. What is the first thing you should do when you hear a tornado warning?",
        choices: [
            "A) Go outside to watch the tornado",
            "B) Call friends and family",
            "C) Seek shelter in a sturdy building or basement",
            "D) Continue with your daily activities"
        ],
        correct: 2
    },
    {
        question: "10. What is the primary purpose of having a family emergency plan?",
        choices: [
            "A) To have a fun family activity",
            "B) To ensure that family members know where to go and what to do during an emergency",
            "C) To plan for family vacations",
            "D) To determine who gets the remote control during a power outage"
        ],
        correct: 1
    }

    // Include your quiz questions here as you previously defined them
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('questions');
    const choicesElement = document.getElementById('choices');
    questionElement.innerText = quizQuestions[currentQuestionIndex].question;
    choicesElement.innerHTML = '';

    quizQuestions[currentQuestionIndex].choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        // button.classList.add('choice-btn');
        button.onclick = function () { checkAnswer(index); };
        choicesElement.appendChild(button);
    });
    document.getElementById('next-btn').style.display = 'none'; // Hide next button initially
}

function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById('feedback');
    if (selectedIndex === quizQuestions[currentQuestionIndex].correct) {
        score++;
        feedbackElement.innerText = "Correct!";
    } else {
        feedbackElement.innerText = "Incorrect. The correct answer is: " + quizQuestions[currentQuestionIndex].choices[quizQuestions[currentQuestionIndex].correct];
    }
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        document.getElementById('feedback').innerText = ''; // Clear feedback
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Final Score: ${score}`;
    document.getElementById('next-btn').innerText = "Restart Quiz";
    document.getElementById('next-btn').onclick = function () {
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
        document.getElementById('next-btn').innerText = "Next Question";
        document.getElementById('feedback').innerText = '';
    };
}




