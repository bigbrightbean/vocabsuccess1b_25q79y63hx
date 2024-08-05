// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The pain in his leg began to __________ after he took the medication.",
        chinese_question: "他吃了药后，腿上的疼痛开始 __________。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "abate", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "C", answer: "persist", chinese_answer: "持续", chinese_romanization: "chíxù" },
            { option: "D", answer: "return", chinese_answer: "恢复", chinese_romanization: "huīfù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abate' means to become less intense or widespread." +
            "<br><br>" +
            "(A) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'persist' means to continue to exist; be prolonged." +
            "<br><br>" +
            "(D) 'return' means to come or go back to a place or condition.",
        chinese_explanation: "(B) '减弱'一词意味着变得不那么强烈或广泛。" +
            "<br><br>" +
            "(A) '增加' 意味着变得或使更大。" +
            "<br><br>" +
            "(C) '持续' 意味着继续存在；被延长。" +
            "<br><br>" +
            "(D) '恢复' 意味着回到一个地方或状态。"
    },
    {
        id: 2,
    question: "He tried to __________ his friend's anxiety by offering words of comfort and reassurance.",
    chinese_question: "他试图通过安慰和保证来 __________ 朋友的焦虑。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "agitate", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "C", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(B) 'agitate' means to make someone troubled or nervous." +
        "<br><br>" +
        "(D) 'worsen' means to make or become worse.",
    chinese_explanation: "(C) '缓解' 意味着减轻不愉快的感觉。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(B) '激怒' 意味着使某人烦恼或紧张。" +
        "<br><br>" +
        "(D) '恶化' 意味着使变得更糟。"
    },
    {
        id: 3,
        question: "Becoming a doctor __________ many years of rigorous study and training.",
        chinese_question: "成为一名医生 __________ 多年的严格学习和训练。",
        answers: [
            { option: "A", answer: "excludes", chinese_answer: "排除", chinese_romanization: "páichú" },
            { option: "B", answer: "entails", chinese_answer: "需要", chinese_romanization: "xūyào" },
            { option: "C", answer: "simplifies", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "avoids", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'entails' means to involve something as a necessary or inevitable part or consequence." +
            "<br><br>" +
            "(A) 'excludes' means to deny someone access to or bar someone from a place, group, or privilege." +
            "<br><br>" +
            "(C) 'simplifies' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'avoids' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(B) '需要'一词意味着作为必要或不可避免的一部分或结果而涉及某事。" +
            "<br><br>" +
            "(A) '排除' 意味着拒绝某人进入某个地方、群体或特权。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事变得更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 4,
        question: "The teacher asked the students to __________ their research findings into one presentation.",
        chinese_question: "老师要求学生们将他们的研究结果 __________ 成一个展示。",
        answers: [
            { option: "A", answer: "aggregate", chinese_answer: "汇总", chinese_romanization: "huìzǒng" },
            { option: "B", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aggregate' means to collect and combine (several separate elements) into a whole." +
            "<br><br>" +
            "(B) 'separate' means to cause to move or be apart." +
            "<br><br>" +
            "(C) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '汇总' 意味着收集和组合（几个独立元素）成一个整体。" +
            "<br><br>" +
            "(B) '分离' 意味着使移动或分开。" +
            "<br><br>" +
            "(C) '驳回' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 5,
        question: "The artist's work __________ his personal experiences and emotions, such as his childhood memories and his journey through grief.",
        chinese_question: "这位艺术家的作品 __________ 了他的个人经历和情感，例如他的童年记忆和他在悲伤中的历程。",
        answers: [
            { option: "A", answer: "obscured", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "B", answer: "hid", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "contradicted", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
            { option: "D", answer: "reflected", chinese_answer: "反映", chinese_romanization: "fǎnyìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reflected' means to show an image of; to demonstrate." +
            "<br><br>" +
            "(A) 'obscured' means to keep from being seen; conceal." +
            "<br><br>" +
            "(B) 'hid' means to put or keep out of sight." +
            "<br><br>" +
            "(C) 'contradicted' means to be in conflict with.",
        chinese_explanation: "(D) '反映' 意味着显示图像；展示。" +
            "<br><br>" +
            "(A) '掩盖' 意味着不让被看到；隐藏。" +
            "<br><br>" +
            "(B) '隐藏' 意味着把或保持在视线之外。" +
            "<br><br>" +
            "(C) '矛盾' 意味着与...冲突。"
    },
    {
        id: 6,
    question: "The manager decided to __________ the urgent documents by courier service to the client as soon as possible.",
    chinese_question: "经理决定尽快通过快递服务将紧急文件 __________ 给客户。",
        answers: [
            { option: "A", answer: "dispatch", chinese_answer: "派遣", chinese_romanization: "pàiqiǎn" },
            { option: "B", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dispatch' means to send off to a destination or for a purpose." +
            "<br><br>" +
            "(B) 'delay' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(C) 'withhold' means to refuse to give (something that is due to or is desired by another)." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '派遣' 意味着发送到一个目的地或出于某种目的。" +
            "<br><br>" +
            "(B) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(C) '扣留' 意味着拒绝给予（应当给予或他人想要的东西）。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 7,
        question: "The teacher asked other students to __________ the story that the boy was telling about the fight by verifying the details.",
        chinese_question: "老师让其他学生通过核实细节来 __________ 男孩讲述的关于打架的故事。",
        answers: [
            { option: "A", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "B", answer: "obfuscate", chinese_answer: "使模糊", chinese_romanization: "shǐ móhū" },
            { option: "C", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "corroborate", chinese_answer: "证实", chinese_romanization: "zhèngshí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'corroborate' means to confirm or give support to (a statement, theory, or finding)." +
            "<br><br>" +
            "(A) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(B) 'obfuscate' means to render obscure, unclear, or unintelligible." +
            "<br><br>" +
            "(C) 'deny' means to state that one refuses to admit the truth or existence of.",
        chinese_explanation: "(D) '证实' 意味着确认或支持（陈述、理论或发现）。" +
            "<br><br>" +
            "(A) '驳回' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(B) '使模糊' 意味着使变得模糊、不清楚或难以理解。" +
            "<br><br>" +
            "(C) '否认' 意味着表示拒绝承认事实或存在。"
    },
    {
        id: 8,
        question: "The recent success of the project will __________ their confidence to take on new challenges.",
        chinese_question: "项目的近期成功将 __________ 他们迎接新挑战的信心。",
        answers: [
            { option: "A", answer: "reinforce", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforce' figuratively means to strengthen or support an idea, behavior, or feeling." +
            "<br><br>" +
            "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(C) 'suppress' means to forcibly put an end to." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '增强' 在此语境下比喻加强或支持一个想法、行为或感觉。" +
            "<br><br>" +
            "(B) '减少' 意味着使或变得更少。" +
            "<br><br>" +
            "(C) '压制' 意味着强行终止。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
    question: "The information __________ to your health should be taken seriously, or else it could lead to severe consequences.",
    chinese_question: "与您的健康有关的信息应认真对待，否则可能会导致严重后果。",
    answers: [
        { option: "A", answer: "dismissing", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
        { option: "B", answer: "excluding", chinese_answer: "排除", chinese_romanization: "páichú" },
        { option: "C", answer: "pertaining", chinese_answer: "涉及", chinese_romanization: "shèjí" },
        { option: "D", answer: "contradicting", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'pertaining' means to be appropriate, related, or applicable." +
        "<br><br>" +
        "(A) 'dismissing' means to order or allow to leave; send away." +
        "<br><br>" +
        "(B) 'excluding' means to deny (someone) access to or bar (someone) from a place, group, or privilege." +
        "<br><br>" +
        "(D) 'contradicting' means to assert the opposite of a statement made by someone.",
    chinese_explanation: "(C) '涉及' 意味着相关或适用。" +
        "<br><br>" +
        "(A) '驳回' 意味着命令或允许离开；送走。" +
        "<br><br>" +
        "(B) '排除' 意味着拒绝（某人）进入或阻止（某人）享有某地、群体或特权。" +
        "<br><br>" +
        "(D) '反驳' 意味着提出与某人所说的相反的断言。"
    },
    {
        id: 10,
        question: "The architect decided to __________ the building's façade with intricate carvings.",
        chinese_question: "建筑师决定用复杂的雕刻 __________ 建筑的外观。",
        answers: [
            { option: "A", answer: "deface", chinese_answer: "损坏", chinese_romanization: "sǔnhuài" },
            { option: "B", answer: "embellish", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "C", answer: "damage", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'embellish' means to make something more attractive by adding decorative details." +
            "<br><br>" +
            "(A) 'deface' means to spoil the surface or appearance of something." +
            "<br><br>" +
            "(C) 'damage' means to cause harm to something." +
            "<br><br>" +
            "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(B) '装饰'一词意味着通过添加装饰细节使某物更有吸引力。" +
            "<br><br>" +
            "(A) '损坏' 意味着破坏某物的表面或外观。" +
            "<br><br>" +
            "(C) '破坏' 意味着对某物造成伤害。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事变得更简单或更容易做或理解。"
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
