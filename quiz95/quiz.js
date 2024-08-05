// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team's colors were __________ across the stadium, creating a vibrant atmosphere.",
        chinese_question: "球队的颜色 __________ 在整个体育场，营造出充满活力的氛围。",
        answers: [
            { option: "A", answer: "removed", chinese_answer: "移除", chinese_romanization: "yíchú" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "darkened", chinese_answer: "变暗", chinese_romanization: "biàn àn" },
            { option: "D", answer: "emblazoned", chinese_answer: "醒目地展示", chinese_romanization: "xǐngmù dì zhǎnshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'emblazoned' means to display a design prominently or vividly." +
            "<br><br>" +
            "(A) 'removed' means to take something away or off." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'darkened' means to make or become dark.",
        chinese_explanation: "(D) '醒目地展示' 意味着突出或生动地展示设计。" +
            "<br><br>" +
            "(A) '移除' 意味着将某物移走或拿开。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '变暗' 意味着变暗或使变暗。"
    },
    {
        id: 2,
    question: "The player's poor performance led the fans to __________ from the stands.",
    chinese_question: "球员的糟糕表现导致球迷从看台上 __________。",
    answers: [
        { option: "A", answer: "jeer", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
        { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jeer' means to make rude and mocking remarks, typically in a loud voice, used figuratively here." +
        "<br><br>" +
        "(B) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to give assistance to.",
    chinese_explanation: "(A) '嘲笑' 意味着大声发表粗鲁和嘲弄的言论，这里是比喻用法。" +
        "<br><br>" +
        "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 3,
        question: "The controversial author was __________ by critics but continued to have a devoted following among readers.",
        chinese_question: "这位有争议的作者遭到批评家们的 __________，但在读者中仍然有忠实的追随者。",
        answers: [
            { option: "A", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "embraced", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "honored", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "D", answer: "reviled", chinese_answer: "痛骂", chinese_romanization: "tòng mà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reviled' means to criticize in an abusive or angrily insulting manner." +
            "<br><br>" +
            "(A) 'celebrated' means to acknowledge a significant event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'embraced' means to accept or support willingly and enthusiastically." +
            "<br><br>" +
            "(C) 'honored' means to regard with great respect.",
        chinese_explanation: "(D) '痛骂' 一词意味着以辱骂或愤怒的方式批评。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快活动来承认一个重要事件。" +
            "<br><br>" +
            "(B) '接受' 意味着愿意并热情地接受或支持。" +
            "<br><br>" +
            "(C) '尊敬' 意味着以高度尊重的态度对待。"
    },
    {
        id: 4,
    question: "A low hum began to __________ from the machine as it powered up.",
    chinese_question: "当机器启动时，低沉的嗡嗡声开始 __________ 出来。",
    answers: [
        { option: "A", answer: "emanate", chinese_answer: "发出", chinese_romanization: "fāchū" },
        { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'emanate' means to issue or spread out from a source." +
        "<br><br>" +
        "(B) 'conceal' means to keep from being seen; hide." +
        "<br><br>" +
        "(C) 'diminish' means to make or become less." +
        "<br><br>" +
        "(D) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
    chinese_explanation: "(A) '发出' 意味着从源头发出或散发。" +
        "<br><br>" +
        "(B) '隐藏' 意味着防止被看到；隐藏。" +
        "<br><br>" +
        "(C) '减少' 意味着减少或变少。" +
        "<br><br>" +
        "(D) '拒绝' 意味着因不充分、不接受或有缺陷而驳回。"
    },
    {
        id: 5,
        question: "Her silence was __________ by her friends as a sign of disapproval, though she was merely lost in thought.",
        chinese_question: "她的沉默被朋友 __________ 为不赞成的表示，虽然她只是陷入了沉思。",
        answers: [
            { option: "A", answer: "explained", chinese_answer: "解释", chinese_romanization: "jiěshì" },
            { option: "B", answer: "appreciated", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "misconstrued", chinese_answer: "曲解", chinese_romanization: "qūjiě" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'misconstrued' means to interpret something, especially a person's words or actions, wrongly." +
            "<br><br>" +
            "(A) 'explained' means to make something clear by describing it in more detail." +
            "<br><br>" +
            "(B) 'appreciated' means to recognize the full worth of something." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of.",
        chinese_explanation: "(D) '曲解' 意味着错误地解释某事，特别是某人的话或行为。" +
            "<br><br>" +
            "(A) '解释' 意味着通过更详细的描述使某事清楚。" +
            "<br><br>" +
            "(B) '欣赏' 意味着认识到某物的全部价值。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意。"
    },
    {
        id: 6,
    question: "Despite company policies, some employees were found to __________ with competitors during the conference.",
    chinese_question: "尽管公司有相关政策，一些员工在会议期间被发现与竞争对手 __________ 。",
    answers: [
        { option: "A", answer: "fraternize", chinese_answer: "结交", chinese_romanization: "jiéjiāo" },
        { option: "B", answer: "alienate", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" },
        { option: "C", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "D", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fraternize' means to associate or form a friendship with someone, especially when one is not supposed to." +
        "<br><br>" +
        "(B) 'alienate' means to cause someone to feel isolated or estranged." +
        "<br><br>" +
        "(C) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'confront' means to face up to and deal with a problem or difficult situation.",
    chinese_explanation: "(A) '结交' 意味着与某人交往或形成友谊，尤其是在不应该这样做的时候。" +
        "<br><br>" +
        "(B) '疏远' 意味着使某人感到孤立或疏远。" +
        "<br><br>" +
        "(C) '避免' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(D) '面对' 意味着面对并处理一个问题或困难的情况。"
    },
    {
        id: 7,
    question: "He did not hesitate to __________ his intentions to become the best in his field, declaring his goals openly to everyone in his profession.",
    chinese_question: "他毫不犹豫地 __________ 他成为该领域最佳的意图，向该行业的所有人公开宣布他的目标。",
    answers: [
        { option: "A", answer: "avow", chinese_answer: "坦白", chinese_romanization: "tǎnbái" },
        { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'avow' means to assert or confess openly." +
        "<br><br>" + 
        "(B) 'conceal' means to keep something secret." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'dismiss' means to decide that something or someone is not important and not worth considering.",
    chinese_explanation: "(A) '坦白' 意味着公开断言或承认。" +
        "<br><br>" + 
        "(B) '隐藏' 意味着保密某事。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '驳回' 意味着决定某事或某人不重要且不值得考虑。"
    },
    {
        id: 8,
        question: "It later __________ that the mysterious donor was actually a well-known philanthropist in disguise.",
        chinese_question: "后来 __________ 神秘的捐赠者其实是一位乔装打扮的知名慈善家。",
        answers: [
            { option: "A", answer: "disappeared", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
            { option: "B", answer: "deteriorated", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "C", answer: "confused", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "D", answer: "transpired", chinese_answer: "透露", chinese_romanization: "tòulù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'transpired' figuratively means to become known or revealed." +
            "<br><br>" +
            "(A) 'disappeared' means to vanish." +
            "<br><br>" +
            "(B) 'deteriorated' means to become worse." +
            "<br><br>" +
            "(C) 'confused' means to make unclear.",
        chinese_explanation: "(D) '透露' 一词在比喻上意味着变得为人所知或被揭示。" +
            "<br><br>" +
            "(A) '消失' 意味着消失。" +
            "<br><br>" +
            "(B) '恶化' 意味着变得更糟。" +
            "<br><br>" +
            "(C) '混淆' 意味着使不清楚。"
    },
    {
        id: 9,
    question: "The health expert __________ the public to adopt healthier eating habits.",
    chinese_question: "健康专家 __________ 公众养成更健康的饮食习惯。",
    answers: [
        { option: "A", answer: "discouraged", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "exhorted", chinese_answer: "力劝", chinese_romanization: "lìquàn" },
        { option: "D", answer: "belittled", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'exhorted' used figuratively means to strongly encourage or urge someone to think or act in a certain way." +
        "<br><br>" + 
        "(A) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
        "<br><br>" + 
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'belittled' means to make someone or something seem less impressive or important.",
    chinese_explanation: "(C) '力劝' 在比喻意义上指强烈鼓励或敦促某人以某种方式思考或行动。" +
        "<br><br>" + 
        "(A) '阻止' 意味着使某人失去信心或热情。" +
        "<br><br>" + 
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '贬低' 意味着使某人或某物显得不那么令人印象深刻或重要。"
    },
    {
        id: 10,
    question: "The community leaders gathered to __________ the recent acts of vandalism in the neighborhood.",
    chinese_question: "社区领导人聚集在一起 __________ 最近在社区发生的破坏行为。",
    answers: [
        { option: "A", answer: "decry", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
        { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'decry' means to publicly denounce or criticize." +
        "<br><br>" + 
        "(B) 'praise' means to express warm approval or admiration." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '谴责' 意味着公开谴责或批评。" +
        "<br><br>" + 
        "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
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
