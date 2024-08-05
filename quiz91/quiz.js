// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "As she approached the dark alley, her heart __________, sensing the danger that might lurk within.",
    chinese_question: "当她接近那条黑暗的小巷时，她的心 __________ ，感觉到里面可能潜伏的危险。",
    answers: [
        { option: "A", answer: "leaped", chinese_answer: "跳跃", chinese_romanization: "tiàoyuè" },
        { option: "B", answer: "misgave", chinese_answer: "不安", chinese_romanization: "bù'ān" },
        { option: "C", answer: "rejoiced", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "D", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'misgave' means to have a sense of foreboding or doubt." +
        "<br><br>" +
        "(A) 'leaped' means to jump or move suddenly." +
        "<br><br>" +
        "(C) 'rejoiced' means to feel or show great joy." +
        "<br><br>" +
        "(D) 'calmed' means to become tranquil and quiet.",
    chinese_explanation: "(B) '不安' 意味着有一种预感或怀疑。" +
        "<br><br>" +
        "(A) '跳跃' 意味着突然跳动或移动。" +
        "<br><br>" +
        "(C) '高兴' 意味着感到或表现出极大的喜悦。" +
        "<br><br>" +
        "(D) '平静' 意味着变得安静和平和。"
    },
    {
        id: 2,
    question: "The edges of the old fabric started to __________ after years of use.",
    chinese_question: "这块旧布的边缘在多年的使用后开始 __________ 。",
    answers: [
        { option: "A", answer: "fray", chinese_answer: "磨损", chinese_romanization: "mósǔn" },
        { option: "B", answer: "mend", chinese_answer: "修补", chinese_romanization: "xiūbǔ" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fray' means to unravel or become worn at the edges." +
        "<br><br>" +
        "(B) 'mend' means to repair something that is broken or damaged." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'protect' means to keep safe from harm or injury.",
    chinese_explanation: "(A) '磨损' 意味着边缘开始松散或磨损。" +
        "<br><br>" +
        "(B) '修补' 意味着修理破损或损坏的东西。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '保护' 意味着保持安全免受伤害或损害。"
    },
    {
        id: 3,
    question: "The committee voted to __________ the member who had repeatedly violated the organization's rules.",
    chinese_question: "委员会投票决定 __________ 那位多次违反组织规定的成员。",
    answers: [
        { option: "A", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
        { option: "B", answer: "oust", chinese_answer: "开除", chinese_romanization: "kāichú" },
        { option: "C", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'oust' means to remove from a position or place." +
        "<br><br>" +
        "(A) 'retain' means to keep or hold." +
        "<br><br>" +
        "(C) 'praise' means to express approval." +
        "<br><br>" +
        "(D) 'reward' means to give a reward.",
    chinese_explanation: "(B) '开除' 一词意味着从职位或地方上移除。" +
        "<br><br>" +
        "(A) '保留' 意味着保持或持有。" +
        "<br><br>" +
        "(C) '赞扬' 意味着表示赞同。" +
        "<br><br>" +
        "(D) '奖励' 意味着给予奖励。"
    },
    {
        id: 4,
    question: "She decided to __________ at the café for a while before heading to her next appointment.",
    chinese_question: "她决定在咖啡馆 __________ 一会儿，然后再去下一个约会。",
    answers: [
        { option: "A", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
        { option: "B", answer: "tarry", chinese_answer: "逗留", chinese_romanization: "dòuliú" },
        { option: "C", answer: "skip", chinese_answer: "跳过", chinese_romanization: "tiàoguò" },
        { option: "D", answer: "dash", chinese_answer: "冲", chinese_romanization: "chōng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tarry' means to delay or linger." +
        "<br><br>" +
        "(A) 'rush' means to move quickly." +
        "<br><br>" +
        "(C) 'skip' means to move lightly and quickly." +
        "<br><br>" +
        "(D) 'dash' means to move quickly and suddenly.",
    chinese_explanation: "(B) '逗留' 一词意味着延迟或停留。" +
        "<br><br>" +
        "(A) '匆忙' 意味着快速移动。" +
        "<br><br>" +
        "(C) '跳过' 意味着轻快地移动。" +
        "<br><br>" +
        "(D) '冲' 意味着快速和突然地移动。"
    },
    {
        id: 5,
    question: "During the campaign, the politician made several attempts to __________ support from influential community leaders.",
    chinese_question: "在竞选期间，这位政治家多次尝试 __________ 有影响力的社区领袖的支持。",
    answers: [
        { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "B", answer: "solicit", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'solicit' means to ask for or try to obtain something from someone." +
        "<br><br>" +
        "(A) 'conceal' means to keep from being seen; hide." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'undermine' means to weaken or damage something.",
    chinese_explanation: "(B) '请求' 意味着向某人请求或试图从某人那里获得某物。" +
        "<br><br>" +
        "(A) '隐藏' 意味着防止被看到；隐藏。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '破坏' 意味着削弱或损害某物。"
    },
    {
        id: 6,
    question: "The suspect claimed that the police had tried to __________ him into confessing.",
    chinese_question: "嫌疑人声称警察试图 __________ 他认罪。",
    answers: [
        { option: "A", answer: "coerce", chinese_answer: "强迫", chinese_romanization: "qiángpò" },
        { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'coerce' means to persuade an unwilling person to do something by using force or threats." +
        "<br><br>" + 
        "(B) 'praise' means to express warm approval or admiration." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'assist' means to help or support.",
    chinese_explanation: "(A) '强迫' 意味着通过使用武力或威胁说服一个不愿意的人做某事。" +
        "<br><br>" + 
        "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '帮助' 意味着帮助或支持。"
    },
    {
        id: 7,
    question: "Despite numerous obstacles, she managed to __________ all challenges and achieve her goals.",
    chinese_question: "尽管有许多障碍，她还是设法 __________ 所有挑战并实现了她的目标。",
    answers: [
        { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "B", answer: "surmount", chinese_answer: "克服", chinese_romanization: "kèfú" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'surmount' means to overcome a difficulty or obstacle." +
        "<br><br>" +
        "(A) 'avoid' means to keep away from." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'enhance' means to intensify or increase in quality, value, or extent.",
    chinese_explanation: "(B) '克服' 意味着克服困难或障碍。" +
        "<br><br>" +
        "(A) '避免' 意味着避开。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '提高' 意味着加强或增加质量、价值或程度。"
    },
    {
        id: 8,
        question: "Constant stress can __________ your health, leading to various physical and mental issues.",
        chinese_question: "持续的压力会 __________ 你的健康，导致各种身体和精神问题。",
        answers: [
            { option: "A", answer: "bolster", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "C", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undermine' means to weaken or damage something or someone, especially gradually." +
            "<br><br>" +
            "(A) 'bolster' means to support or strengthen." +
            "<br><br>" +
            "(C) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '削弱'一词意味着削弱或损害某事或某人，尤其是逐渐地。" +
            "<br><br>" +
            "(A) '增强' 意味着支持或加强。" +
            "<br><br>" +
            "(C) '提高' 意味着加强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 9,
    question: "The politician was quick to __________ the accusations made against him during the press conference by calling them baseless and defamatory.",
    chinese_question: "这位政治家在新闻发布会上迅速通过称这些指控为毫无根据和诽谤来 __________ 对他的指控。",
    answers: [
        { option: "A", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "repudiate", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'repudiate' means to refuse to accept or be associated with." +
        "<br><br>" +
        "(A) 'accept' means to consent to receive or undertake something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something.",
    chinese_explanation: "(B) '否认' 意味着拒绝接受或与之相关。" +
        "<br><br>" +
        "(A) '接受' 意味着同意接收或承担某事。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '支持' 意味着承担某物的全部或部分重量。"
    },
    {
        id: 10,
    question: "She felt hurt when her classmates began to __________ at her during the presentation.",
    chinese_question: "当她的同学在演讲时开始 __________ 她时，她感到很受伤。",
    answers: [
        { option: "A", answer: "jeer", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
        { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jeer' means to make rude and mocking remarks, typically in a loud voice." +
        "<br><br>" +
        "(B) 'support' means to give assistance to." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(A) '嘲笑' 意味着大声发表粗鲁和嘲弄的言论。" +
        "<br><br>" +
        "(B) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
