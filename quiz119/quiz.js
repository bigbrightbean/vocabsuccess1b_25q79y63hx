// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The breathtaking view from the mountain peak __________ the artist to paint a beautiful landscape.",
    chinese_question: "山顶的壮丽景色 __________ 了这位艺术家画出美丽的风景画。",
    answers: [
        { option: "A", answer: "bored", chinese_answer: "使无聊", chinese_romanization: "shǐ wúliáo" },
        { option: "B", answer: "discouraged", chinese_answer: "使沮丧", chinese_romanization: "shǐ jǔsàng" },
        { option: "C", answer: "inspired", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "D", answer: "confused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'inspired' means to fill someone with the urge or ability to do or feel something, especially to do something creative." +
        "<br><br>" + 
        "(A) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
        "<br><br>" + 
        "(B) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
        "<br><br>" + 
        "(D) 'confused' means to make someone unable to think clearly or understand.",
    chinese_explanation: "(C) “激励” 意味着让某人有做某事的冲动或能力，特别是做一些创造性的事情。" +
        "<br><br>" + 
        "(A) '使无聊' 意味着因为无所事事或对当前活动缺乏兴趣而感到厌倦和不耐烦。" +
        "<br><br>" + 
        "(B) '使沮丧' 意味着使某人失去信心或热情。" +
        "<br><br>" + 
        "(D) '使困惑' 意味着使某人无法清晰地思考或理解。"
    },
    {
        id: 2,
        question: "She was asked to __________ the message to all the employees in the department.",
        chinese_question: "她被要求将信息 __________ 给部门所有员工。",
        answers: [
            { option: "A", answer: "dispatch", chinese_answer: "发送", chinese_romanization: "fāsòng" },
            { option: "B", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "C", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dispatch' means to send off to a destination or for a purpose." +
            "<br><br>" +
            "(B) 'withhold' means to refuse to give (something that is due to or is desired by another)." +
            "<br><br>" +
            "(C) 'confuse' means to make (someone) unable to think clearly." +
            "<br><br>" +
            "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(A) '发送' 意味着发送到一个目的地或出于某种目的。" +
            "<br><br>" +
            "(B) '扣留' 意味着拒绝给予（应当给予或他人想要的东西）。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使（某人）无法清晰思考。" +
            "<br><br>" +
            "(D) '遮掩' 意味着使看不见；隐藏。"
    },
    {
        id: 3,
    question: "The surprise party was meant to be a secret, but someone let it slip and __________ the surprise.",
    chinese_question: "惊喜派对本来是个秘密，但有人泄露了消息， __________ 了惊喜。",
    answers: [
        { option: "A", answer: "fixed", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
        { option: "B", answer: "create", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
        { option: "C", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "D", answer: "spoil", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'spoil' means to diminish or destroy the value or quality of something." +
        "<br><br>" +
        "(A) 'fixed' means to repair or mend something." +
        "<br><br>" +
        "(B) 'create' means to bring something into existence." +
        "<br><br>" +
        "(C) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of something.",
    chinese_explanation: "(D) '破坏' 意味着减少或破坏某物的价值或质量。" +
        "<br><br>" +
        "(A) '修理' 意味着修理或修补某物。" +
        "<br><br>" +
        "(B) '创造' 意味着将某物带入存在。" +
        "<br><br>" +
        "(C) '增强' 意味着增强、增加或进一步提高某物的质量、价值或程度。"
    },
    {
        id: 4,
    question: "The statue in the town square appeared __________, with parts of its surface flaking away.",
    chinese_question: "镇广场上的雕像显得 __________，其表面部分正在剥落。",
    answers: [
        { option: "A", answer: "gleaming", chinese_answer: "闪闪发光", chinese_romanization: "shǎnshǎn fāguāng" },
        { option: "B", answer: "corroded", chinese_answer: "腐蚀", chinese_romanization: "fǔshí" },
        { option: "C", answer: "shiny", chinese_answer: "光亮", chinese_romanization: "guāngliàng" },
        { option: "D", answer: "pristine", chinese_answer: "崭新", chinese_romanization: "zhǎnxīn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'corroded' means worn or eaten away, especially by rust or chemicals." +
        "<br><br>" +
        "(A) 'gleaming' means shining brightly." +
        "<br><br>" +
        "(C) 'shiny' means reflecting light." +
        "<br><br>" +
        "(D) 'pristine' means in its original condition; unspoiled.",
    chinese_explanation: "(B) '腐蚀' 意味着被侵蚀或被腐蚀，特别是被锈或化学品。" +
        "<br><br>" +
        "(A) '闪闪发光' 意味着明亮地发光。" +
        "<br><br>" +
        "(C) '光亮' 意味着反射光。" +
        "<br><br>" +
        "(D) '崭新' 意味着处于原始状态；未被破坏。"
    },
    {
        id: 5,
        question: "The rules that __________ to the competition were explained clearly to all participants.",
        chinese_question: "与比赛相关的规则已向所有参与者清楚解释。",
        answers: [
            { option: "A", answer: "pertain", chinese_answer: "涉及", chinese_romanization: "shèjí" },
            { option: "B", answer: "exclude", chinese_answer: "排除", chinese_romanization: "páichú" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pertain' means to be appropriate, related, or applicable." +
            "<br><br>" +
            "(B) 'exclude' means to deny (someone) access to or bar (someone) from a place, group, or privilege." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '涉及' 意味着相关或适用。" +
            "<br><br>" +
            "(B) '排除' 意味着拒绝（某人）进入或阻止（某人）享有某地、群体或特权。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 6,
        question: "The author decided to __________ all her short stories into one collection.",
        chinese_question: "作者决定将她的所有短篇小说 __________ 成一个合集。",
        answers: [
            { option: "A", answer: "catalog", chinese_answer: "编目", chinese_romanization: "biānmù" },
            { option: "B", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
            { option: "C", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'catalog' means to make a systematic list of (items of the same type)." +
            "<br><br>" +
            "(B) 'discard' means to get rid of (something or someone) as no longer useful or desirable." +
            "<br><br>" +
            "(C) 'confuse' means to make (someone) unable to think clearly." +
            "<br><br>" +
            "(D) 'separate' means to cause to move or be apart.",
        chinese_explanation: "(A) '编目' 意味着对（同类项目）进行系统的列表。" +
            "<br><br>" +
            "(B) '丢弃' 意味着处理不再有用或不再需要的东西或人。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使（某人）无法清晰思考。" +
            "<br><br>" +
            "(D) '分离' 意味着使移动或分开。"
    },
    {
        id: 7,
    question: "She discovered that the repairman had tried to __________ her by charging for unnecessary parts.",
    chinese_question: "她发现修理工试图通过收取不必要的零件费用来 __________ 她。",
    answers: [
        { option: "A", answer: "fix", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
        { option: "B", answer: "swindle", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "C", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "D", answer: "maintain", chinese_answer: "维护", chinese_romanization: "wéihù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'swindle' means to deceive someone in order to take their money or possessions." +
        "<br><br>" +
        "(A) 'fix' means to repair something." +
        "<br><br>" +
        "(C) 'assist' means to help someone." +
        "<br><br>" +
        "(D) 'maintain' means to keep something in good condition.",
    chinese_explanation: "(B) '欺骗' 意味着为了骗取某人的钱或财物而欺骗某人。" +
        "<br><br>" +
        "(A) '修理' 意味着修理某物。" +
        "<br><br>" +
        "(C) '帮助' 意味着帮助某人。" +
        "<br><br>" +
        "(D) '维护' 意味着保持某物处于良好状态。"
    },
    {
        id: 8,
    question: "The paramedics worked tirelessly to __________ the unconscious man after the accident.",
    chinese_question: "事故后，医务人员不知疲倦地工作，试图 __________ 那个失去意识的人。",
    answers: [
        { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "revive", chinese_answer: "复苏", chinese_romanization: "fùsū" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'revive' means to restore to life or consciousness." +
        "<br><br>" +
        "(A) 'abandon' means to give up completely." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly.",
    chinese_explanation: "(D) '复苏' 意味着恢复生命或意识。" +
        "<br><br>" +
        "(A) '放弃' 意味着完全放弃。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 9,
    question: "The artist decided to __________ her name on her latest sculpture.",
    chinese_question: "艺术家决定在她最新的雕塑上 __________ 她的名字。",
    answers: [
        { option: "A", answer: "inscribe", chinese_answer: "铭刻", chinese_romanization: "míngkè" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'inscribe' means to write or carve words or symbols on something, especially as a formal or permanent record." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'support' means to give assistance to." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(A) '铭刻' 意味着在某物上写或刻字或符号，特别是作为正式或永久记录。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
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
