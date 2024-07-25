// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The actor had to __________ surprise when he received the award, even though he knew he was going to win.",
        chinese_question: "尽管他知道自己会获奖，演员还是不得不 __________ 惊讶。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "feign", chinese_answer: "假装", chinese_romanization: "jiǎzhuāng" },
            { option: "C", answer: "express", chinese_answer: "表达", chinese_romanization: "biǎodá" },
            { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feign' means to pretend to be affected by a feeling, state, or injury." +
            "<br><br>" + 
            "(A) 'conceal' means to hide or keep something secret." +
            "<br><br>" + 
            "(C) 'express' means to convey a thought or feeling in words or by gestures and conduct." +
            "<br><br>" + 
            "(D) 'diminish' means to make or become less.",
        chinese_explanation: "(B) '假装' 意味着假装受到感觉、状态或受伤的影响。" +
            "<br><br>" + 
            "(A) '隐藏' 意味着隐藏或保守秘密。" +
            "<br><br>" + 
            "(C) '表达' 意味着通过言语或手势和行为传达思想或感情。" +
            "<br><br>" + 
            "(D) '减少' 意味着使减少或变少。"
    },
    {
        id: 2,
        question: "The tight shoes began to __________ his feet, causing painful blisters.",
        chinese_question: "紧鞋子开始 __________ 他的脚，导致疼痛的水泡。",
        answers: [
            { option: "A", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
            { option: "B", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "C", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "chafe", chinese_answer: "摩擦", chinese_romanization: "mócā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'chafe' means to make sore by rubbing against something." +
            "<br><br>" +
            "(A) 'soothe' means to gently calm or relieve pain." +
            "<br><br>" +
            "(B) 'comfort' means to ease the grief or distress of." +
            "<br><br>" +
            "(C) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(D) '摩擦' 意味着因摩擦而使某物疼痛。" +
            "<br><br>" +
            "(A) '抚慰' 意味着轻轻地安抚或缓解疼痛。" +
            "<br><br>" +
            "(B) '安慰' 意味着缓解悲伤或痛苦。" +
            "<br><br>" +
            "(C) '保护' 意味着使其免受伤害或损害。"
    },
    {
        id: 3,
    question: "The company's decision to cut jobs __________ many of its employees.",
    chinese_question: "公司裁员的决定让许多员工感到 __________。",
    answers: [
        { option: "A", answer: "flabbergasted", chinese_answer: "震惊", chinese_romanization: "zhènjīng" },
        { option: "B", answer: "soothed", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "amused", chinese_answer: "逗乐", chinese_romanization: "dòulè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'flabbergasted' means to surprise or shock someone greatly." +
        "<br><br>" + 
        "(B) 'soothed' means to gently calm someone." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'amused' means to cause someone to find something funny.",
    chinese_explanation: "(A) '震惊' 意味着让某人大吃一惊或震惊。" +
        "<br><br>" + 
        "(B) '安抚' 意味着温柔地安抚某人。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '逗乐' 意味着让某人觉得有趣。"
    },
    {
        id: 4,
        question: "It __________ me when people don’t clean up after their pets in the park.",
        chinese_question: "在公园里人们不清理宠物的粪便真的 __________ 我。",
        answers: [
            { option: "A", answer: "amuses", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
            { option: "B", answer: "praises", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "irks", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'irks' means to irritate or annoy." +
            "<br><br>" +
            "(A) 'amuses' means to cause someone to find something funny or entertaining." +
            "<br><br>" +
            "(B) 'praises' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'ignores' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '激怒' 意味着刺激或惹恼。" +
            "<br><br>" +
            "(A) '逗乐' 意味着使某人觉得有趣或娱乐。" +
            "<br><br>" +
            "(B) '赞扬' 意味着表达热烈的认可或钦佩。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
    question: "The reform movement sought to __________ corrupt officials from power, bringing integrity back to the government.",
    chinese_question: "改革运动力图 __________ 腐败官员，使政府重获清廉。",
    answers: [
        { option: "A", answer: "appoint", chinese_answer: "任命", chinese_romanization: "rènmìng" },
        { option: "B", answer: "oust", chinese_answer: "罢免", chinese_romanization: "bàmiǎn" },
        { option: "C", answer: "commend", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'oust' figuratively means to remove from a position or place." +
        "<br><br>" +
        "(A) 'appoint' means to assign to a position." +
        "<br><br>" +
        "(C) 'commend' means to praise." +
        "<br><br>" +
        "(D) 'support' means to back or help.",
    chinese_explanation: "(B) '罢免' 一词在比喻上意味着从职位或地方上移除。" +
        "<br><br>" +
        "(A) '任命' 意味着指定职位。" +
        "<br><br>" +
        "(C) '赞扬' 意味着表示赞同。" +
        "<br><br>" +
        "(D) '支持' 意味着支持或帮助。"
    },
    {
        id: 6,
    question: "The company used aggressive marketing strategies to __________ its brand, making it a household name.",
    chinese_question: "公司使用激进的营销策略来 __________ 其品牌，使其成为家喻户晓的名字。",
    answers: [
        { option: "A", answer: "aggrandize", chinese_answer: "扩大", chinese_romanization: "kuòdà" },
        { option: "B", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
        { option: "C", answer: "belittle", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
        { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'aggrandize' means to increase the power, status, or wealth of." +
        "<br><br>" +
        "(B) 'obscure' means to make unclear." +
        "<br><br>" +
        "(C) 'belittle' means to make someone or something seem less important." +
        "<br><br>" +
        "(D) 'diminish' means to make smaller or less.",
    chinese_explanation: "(A) '扩大' 一词意味着增加权力、地位或财富。" +
        "<br><br>" +
        "(B) '遮掩' 意味着使不清楚。" +
        "<br><br>" +
        "(C) '贬低' 意味着使某人或某物显得不那么重要。" +
        "<br><br>" +
        "(D) '减少' 意味着使变得更小或更少。"
    },
    {
        id: 7,
    question: "A strange noise seemed to __________ from the old abandoned house, making the children hesitant to go near.",
    chinese_question: "一种奇怪的声音似乎 __________ 出这座废弃的老房子，使孩子们不敢靠近。",
    answers: [
        { option: "A", answer: "emanate", chinese_answer: "发出", chinese_romanization: "fāchū" },
        { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "attract", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'emanate' means to issue or spread out from a source." +
        "<br><br>" +
        "(B) 'conceal' means to keep from being seen; hide." +
        "<br><br>" +
        "(C) 'attract' means to cause someone to have a liking for or interest in something." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(A) '发出' 意味着从源头发出或散发。" +
        "<br><br>" +
        "(B) '隐藏' 意味着防止被看到；隐藏。" +
        "<br><br>" +
        "(C) '吸引' 意味着使某人对某事物产生喜欢或兴趣。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 8,
        question: "The math problem __________ the students, even though it was supposed to be an easy one.",
        chinese_question: "这个数学题让学生们 __________，尽管它应该是一个简单的题目。",
        answers: [
            { option: "A", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "B", answer: "flummoxed", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "C", answer: "thrilled", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "D", answer: "entertained", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flummoxed' means to confuse or bewilder someone." +
            "<br><br>" + 
            "(A) 'simplified' means to make something easier to do or understand." +
            "<br><br>" + 
            "(C) 'thrilled' means to cause someone to have a sudden feeling of excitement and pleasure." +
            "<br><br>" + 
            "(D) 'entertained' means to provide someone with amusement or enjoyment.",
        chinese_explanation: "(B) '困惑' 意味着使某人困惑或迷惑。" +
            "<br><br>" + 
            "(A) '简化' 意味着使某事更容易做或理解。" +
            "<br><br>" + 
            "(C) '激动' 意味着使某人突然感到兴奋和愉快。" +
            "<br><br>" + 
            "(D) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 9,
    question: "The teacher did not hesitate to __________ the student for cheating on the exam.",
    chinese_question: "老师毫不犹豫地 __________ 学生考试作弊。",
    answers: [
        { option: "A", answer: "castigate", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'castigate' means to reprimand someone severely." +
        "<br><br>" + 
        "(B) 'praise' means to express warm approval or admiration." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'assist' means to help or support.",
    chinese_explanation: "(A) '严厉批评' 意味着严厉地斥责某人。" +
        "<br><br>" + 
        "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '帮助' 意味着帮助或支持。"
    },
    {
        id: 10,
        question: "The student attempted to __________ the strict rules of the exam by cheating.",
        chinese_question: "学生试图通过作弊来 __________ 考试的严格规定。",
        answers: [
            { option: "A", answer: "circumvent", chinese_answer: "绕过", chinese_romanization: "ràoguò" },
            { option: "B", answer: "follow", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "C", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'circumvent' means to find a way around (an obstacle)." +
            "<br><br>" +
            "(B) 'follow' means to go or come after (a person or thing proceeding ahead); move or travel behind." +
            "<br><br>" +
            "(C) 'enforce' means to compel observance of or compliance with (a law, rule, or obligation)." +
            "<br><br>" +
            "(D) 'simplify' means to make (something) simpler or easier to do or understand.",
        chinese_explanation: "(A) '绕过' 意味着找到绕过（障碍物）的办法。" +
            "<br><br>" +
            "(B) '遵守' 意味着在（前面行进的人或事物）之后走或来；移动或旅行在后面。" +
            "<br><br>" +
            "(C) '执行' 意味着强制遵守或遵守（法律、规则或义务）。" +
            "<br><br>" +
            "(D) '简化' 意味着使（某事物）更简单或更容易做或理解。"
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
