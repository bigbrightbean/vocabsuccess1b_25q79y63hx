// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team's strategy was to __________ all distractions and focus solely on the game.",
        chinese_question: "团队的策略是 __________ 所有干扰，全神贯注于比赛。",
        answers: [
            { option: "A", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "B", answer: "cultivate", chinese_answer: "培养", chinese_romanization: "péiyǎng" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "banish", chinese_answer: "驱除", chinese_romanization: "qūchú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'banish' means to get rid of something unwanted." +
            "<br><br>" +
            "(A) 'invite' means to make a polite, formal, or friendly request to someone to go somewhere or to do something." +
            "<br><br>" +
            "(B) 'cultivate' means to try to acquire or develop a quality or skill." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '驱除' 意味着摆脱不想要的东西。" +
            "<br><br>" +
            "(A) '邀请' 意味着礼貌地、正式地或友好地请求某人去某地或做某事。" +
            "<br><br>" +
            "(B) '培养' 意味着试图获得或发展一种品质或技能。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
    question: "He tried to __________ the conversation away from controversial topics.",
    chinese_question: "他试图将对话 __________ 离开有争议的话题。",
    answers: [
        { option: "A", answer: "drive", chinese_answer: "驾驶", chinese_romanization: "jiàshǐ" },
        { option: "B", answer: "steer", chinese_answer: "引导", chinese_romanization: "yǐndǎo" },
        { option: "C", answer: "interrupt", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'steer' means to guide or control the movement or course of something." +
        "<br><br>" +
        "(A) 'drive' means to operate and control the direction and speed of a motor vehicle." +
        "<br><br>" +
        "(C) 'interrupt' means to stop the continuous progress of an activity or process." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally.",
    chinese_explanation: "(B) '引导' 意味着引导或控制某物的运动或进程。" +
        "<br><br>" +
        "(A) '驾驶' 意味着操作和控制机动车的方向和速度。" +
        "<br><br>" +
        "(C) '打断' 意味着停止活动或过程的连续进展。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 3,
    question: "The doctor prescribed medication to __________ the patient's pain after the surgery.",
    chinese_question: "医生开了药来 __________ 病人手术后的疼痛。",
    answers: [
        { option: "A", answer: "aggravate", chinese_answer: "加重", chinese_romanization: "jiāzhòng" },
        { option: "B", answer: "palliate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'palliate' means to make a disease or its symptoms less severe without removing the cause." +
        "<br><br>" +
        "(A) 'aggravate' means to make a problem, injury, or offense worse or more serious." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'intensify' means to become or make more intense.",
    chinese_explanation: "(B) '缓解'一词意味着在不消除原因的情况下减轻疾病或其症状的严重程度。" +
        "<br><br>" +
        "(A) '加重' 意味着使问题、伤害或罪行变得更严重。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '加剧' 意味着变得或使更强烈。"
    },
    {
        id: 4,
        question: "He would often __________ snacks in his desk drawer to avoid sharing them with his siblings.",
        chinese_question: "他经常在桌子抽屉里 __________ 零食，以避免与兄弟姐妹分享。",
        answers: [
            { option: "A", answer: "secrete", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "consume", chinese_answer: "消耗", chinese_romanization: "xiāohào" },
            { option: "C", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "D", answer: "absorb", chinese_answer: "吸收", chinese_romanization: "xīshōu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'secrete' means to conceal or hide." +
            "<br><br>" +
            "(B) 'consume' means to eat, drink, or use up." +
            "<br><br>" +
            "(C) 'reveal' means to make known to others." +
            "<br><br>" +
            "(D) 'absorb' means to take in or soak up.",
        chinese_explanation: "(A) '隐藏'一词意味着隐藏或掩藏。" +
            "<br><br>" +
            "(B) '消耗' 意味着吃、喝或用尽。" +
            "<br><br>" +
            "(C) '揭示' 意味着让他人知道。" +
            "<br><br>" +
            "(D) '吸收' 意味着吸收或吸收。"
    },
    {
        id: 5,
    question: "The deal was __________ with a handshake and a signed contract.",
    chinese_question: "交易通过握手和签署合同被 __________。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "sealed", chinese_answer: "确定", chinese_romanization: "quèdìng" },
        { option: "C", answer: "rejected", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "D", answer: "delayed", chinese_answer: "推迟", chinese_romanization: "tuīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sealed' means to finalize or confirm something definitively." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'rejected' means to dismiss as inadequate, unacceptable, or faulty." +
        "<br><br>" +
        "(D) 'delayed' means to make someone or something late or slow.",
    chinese_explanation: "(B) '确定' 意味着最终确定或确认某事。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '拒绝' 意味着因为不合格、不接受或有缺陷而予以否定。" +
        "<br><br>" +
        "(D) '推迟' 意味着使某人或某事迟到或缓慢。"
    },
    {
        id: 6,
    question: "She had to sit down and take deep breaths to stop __________ after hearing the shocking news.",
    chinese_question: "听到令人震惊的消息后，她不得不坐下来深呼吸以停止 __________ 。",
    answers: [
        { option: "A", answer: "sleeping", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
        { option: "B", answer: "hyperventilating", chinese_answer: "过度换气", chinese_romanization: "guòdù huànqì" },
        { option: "C", answer: "laughing", chinese_answer: "笑", chinese_romanization: "xiào" },
        { option: "D", answer: "eating", chinese_answer: "吃", chinese_romanization: "chī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hyperventilating' means to breathe at an abnormally rapid rate, often in response to shock or anxiety." +
        "<br><br>" +
        "(A) 'sleeping' means to be in a state of rest." +
        "<br><br>" +
        "(C) 'laughing' means to make sounds and movements of the face and body that show amusement." +
        "<br><br>" +
        "(D) 'eating' means to put food into the mouth and chew and swallow it.",
    chinese_explanation: "(B) '过度换气' 意味着以异常快速的速度呼吸，通常是对震惊或焦虑的反应。" +
        "<br><br>" +
        "(A) '睡觉' 意味着处于休息状态。" +
        "<br><br>" +
        "(C) '笑' 意味着发出和做出显示愉快的声音和动作。" +
        "<br><br>" +
        "(D) '吃' 意味着将食物放入口中并咀嚼和吞咽。"
    },
    {
        id: 7,
        question: "The long hike began to __________ their energy reserves.",
        chinese_question: "长时间的徒步旅行开始 __________ 他们的能量储备。",
        answers: [
            { option: "A", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deplete' means to use up the supply or resources of." +
            "<br><br>" +
            "(B) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'maintain' means to keep in an existing state.",
        chinese_explanation: "(A) '耗尽' 意味着用尽供应或资源。" +
            "<br><br>" +
            "(B) '增加' 意味着在大小、数量或程度上增加。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '维持' 意味着保持现有状态。"
    },
    {
        id: 8,
    question: "After the failed project, the manager couldn't help but __________ the team for their lack of preparation.",
    chinese_question: "项目失败后，经理忍不住 __________ 团队缺乏准备。",
    answers: [
        { option: "A", answer: "berate", chinese_answer: "责骂", chinese_romanization: "zémà" },
        { option: "B", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "motivate", chinese_answer: "激励", chinese_romanization: "jīlì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'berate' means to scold or criticize someone angrily." +
        "<br><br>" + 
        "(B) 'commend' means to praise formally or officially." +
        "<br><br>" + 
        "(C) 'support' means to bear all or part of the weight of; hold up." +
        "<br><br>" + 
        "(D) 'motivate' means to provide someone with a reason for doing something.",
    chinese_explanation: "(A) '责骂' 意味着愤怒地责备或批评某人。" +
        "<br><br>" + 
        "(B) '表扬' 意味着正式或官方地赞美。" +
        "<br><br>" + 
        "(C) '支持' 意味着承担全部或部分重量；支撑。" +
        "<br><br>" + 
        "(D) '激励' 意味着给某人提供做某事的理由。"
    },
    {
        id: 9,
    question: "His voice was __________ with excitement as he shared his new ideas with the team.",
    chinese_question: "当他与团队分享他的新想法时，他的声音充满了 __________ 。",
    answers: [
        { option: "A", answer: "inflected", chinese_answer: "变化", chinese_romanization: "biànhuà" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inflected' means to change the pitch or tone of the voice." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'criticized' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" +
        "(D) 'supported' means to give assistance to.",
    chinese_explanation: "(A) '变化' 意味着改变声音的音高或音调。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '批评' 意味着以不赞成的方式指出某人或某物的错误。" +
        "<br><br>" +
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 10,
        question: "The inspiring speech __________ the crowd to take action against injustice.",
        chinese_question: "鼓舞人心的演讲 __________ 人群采取行动反对不公。",
        answers: [
            { option: "A", answer: "spurred", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "B", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "silenced", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "dissuaded", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spurred' figuratively means to encourage or prompt someone to take action or make a greater effort." +
            "<br><br>" +
            "(B) 'calmed' means to make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(C) 'silenced' means to cause to be silent; prohibit or prevent from speaking." +
            "<br><br>" +
            "(D) 'dissuaded' means to persuade someone not to take a particular course of action.",
        chinese_explanation: "(A) '激励' 在此语境下比喻鼓励或促使某人采取行动或更加努力。" +
            "<br><br>" +
            "(B) '平静' 意味着使（某人）安静和平静；安抚。" +
            "<br><br>" +
            "(C) '沉默' 意味着使其沉默；禁止或阻止说话。" +
            "<br><br>" +
            "(D) '劝阻' 意味着劝说某人不采取某个特定的行动。"
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
