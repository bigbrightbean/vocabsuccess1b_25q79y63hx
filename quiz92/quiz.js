// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The CEO's speeches often served to __________ the company's achievements, making them seem more impressive than they were.",
    chinese_question: "首席执行官的演讲常常旨在 __________ 公司的成就，使它们看起来比实际更令人印象深刻。",
    answers: [
        { option: "A", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
        { option: "B", answer: "aggrandize", chinese_answer: "夸大", chinese_romanization: "kuādà" },
        { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "D", answer: "belittle", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'aggrandize' figuratively means to increase one's reputation or status." +
        "<br><br>" +
        "(A) 'distort' means to twist out of shape." +
        "<br><br>" +
        "(C) 'simplify' means to make less complex." +
        "<br><br>" +
        "(D) 'belittle' means to make someone or something seem less important.",
    chinese_explanation: "(B) '夸大' 一词在比喻上意味着增加某人的声誉或地位。" +
        "<br><br>" +
        "(A) '扭曲' 意味着使变形。" +
        "<br><br>" +
        "(C) '简化' 意味着使变得不复杂。" +
        "<br><br>" +
        "(D) '贬低' 意味着使某人或某物显得不那么重要。"
    },
    {
        id: 2,
    question: "The marketing team decided to __________ feedback from their customers to improve their new product.",
    chinese_question: "市场营销团队决定向客户 __________ 反馈，以改进他们的新产品。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "solicit", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
        { option: "C", answer: "hinder", chinese_answer: "妨碍", chinese_romanization: "fáng'ài" },
        { option: "D", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'solicit' means to ask for or try to obtain something from someone." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(C) 'hinder' means to create difficulties for someone or something." +
        "<br><br>" +
        "(D) 'suppress' means to forcibly put an end to.",
    chinese_explanation: "(B) '请求' 意味着向某人请求或试图从某人那里获得某物。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(C) '妨碍' 意味着给某人或某事制造困难。" +
        "<br><br>" +
        "(D) '压制' 意味着强行结束。"
    },
    {
        id: 3,
        question: "After the team lost several games, the coach decided to __________ some players to the bench.",
        chinese_question: "在球队输了几场比赛后，教练决定将一些球员 __________ 到替补席。",
        answers: [
            { option: "A", answer: "promote", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "B", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "relegate", chinese_answer: "降级", chinese_romanization: "jiàngjí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'relegate' means to assign an inferior rank or position to someone." +
            "<br><br>" +
            "(A) 'promote' means to raise someone to a higher rank or position." +
            "<br><br>" +
            "(B) 'commend' means to praise formally or officially." +
            "<br><br>" +
            "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(D) '降级' 一词意味着将某人分配到较低的级别或职位。" +
            "<br><br>" +
            "(A) '提升' 意味着将某人提升到更高的职位或级别。" +
            "<br><br>" +
            "(B) '表扬' 意味着正式或官方地赞美。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 4,
    question: "The team had to __________ with the unexpected challenges during the project.",
    chinese_question: "团队不得不 __________ 在项目过程中遇到的意外挑战。",
    answers: [
        { option: "A", answer: "grapple", chinese_answer: "努力应对", chinese_romanization: "nǔlì yìngduì" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'grapple' means to struggle or work hard to deal with or overcome something." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'dismiss' means to decide that something or someone is not worth considering." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '努力应对' 意味着努力处理或克服某事。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '驳回' 意味着认为某事或某人不值得考虑。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事变得更简单或更容易做或理解。"
    },
    {
        id: 5,
    question: "The detective suspected the two suspects of __________ to cover up the crime.",
    chinese_question: "侦探怀疑这两名嫌疑人 __________ 掩盖犯罪行为。",
    answers: [
        { option: "A", answer: "conniving", chinese_answer: "合谋", chinese_romanization: "hémóu" },
        { option: "B", answer: "assisting", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praising", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'conniving' means to secretly allow something immoral, illegal, or harmful to occur; to conspire." +
        "<br><br>" + 
        "(B) 'assisting' means to help or support." +
        "<br><br>" + 
        "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'praising' means to express warm approval or admiration.",
    chinese_explanation: "(A) '合谋' 意味着秘密允许某事发生，尤其是非法的或有害的；合谋。" +
        "<br><br>" + 
        "(B) '帮助' 意味着提供帮助或支持。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 6,
    question: "The school policy will __________ the use of mobile phones during class hours.",
    chinese_question: "学校政策将 __________ 在课堂时间使用手机。",
    answers: [
        { option: "A", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
        { option: "B", answer: "disallow", chinese_answer: "不允许", chinese_romanization: "bù yǔnxǔ" },
        { option: "C", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
        { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'disallow' means to refuse to accept as valid." +
        "<br><br>" + 
        "(A) 'allow' means to permit something to happen." +
        "<br><br>" + 
        "(C) 'promote' means to further the progress of something." +
        "<br><br>" + 
        "(D) 'enhance' means to intensify, increase, or further improve the quality or value of.",
    chinese_explanation: "(B) '不允许' 意味着拒绝接受为有效。" +
        "<br><br>" + 
        "(A) '允许' 意味着允许某事发生。" +
        "<br><br>" + 
        "(C) '促进' 意味着推进某事的进展。" +
        "<br><br>" + 
        "(D) '提高' 意味着加强、增加或进一步改善质量或价值。"
    },
    {
        id: 7,
    question: "No matter how delicious the meal was, she would always find something to __________ about.",
    chinese_question: "无论这顿饭多么美味，她总能找到 __________ 的理由。",
    answers: [
        { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "carp", chinese_answer: "吹毛求疵", chinese_romanization: "chuīmáoqiúcī" },
        { option: "C", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'carp' means to complain or find fault continually about trivial matters." +
        "<br><br>" + 
        "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" + 
        "(C) 'admire' means to regard with respect or warm approval." +
        "<br><br>" + 
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '吹毛求疵' 意味着对琐事不断地抱怨或挑剔。" +
        "<br><br>" + 
        "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
        "<br><br>" + 
        "(C) '钦佩' 意味着以尊重或热烈的赞同态度对待。" +
        "<br><br>" + 
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
    question: "The director began to __________ the cast for not taking the rehearsal seriously.",
    chinese_question: "导演开始 __________ 演员们没有认真对待排练。",
    answers: [
        { option: "A", answer: "berate", chinese_answer: "责骂", chinese_romanization: "zémà" },
        { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "applaud", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'berate' means to scold or criticize someone angrily." +
        "<br><br>" + 
        "(B) 'praise' means to express warm approval or admiration of." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'applaud' means to show approval or praise by clapping.",
    chinese_explanation: "(A) '责骂' 意味着愤怒地责备或批评某人。" +
        "<br><br>" + 
        "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '鼓掌' 意味着通过拍手表示赞同或赞美。"
    },
    {
        id: 9,
    question: "The scandal __________ the team's reputation, leading to a loss of support from fans.",
    chinese_question: "丑闻 __________ 了团队的声誉，导致失去了粉丝的支持。",
    answers: [
        { option: "A", answer: "elevated", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "B", answer: "sullied", chinese_answer: "玷污", chinese_romanization: "diànwū" },
        { option: "C", answer: "preserved", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sullied' means to damage the purity or integrity of; defile." +
        "<br><br>" +
        "(A) 'elevated' means to raise or lift to a higher position." +
        "<br><br>" +
        "(C) 'preserved' means to maintain something in its original or existing state." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of.",
    chinese_explanation: "(B) '玷污' 意味着损害纯洁性或完整性；玷污。" +
        "<br><br>" +
        "(A) '提升' 意味着提高到更高的位置。" +
        "<br><br>" +
        "(C) '保护' 意味着保持某物的原始或现有状态。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 10,
        question: "The long trek through the desert began to __________ their water supplies, leaving the travelers in a dire situation.",
        chinese_question: "穿越沙漠的漫长跋涉开始 __________ 他们的水供应，使旅行者陷入困境。",
        answers: [
            { option: "A", answer: "augment", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "replenish", chinese_answer: "补充", chinese_romanization: "bǔchōng" },
            { option: "C", answer: "amass", chinese_answer: "积聚", chinese_romanization: "jījù" },
            { option: "D", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'deplete' means to use up the supply or resources of something." +
            "<br><br>" +
            "(A) 'augment' means to make something greater by adding to it; increase." +
            "<br><br>" +
            "(B) 'replenish' means to fill something up again." +
            "<br><br>" +
            "(C) 'amass' means to gather together or accumulate a large amount or number of valuable material or things over a period of time.",
        chinese_explanation: "(D) '耗尽' 意味着用光某物的供应或资源。" +
            "<br><br>" +
            "(A) '增加' 意味着通过添加使某物变得更大；增加。" +
            "<br><br>" +
            "(B) '补充' 意味着再次填满某物。" +
            "<br><br>" +
            "(C) '积聚' 意味着在一段时间内收集或积累大量有价值的材料或物品。"
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
