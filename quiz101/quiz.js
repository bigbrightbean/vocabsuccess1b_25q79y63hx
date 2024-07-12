// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "They __________ the children into finishing their homework with the promise of ice cream.",
    chinese_question: "他们通过承诺吃冰淇淋 __________ 孩子们完成作业。",
    answers: [
        { option: "A", answer: "forced", chinese_answer: "强迫", chinese_romanization: "qiǎngpò" },
        { option: "B", answer: "cajoled", chinese_answer: "劝诱", chinese_romanization: "quànyòu" },
        { option: "C", answer: "punished", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'cajoled' means to persuade someone to do something by sustained coaxing or flattery." +
        "<br><br>" + 
        "(A) 'forced' means to make someone do something against their will." +
        "<br><br>" + 
        "(C) 'punished' means to subject to a penalty for an offense or fault." +
        "<br><br>" + 
        "(D) 'ignored' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '劝诱' 意味着通过持续的劝说或奉承来让某人做某事。" +
        "<br><br>" + 
        "(A) '强迫' 意味着使某人违背意愿做某事。" +
        "<br><br>" + 
        "(C) '惩罚' 意味着因犯罪或过失而受到处罚。" +
        "<br><br>" + 
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
    question: "Teachers can __________ students' performance by assessing their progress regularly.",
    chinese_question: "教师可以通过定期评估学生的进步来 __________ 学生的表现。",
    answers: [
        { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
        { option: "C", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'predict' means to say or estimate that a specified thing will happen in the future or will be a consequence of something." +
        "<br><br>" +
        "(A) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(C) 'overlook' means to fail to notice something." +
        "<br><br>" +
        "(D) 'delay' means to make something late or slow.",
    chinese_explanation: "(B) '预测' 意味着说或估计未来会发生某事或某事将是某种结果。" +
        "<br><br>" +
        "(A) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(C) '忽略' 意味着未能注意到某事。" +
        "<br><br>" +
        "(D) '延迟' 意味着使某事变晚或变慢。"
    },
    {
        id: 3,
    question: "The teacher taught the students to __________ all cultures and traditions.",
    chinese_question: "老师教学生们要 __________ 所有的文化和传统。",
    answers: [
        { option: "A", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
        { option: "B", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "C", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'respect' means to admire someone or something deeply, as a result of their abilities, qualities, or achievements." +
        "<br><br>" +
        "(A) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(C) 'overlook' means to fail to notice something." +
        "<br><br>" +
        "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
    chinese_explanation: "(B) '尊重' 意味着因某人的能力、品质或成就而深深钦佩他们。" +
        "<br><br>" +
        "(A) '拥抱' 意味着愿意且热情地接受或支持。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能注意到某事。" +
        "<br><br>" +
        "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
    },
    {
        id: 4,
    question: "The complex puzzle seemed to __________ everyone who attempted it.",
    chinese_question: "这个复杂的谜题似乎让每个尝试解开它的人都 __________ 了。",
    answers: [
        { option: "A", answer: "boggle", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'boggle' means to overwhelm or bewilder." +
        "<br><br>" + 
        "(B) 'simplify' means to make something simpler or easier to do or understand." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'clarify' means to make a statement or situation less confused and more comprehensible.",
    chinese_explanation: "(A) '困惑' 意味着使不知所措或迷惑。" +
        "<br><br>" + 
        "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '澄清' 意味着使声明或情况不再混乱并更容易理解。"
    },
    {
        id: 5,
    question: "The priest will __________ the sick with holy oil during the ceremony.",
    chinese_question: "牧师将在仪式上用圣油 __________ 病人。",
    answers: [
        { option: "A", answer: "anoint", chinese_answer: "膏抹", chinese_romanization: "gāomǒ" },
        { option: "B", answer: "wash", chinese_answer: "洗", chinese_romanization: "xǐ" },
        { option: "C", answer: "cover", chinese_answer: "覆盖", chinese_romanization: "fùgài" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'anoint' means to smear or rub with oil, typically as part of a religious ceremony." +
        "<br><br>" + 
        "(B) 'wash' means to clean with water and, typically, soap or detergent." +
        "<br><br>" + 
        "(C) 'cover' means to put something on top of or in front of something else to protect or conceal it." +
        "<br><br>" + 
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(A) “膏抹” 意味着用油涂抹或擦拭，通常是宗教仪式的一部分。" +
        "<br><br>" + 
        "(B) '洗' 意味着用水和通常是肥皂或洗涤剂清洁。" +
        "<br><br>" + 
        "(C) '覆盖' 意味着把某物放在另一物之上或之前以保护或掩盖它。" +
        "<br><br>" + 
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 6,
    question: "He had to __________ with his boss to reconsider the decision to terminate his employment.",
    chinese_question: "他不得不 __________ 他的老板重新考虑终止他雇佣的决定。",
    answers: [
        { option: "A", answer: "plead", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "assume", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'plead' means to make an emotional appeal." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'assume' means to suppose to be the case, without proof." +
        "<br><br>" +
        "(D) 'dismiss' means to order or allow to leave; send away.",
    chinese_explanation: "(A) '恳求' 意味着提出情感上的请求。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '假设' 意味着在没有证据的情况下假定情况如此。" +
        "<br><br>" +
        "(D) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 7,
    question: "The chef used a sharp knife to __________ the meat with precision.",
    chinese_question: "厨师用锋利的刀精确地 __________ 肉。",
    answers: [
        { option: "A", answer: "cleave", chinese_answer: "切开", chinese_romanization: "qiēkāi" },
        { option: "B", answer: "mend", chinese_answer: "修补", chinese_romanization: "xiūbǔ" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "smooth", chinese_answer: "抹平", chinese_romanization: "mǒpíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cleave' means to split or sever something, especially along a natural line or grain." +
        "<br><br>" + 
        "(B) 'mend' means to repair something that is broken or damaged." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'smooth' means to make something completely free from roughness or irregularities.",
    chinese_explanation: "(A) '切开' 意味着劈开或分开某物，尤其是沿着天然线条或纹理。" +
        "<br><br>" + 
        "(B) '修补' 意味着修理破损或损坏的东西。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '抹平' 意味着使某物完全没有粗糙或不规则的地方。"
    },
    {
        id: 8,
    question: "To highlight the stark differences, the speaker __________ the success stories with the failures.",
    chinese_question: "为了突出明显的差异，演讲者将成功故事与失败案例 __________。",
    answers: [
        { option: "A", answer: "juxtaposed", chinese_answer: "并列", chinese_romanization: "bìngliè" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'juxtaposed' means to place side by side for contrast, used figuratively here." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'criticized' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" +
        "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '并列' 意味着并排放置以作对比，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '批评' 意味着以不赞成的方式指出某人或某物的错误。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 9,
    question: "They were __________ into buying a product that did not work as advertised.",
    chinese_question: "他们被 __________ 购买了一款与广告描述不符的产品。",
    answers: [
        { option: "A", answer: "duped", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "informed", chinese_answer: "通知", chinese_romanization: "tōngzhī" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'duped' means to be deceived or tricked, used figuratively here." +
        "<br><br>" + 
        "(B) 'informed' means to give someone facts or information." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'assisted' means to help someone.",
    chinese_explanation: "(A) '欺骗' 意味着被欺骗或捉弄，这里是比喻用法。" +
        "<br><br>" + 
        "(B) '通知' 意味着向某人提供事实或信息。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 10,
    question: "He tried to __________ his mistake by saying he was under a lot of pressure at work.",
    chinese_question: "他试图通过说自己在工作中承受很大压力来 __________ 他的错误。",
    answers: [
        { option: "A", answer: "rationalize", chinese_answer: "合理化", chinese_romanization: "hélǐhuà" },
        { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rationalize' means to attempt to explain or justify behavior or an attitude with logical reasons, even if these are not appropriate." +
        "<br><br>" +
        "(B) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '合理化' 意味着试图用合理的理由解释或证明行为或态度，即使这些理由并不合适。" +
        "<br><br>" +
        "(B) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
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
