// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The child was __________ by strangers while playing in the park, and the police were immediately notified.",
        chinese_question: "孩子在公园玩耍时被陌生人__________，警方立即被通知。",
        answers: [
            { option: "A", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "B", answer: "abducted", chinese_answer: "绑架", chinese_romanization: "bǎngjià" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "befriended", chinese_answer: "结交", chinese_romanization: "jiéjiāo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abducted' means taken away illegally by force or deception; kidnapped." +
            "<br><br>" +
            "(A) 'protected' means kept safe from harm or injury." +
            "<br><br>" +
            "(C) 'ignored' means refused to take notice of or acknowledge; disregarded intentionally." +
            "<br><br>" +
            "(D) 'befriended' means acted as a friend to (someone) by offering help or support.",
        chinese_explanation: "(B) '绑架' 一词意味着被非法强行或欺骗地带走；绑架。" +
            "<br><br>" +
            "(A) '保护' 意味着使免受伤害或伤害。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(D) '结交' 意味着通过提供帮助或支持作为朋友对待（某人）。"
    },
    {
        id: 2,
    question: "As the sun began to __________, the sky was painted with beautiful hues of orange and pink.",
    chinese_question: "当太阳开始 __________ 时，天空被美丽的橙色和粉红色染上了色彩。",
    answers: [
        { option: "A", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
        { option: "B", answer: "fade", chinese_answer: "消退", chinese_romanization: "xiāotuì" },
        { option: "C", answer: "ascend", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
        { option: "D", answer: "darken", chinese_answer: "变暗", chinese_romanization: "biàn'àn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'ascend' means to rise or go up." +
        "<br><br>" +
        "(A) 'descend' means to move or fall downward." +
        "<br><br>" +
        "(B) 'fade' means to gradually grow faint and disappear." +
        "<br><br>" +
        "(D) 'darken' means to become or make dark or darker.",
    chinese_explanation: "(C) '上升' 意味着上升或攀登。" +
        "<br><br>" +
        "(A) '下降' 意味着向下移动或掉落。" +
        "<br><br>" +
        "(B) '消退' 意味着逐渐变得模糊并消失。" +
        "<br><br>" +
        "(D) '变暗' 意味着变暗或使变暗。"
    },
    {
        id: 3,
    question: "After much deliberation, the board decided to __________ to the demands of the employees for better working conditions.",
    chinese_question: "经过多次讨论，董事会决定 __________ 员工对更好工作条件的要求。",
    answers: [
        { option: "A", answer: "accede", chinese_answer: "同意", chinese_romanization: "tóngyì" },
        { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'accede' means to agree to a request or demand." +
        "<br><br>" + 
        "(B) 'reject' means to refuse to accept." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'deny' means to refuse to admit the truth or existence of something.",
    chinese_explanation: "(A) '同意' 意味着同意请求或要求。" +
        "<br><br>" + 
        "(B) '拒绝' 意味着拒绝接受。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '否认' 意味着拒绝承认某事的真实性或存在。"
    },
    {
        id: 4,
        question: "She had to __________ many challenges before finally achieving her dream job.",
        chinese_question: "她必须 __________ 许多挑战，才能最终实现她的梦想工作。",
        answers: [
            { option: "A", answer: "endure", chinese_answer: "忍受", chinese_romanization: "rěnshòu" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "foresee", chinese_answer: "预见", chinese_romanization: "yùjiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endure' means to suffer (something painful or difficult) patiently." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'foresee' means to be aware of beforehand; predict.",
        chinese_explanation: "(A) '忍受' 意味着耐心地忍受（痛苦或困难的事情）。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事物更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '预见' 意味着预先意识到；预测。"
    },
    {
        id: 5,
        question: "The fire department was quick to __________ firefighters to the scene of the blaze.",
        chinese_question: "消防部门迅速 __________ 消防员到火灾现场。",
        answers: [
            { option: "A", answer: "dispatch", chinese_answer: "派遣", chinese_romanization: "pàiqiǎn" },
            { option: "B", answer: "recall", chinese_answer: "召回", chinese_romanization: "zhàohuí" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dispatch' means to send off to a destination or for a purpose." +
            "<br><br>" +
            "(B) 'recall' means to bring (a fact, event, or situation) back into one's mind." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(A) '派遣' 意味着发送到一个目的地或出于某种目的。" +
            "<br><br>" +
            "(B) '召回' 意味着将（事实、事件或情况）重新记起。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '阻碍' 意味着制造困难，导致延误或障碍。"
    },
    {
        id: 6,
    question: "After repeated offenses, the troublesome student was __________ from the school.",
    chinese_question: "由于屡次犯错，这名问题学生被 __________ 出学校。",
    answers: [
        { option: "A", answer: "banished", chinese_answer: "放逐", chinese_romanization: "fàngzhú" },
        { option: "B", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "C", answer: "promoted", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'banished' means to send someone away from a country or place as an official punishment." +
        "<br><br>" + 
        "(B) 'praised' means to express warm approval or admiration of." +
        "<br><br>" + 
        "(C) 'promoted' means to raise someone to a higher position or rank." +
        "<br><br>" + 
        "(D) 'ignored' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(A) '放逐' 意味着作为官方惩罚将某人赶出国家或地方。" +
        "<br><br>" + 
        "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" + 
        "(C) '提升' 意味着将某人提升到更高的职位或等级。" +
        "<br><br>" + 
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 7,
        question: "The politician was quick to __________ any connection to the scandal.",
        chinese_question: "这位政治家迅速 __________ 与丑闻的任何关系。",
        answers: [
            { option: "A", answer: "acknowledge", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "B", answer: "disavow", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disavow' means to deny any responsibility or support for something." +
            "<br><br>" +
            "(A) 'acknowledge' means to accept or admit the existence or truth of." +
            "<br><br>" +
            "(C) 'accept' means to consent to receive or undertake something offered." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '否认'一词意味着否认对某事的任何责任或支持。" +
            "<br><br>" +
            "(A) '承认' 意味着接受或承认某物的存在或真实性。" +
            "<br><br>" +
            "(C) '接受' 意味着同意接受或承担提供的东西。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 8,
    question: "Regular exercise can help __________ many health problems.",
    chinese_question: "定期锻炼有助于 __________ 许多健康问题。",
    answers: [
        { option: "A", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
        { option: "B", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
        { option: "C", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'prevent' means to stop something from happening or arising." +
        "<br><br>" +
        "(A) 'invite' means to make a polite, formal, or friendly request to someone to go somewhere or to do something." +
        "<br><br>" +
        "(B) 'promote' means to further the progress of something, especially a cause, venture, or aim; support or actively encourage." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally.",
    chinese_explanation: "(C) '防止' 意味着阻止某事发生或出现。" +
        "<br><br>" +
        "(A) '邀请' 意味着礼貌、正式或友好地邀请某人去某个地方或做某事。" +
        "<br><br>" +
        "(B) '促进' 意味着促进某事的进展，尤其是事业、冒险或目标；支持或积极鼓励。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 9,
        question: "The museum decided to __________ its entire collection online for public access.",
        chinese_question: "博物馆决定将其整个收藏 __________ 上网供公众访问。",
        answers: [
            { option: "A", answer: "catalog", chinese_answer: "编目", chinese_romanization: "biānmù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
            { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'catalog' means to make a systematic list of (items of the same type)." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'discard' means to get rid of (something or someone) as no longer useful or desirable." +
            "<br><br>" +
            "(D) 'confuse' means to make (someone) unable to think clearly.",
        chinese_explanation: "(A) '编目' 意味着对（同类项目）进行系统的列表。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '丢弃' 意味着处理不再有用或不再需要的东西或人。" +
            "<br><br>" +
            "(D) '迷惑' 意味着使（某人）无法清晰思考。"
    },
    {
        id: 10,
    question: "The shady salesman tried to __________ the tourists by overcharging them for souvenirs.",
    chinese_question: "那位可疑的销售员试图通过过高收费 __________ 游客。",
    answers: [
        { option: "A", answer: "fleece", chinese_answer: "欺诈", chinese_romanization: "qīzhà" },
        { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fleece' means to deceive or swindle someone out of money." +
        "<br><br>" + 
        "(B) 'assist' means to help someone." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(A) '欺诈' 意味着骗取或诈骗某人钱财。" +
        "<br><br>" + 
        "(B) '帮助' 意味着帮助某人。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
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
