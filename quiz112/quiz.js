// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The doctor used special drops to __________ the patient's pupils for a thorough eye examination.",
    chinese_question: "医生使用特殊的滴剂来 __________ 患者的瞳孔以进行彻底的眼科检查。",
    answers: [
        { option: "A", answer: "dilate", chinese_answer: "扩张", chinese_romanization: "kuòzhāng" },
        { option: "B", answer: "constrict", chinese_answer: "收缩", chinese_romanization: "shōusuō" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "clean", chinese_answer: "清洁", chinese_romanization: "qīngjié" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dilate' means to make or become wider, larger, or more open." +
        "<br><br>" + 
        "(B) 'constrict' means to make narrower, especially by encircling pressure." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'clean' means to make something free of dirt, marks, or mess.",
    chinese_explanation: "(A) '扩张' 意味着使某物变宽、变大或更开放。" +
        "<br><br>" + 
        "(B) '收缩' 意味着通过环绕压力使其变窄。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '清洁' 意味着使某物没有污垢、痕迹或杂乱。"
    },
    {
        id: 2,
        question: "The chef will __________ the new menu to the restaurant's regular customers next Monday.",
        chinese_question: "厨师将在下周一向餐厅的常客 __________ 新菜单。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
            { option: "C", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "unveil", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unveil' means to reveal or disclose something that has been kept secret." +
            "<br><br>" +
            "(A) 'conceal' means to keep something secret or hidden." +
            "<br><br>" +
            "(C) 'overlook' means to fail to notice something." +
            "<br><br>" +
            "(B) 'distort' means to pull or twist out of shape.",
        chinese_explanation: "(D) '揭示' 意味着揭示或公开一直保密的事情。" +
            "<br><br>" +
            "(A) '隐藏' 意味着将某事保密或隐藏。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能注意到某事。" +
            "<br><br>" +
            "(B) '扭曲' 意味着拉或扭曲变形。"
    },
    {
        id: 3,
        question: "Leaving the lights on all night will __________ the batteries quickly.",
        chinese_question: "整夜开着灯会很快 __________ 电池。",
        answers: [
            { option: "A", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "B", answer: "charge", chinese_answer: "充电", chinese_romanization: "chōngdiàn" },
            { option: "C", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deplete' means to use up the supply or resources of." +
            "<br><br>" +
            "(B) 'charge' means to fill (a battery) with electricity." +
            "<br><br>" +
            "(C) 'protect' means to keep safe from harm or injury." +
            "<br><br>" +
            "(D) 'disregard' means to pay no attention to; ignore.",
        chinese_explanation: "(A) '耗尽' 意味着用尽供应或资源。" +
            "<br><br>" +
            "(B) '充电' 意味着给（电池）充电。" +
            "<br><br>" +
            "(C) '保护' 意味着保护免受伤害或伤害。" +
            "<br><br>" +
            "(D) '忽视' 意味着不注意；忽视。"
    },
    {
        id: 4,
        question: "She decided to __________ her previous accusations when she found out the truth.",
        chinese_question: "当她发现真相时，她决定 __________ 之前的指控。",
        answers: [
            { option: "A", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "B", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retract' means to withdraw a statement or accusation as untrue or unjustified." +
            "<br><br>" +
            "(A) 'confirm' means to establish the truth or correctness of something previously believed, suspected, or feared to be the case." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '撤回'一词意味着撤回一项声明或指控，认为其不真实或不公正。" +
            "<br><br>" +
            "(A) '确认' 意味着确定之前被认为、怀疑或担心的事情的真实性或正确性。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 5,
    question: "The police ordered the crowd to __________ after the protest turned violent.",
    chinese_question: "抗议变得暴力后，警方命令人群 __________ 。",
    answers: [
        { option: "A", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
        { option: "B", answer: "assemble", chinese_answer: "集合", chinese_romanization: "jíhé" },
        { option: "C", answer: "stay", chinese_answer: "停留", chinese_romanization: "tíngliú" },
        { option: "D", answer: "gather", chinese_answer: "聚集", chinese_romanization: "jùjí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'scatter' means to throw in various random directions." +
        "<br><br>" +
        "(B) 'assemble' means to gather together in one place for a common purpose." +
        "<br><br>" +
        "(C) 'stay' means to remain in the same place." +
        "<br><br>" +
        "(D) 'gather' means to come together; assemble or accumulate.",
    chinese_explanation: "(A) '分散' 意味着朝各个不同方向散开。" +
        "<br><br>" +
        "(B) '集合' 意味着为共同目的聚集在一个地方。" +
        "<br><br>" +
        "(C) '停留' 意味着留在同一个地方。" +
        "<br><br>" +
        "(D) '聚集' 意味着聚集在一起；集合或积累。"
    },
    {
        id: 6,
    question: "It's essential to __________ other people's opinions, even if you disagree with them.",
    chinese_question: "即使你不同意他人的意见，也必须 __________ 他们的观点。",
    answers: [
        { option: "A", answer: "dismiss", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "mock", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
        { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "D", answer: "ridicule", chinese_answer: "嘲弄", chinese_romanization: "cháonòng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'respect' means to admire someone or something deeply, as a result of their abilities, qualities, or achievements." +
        "<br><br>" +
        "(A) 'dismiss' means to decide that something or someone is not important and not worth considering." +
        "<br><br>" +
        "(B) 'mock' means to tease or laugh at in a scornful or contemptuous manner." +
        "<br><br>" +
        "(D) 'ridicule' means to subject someone or something to contemptuous and dismissive language or behavior.",
    chinese_explanation: "(C) '尊重' 意味着因某人的能力、品质或成就而深深钦佩他们。" +
        "<br><br>" +
        "(A) '忽视' 意味着决定某事或某人不重要且不值得考虑。" +
        "<br><br>" +
        "(B) '嘲笑' 意味着以轻蔑或鄙视的方式取笑或笑。" +
        "<br><br>" +
        "(D) '嘲弄' 意味着对某人或某物进行轻蔑和轻蔑的语言或行为。"
    },
    {
        id: 7,
    question: "The hiker decided to __________ light, bringing only the essentials for the journey.",
    chinese_question: "徒步旅行者决定 __________ 简单，只带旅行所需的必需品。",
    answers: [
        { option: "A", answer: "pack", chinese_answer: "打包", chinese_romanization: "dǎbāo" },
        { option: "B", answer: "load", chinese_answer: "装载", chinese_romanization: "zhuāngzài" },
        { option: "C", answer: "carry", chinese_answer: "携带", chinese_romanization: "xiédài" },
        { option: "D", answer: "bundle", chinese_answer: "捆绑", chinese_romanization: "kǔnbǎng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'pack' means to fill a bag or suitcase with clothes and other items needed for travel." +
        "<br><br>" +
        "(B) 'load' means to put a load or large quantity of something on or in a vehicle, ship, container, etc." +
        "<br><br>" +
        "(C) 'carry' means to support and move (someone or something) from one place to another." +
        "<br><br>" +
        "(D) 'bundle' means to tie or roll up (a number of things) together as though into a parcel.",
    chinese_explanation: "(A) '打包' 意味着将衣物和旅行需要的其他物品装入包或箱子。" +
        "<br><br>" +
        "(B) '装载' 意味着将大宗物品放入车辆、船只、容器等。" +
        "<br><br>" +
        "(C) '携带' 意味着支持和移动（某人或某物）从一个地方到另一个地方。" +
        "<br><br>" +
        "(D) '捆绑' 意味着将（若干物品）绑在一起或卷起来，就像成包一样。"
    },
    {
        id: 8,
    question: "The teacher did not __________ the students to leave the classroom without permission.",
    chinese_question: "老师不 __________ 学生未经允许离开教室。",
    answers: [
        { option: "A", answer: "forbid", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
        { option: "B", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
        { option: "C", answer: "permit", chinese_answer: "许可", chinese_romanization: "xǔkě" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'permit' means to allow someone to do something." +
        "<br><br>" +
        "(A) 'forbid' means to refuse to allow something." +
        "<br><br>" +
        "(B) 'allow' means to give permission for something." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally.",
    chinese_explanation: "(C) '许可' 意味着允许某人做某事。" +
        "<br><br>" +
        "(A) '禁止' 意味着拒绝允许某事。" +
        "<br><br>" +
        "(B) '允许' 意味着给予某事的许可。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 9,
        question: "The scientist was excited to __________ the results of her groundbreaking research.",
        chinese_question: "这位科学家很高兴能 __________ 她的突破性研究成果。",
        answers: [
            { option: "A", answer: "unveil", chinese_answer: "公布", chinese_romanization: "gōngbù" },
            { option: "B", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "C", answer: "withhold", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unveil' means to reveal or disclose something, especially something that has been kept secret." +
            "<br><br>" +
            "(B) 'suppress' means to forcibly put an end to." +
            "<br><br>" +
            "(C) 'withhold' means to refuse to give something that is due or desired by another." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '公布' 意味着揭示或公开某事，尤其是一直保密的事情。" +
            "<br><br>" +
            "(B) '抑制' 意味着强行终止。" +
            "<br><br>" +
            "(C) '保留' 意味着拒绝给予应有或另一个人想要的东西。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
        question: "The medicine helped to __________ his pain, making it more bearable.",
        chinese_question: "药物帮助 __________ 他的疼痛，使其更加可以忍受。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(A) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'intensify' means to become or make more intense.",
        chinese_explanation: "(B) '减少'一词意味着使变少或变小。" +
            "<br><br>" +
            "(A) '增加' 意味着变得或使更大。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '加剧' 意味着变得或使更强烈。"
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
