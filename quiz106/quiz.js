// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The judge decided to __________ the criminal for his involvement in the robbery by sentencing him to five years in prison.",
    chinese_question: "法官决定通过判处五年监禁来 __________ 这名罪犯，因为他参与了抢劫。",
    answers: [
        { option: "A", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
        { option: "B", answer: "incarcerate", chinese_answer: "监禁", chinese_romanization: "jiānjìn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'incarcerate' means to imprison or confine someone." +
        "<br><br>" +
        "(A) 'release' means to set someone free." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'reward' means to give something to someone in recognition of their service, efforts, or achievements.",
    chinese_explanation: "(B) '监禁' 意味着监禁或限制某人。" +
        "<br><br>" +
        "(A) '释放' 意味着让某人自由。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。"
    },
    {
        id: 2,
        question: "The manager decided to __________ the team's morale with a motivational speech.",
        chinese_question: "经理决定用鼓舞人心的演讲来 __________ 团队的士气。",
        answers: [
            { option: "A", answer: "reinforce", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforce' figuratively means to strengthen or support an idea, behavior, or feeling." +
            "<br><br>" +
            "(B) 'undermine' means to damage or weaken someone or something, especially gradually." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'discourage' means to cause someone to lose confidence or enthusiasm.",
        chinese_explanation: "(A) '增强' 在此语境下比喻加强或支持一个想法、行为或感觉。" +
            "<br><br>" +
            "(B) '破坏' 意味着损害或削弱某人或某物，尤其是逐渐地。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '劝阻' 意味着使某人失去信心或热情。"
    },
    {
        id: 3,
    question: "The nurse was always ready to __________ the doctors during surgeries by preparing the necessary instruments.",
    chinese_question: "护士总是准备好在手术期间通过准备必要的器械来 __________ 医生。",
    answers: [
        { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
        { option: "B", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
        { option: "C", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'assist' means to help someone by doing a share of the work." +
        "<br><br>" +
        "(A) 'hinder' means to make it difficult for someone to do something or for something to happen." +
        "<br><br>" +
        "(B) 'observe' means to watch carefully." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(C) '协助' 意味着通过分担工作来帮助某人。" +
        "<br><br>" +
        "(A) '阻碍' 意味着使某人做某事或某事发生变得困难。" +
        "<br><br>" +
        "(B) '观察' 意味着仔细观看。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "The pine trees __________ a sticky resin that protects them from insects.",
        chinese_question: "松树 __________ 一种粘稠的树脂，保护它们免受昆虫的侵害。",
        answers: [
            { option: "A", answer: "absorb", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
            { option: "B", answer: "secrete", chinese_answer: "分泌", chinese_romanization: "fēnmì" },
            { option: "C", answer: "consume", chinese_answer: "消耗", chinese_romanization: "xiāohào" },
            { option: "D", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'secrete' means to produce and release a substance from a cell or gland." +
            "<br><br>" +
            "(A) 'absorb' means to take in or soak up." +
            "<br><br>" +
            "(C) 'consume' means to eat, drink, or use up." +
            "<br><br>" +
            "(D) 'reveal' means to make known to others.",
        chinese_explanation: "(B) '分泌'一词意味着从细胞或腺体中产生和释放一种物质。" +
            "<br><br>" +
            "(A) '吸收' 意味着吸收或吸收。" +
            "<br><br>" +
            "(C) '消耗' 意味着吃、喝或用尽。" +
            "<br><br>" +
            "(D) '揭示' 意味着让他人知道。"
    },
    {
        id: 5,
        question: "Learning a new language __________ a lot of practice and patience.",
        chinese_question: "学习一门新语言 __________ 很多练习和耐心。",
        answers: [
            { option: "A", answer: "encourages", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "excludes", chinese_answer: "排除", chinese_romanization: "páichú" },
            { option: "C", answer: "avoids", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "D", answer: "entails", chinese_answer: "需要", chinese_romanization: "xūyào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'entails' means to involve something as a necessary or inevitable part or consequence." +
            "<br><br>" +
            "(A) 'encourages' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(B) 'excludes' means to deny someone access to or bar someone from a place, group, or privilege." +
            "<br><br>" +
            "(C) 'avoids' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(D) '需要'一词意味着作为必要或不可避免的一部分或结果而涉及某事。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给予某人支持、信心或希望。" +
            "<br><br>" +
            "(B) '排除' 意味着拒绝某人进入某个地方、群体或特权。" +
            "<br><br>" +
            "(C) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 6,
    question: "Despite their best efforts, the team __________ to win the championship because they faced very strong opponents.",
    chinese_question: "尽管他们尽了最大的努力，球队还是 __________ 夺冠，因为他们面对非常强的对手。",
    answers: [
        { option: "A", answer: "dominated", chinese_answer: "主宰", chinese_romanization: "zhǔzǎi" },
        { option: "B", answer: "struggled", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "C", answer: "triumphed", chinese_answer: "获胜", chinese_romanization: "huòshèng" },
        { option: "D", answer: "advanced", chinese_answer: "前进", chinese_romanization: "qiánjìn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'struggled' means to make forceful or violent efforts to get free of restraint or constriction." +
        "<br><br>" +
        "(A) 'dominated' means to have a commanding influence on; exercise control over." +
        "<br><br>" +
        "(C) 'triumphed' means to achieve a victory; be successful." +
        "<br><br>" +
        "(D) 'advanced' means to move forward in a purposeful way.",
    chinese_explanation: "(B) '挣扎' 意味着做出强烈或激烈的努力以摆脱束缚或限制。" +
        "<br><br>" +
        "(A) '主宰' 意味着对某事物有控制或影响。" +
        "<br><br>" +
        "(C) '获胜' 意味着取得胜利；成功。" +
        "<br><br>" +
        "(D) '前进' 意味着以有目的的方式向前移动。"
    },
    {
        id: 7,
        question: "The flower’s sweet fragrance __________ throughout the garden, attracting bees and butterflies.",
        chinese_question: "花朵的甜美香气 __________ 整个花园，吸引了蜜蜂和蝴蝶。",
        answers: [
            { option: "A", answer: "emitted", chinese_answer: "散发", chinese_romanization: "sànfā" },
            { option: "B", answer: "suppressed", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "retained", chinese_answer: "保留", chinese_romanization: "bǎoliú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emitted' means to produce and discharge (something, especially gas or radiation)." +
            "<br><br>" +
            "(B) 'suppressed' means to forcibly put an end to." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'retained' means to keep possession of.",
        chinese_explanation: "(A) '散发' 意味着产生并释放（某物，尤其是气体或辐射）。" +
            "<br><br>" +
            "(B) '抑制' 意味着强行终止。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '保留' 意味着保持持有。"
    },
    {
        id: 8,
        question: "His bad habits began to __________ his health over time, causing frequent illnesses.",
        chinese_question: "他的坏习惯随着时间的推移开始 __________ 他的健康，导致经常生病。",
        answers: [
            { option: "A", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "B", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "C", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undermine' means to weaken or damage something or someone, especially gradually." +
            "<br><br>" +
            "(A) 'improve' means to make or become better." +
            "<br><br>" +
            "(C) 'strengthen' means to make or become stronger." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '削弱'一词意味着削弱或损害某事或某人，尤其是逐渐地。" +
            "<br><br>" +
            "(A) '改善' 意味着使变得更好。" +
            "<br><br>" +
            "(C) '加强' 意味着使变得更强。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 9,
        question: "After a week of eating nothing but salads, she craved a big meal to __________ her appetite.",
        chinese_question: "吃了一周的沙拉后，她渴望一顿大餐来 __________ 她的胃口。",
        answers: [
            { option: "A", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "stimulate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "D", answer: "satiate", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'satiate' means to satisfy fully." +
            "<br><br>" +
            "(A) 'reduce' means to make something smaller in size or amount." +
            "<br><br>" +
            "(B) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'stimulate' means to raise levels of physiological or nervous activity in the body or any biological system.",
        chinese_explanation: "(D) '满足' 意味着完全满足。" +
            "<br><br>" +
            "(A) '减少' 意味着使某物变小。" +
            "<br><br>" +
            "(B) '增加' 意味着变大或增加数量、数量或程度。" +
            "<br><br>" +
            "(C) '刺激' 意味着提高身体或任何生物系统的生理或神经活动水平。"
    },
    {
        id: 10,
        question: "After much pressure from his peers, he finally __________ to their request to join the team.",
        chinese_question: "在同伴的巨大压力下，他最终 __________ 加入团队的请求。",
        answers: [
            { option: "A", answer: "resisted", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "acquiesced", chinese_answer: "默许", chinese_romanization: "mòxǔ" },
            { option: "C", answer: "argued", chinese_answer: "争辩", chinese_romanization: "zhēngbiàn" },
            { option: "D", answer: "declined", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquiesced' means to accept something reluctantly but without protest." +
            "<br><br>" +
            "(A) 'resisted' means to withstand the action or effect of." +
            "<br><br>" +
            "(C) 'argued' means to give reasons or cite evidence in support of an idea, action, or theory." +
            "<br><br>" +
            "(D) 'declined' means to politely refuse.",
        chinese_explanation: "(B) '默许' 意味着不情愿地接受某事但不抗议。" +
            "<br><br>" +
            "(A) '抵抗' 意味着抵抗某事的行动或影响。" +
            "<br><br>" +
            "(C) '争辩' 意味着提供理由或引用证据支持某个想法、行动或理论。" +
            "<br><br>" +
            "(D) '拒绝' 意味着礼貌地拒绝。"
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
