// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The factory was built to __________ high-quality electronics for consumers worldwide.",
    chinese_question: "这家工厂是为了 __________ 高质量的电子产品给全球消费者而建造的。",
    answers: [
        { option: "A", answer: "manufacture", chinese_answer: "生产", chinese_romanization: "shēngchǎn" },
        { option: "B", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "sell", chinese_answer: "销售", chinese_romanization: "xiāoshòu" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'manufacture' means to make something, especially on a large scale using machinery." +
        "<br><br>" + 
        "(B) 'destroy' means to put an end to the existence of something." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'sell' means to give or hand over something in exchange for money.",
    chinese_explanation: "(A) '生产' 意味着制作某物，尤其是使用机械大规模制作。" +
        "<br><br>" + 
        "(B) '破坏' 意味着终结某物的存在。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '销售' 意味着用钱交换物品。"
    },
    {
        id: 2,
    question: "The students couldn't __________ laughing at the funny joke the teacher told.",
    chinese_question: "学生们忍不住 __________ 老师讲的那个笑话。",
    answers: [
        { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
        { option: "B", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
        { option: "C", answer: "share", chinese_answer: "分享", chinese_romanization: "fēnxiǎng" },
        { option: "D", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'resist' means to withstand the action or effect of." +
        "<br><br>" +
        "(B) 'enjoy' means to take delight or pleasure in." +
        "<br><br>" +
        "(C) 'share' means to have a portion of something with another or others." +
        "<br><br>" +
        "(D) 'continue' means to persist in an activity or process.",
    chinese_explanation: "(A) '抵抗' 意味着经受住某事的作用或影响。" +
        "<br><br>" +
        "(B) '享受' 意味着享受或享受。" +
        "<br><br>" +
        "(C) '分享' 意味着与他人分享某物的一部分。" +
        "<br><br>" +
        "(D) '继续' 意味着坚持进行某项活动或过程。"
    },
    {
        id: 3,
    question: "The manager's swift action helped to __________ the rumours before they could spread further.",
    chinese_question: "经理的迅速行动帮助 __________ 谣言，防止其进一步传播。",
    answers: [
        { option: "A", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbō" },
        { option: "B", answer: "quash", chinese_answer: "镇压", chinese_romanization: "zhènyā" },
        { option: "C", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'quash' means to suppress or put an end to forcibly." +
        "<br><br>" +
        "(A) 'spread' means to extend over a large or increasing area." +
        "<br><br>" +
        "(C) 'validate' means to check or prove the validity of something." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something.",
    chinese_explanation: "(B) '镇压' 意味着强行压制或终止。" +
        "<br><br>" +
        "(A) '传播' 意味着在较大或增加的区域内延伸。" +
        "<br><br>" +
        "(C) '验证' 意味着检查或证明某物的有效性。" +
        "<br><br>" +
        "(D) '支持' 意味着承担某物的全部或部分重量。"
    },
    {
        id: 4,
        question: "The success of the first movie __________ a series of sequels and merchandise.",
        chinese_question: "第一部电影的成功 __________ 了一系列的续集和商品。",
        answers: [
            { option: "A", answer: "spawned", chinese_answer: "产生", chinese_romanization: "chǎnshēng" },
            { option: "B", answer: "ended", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "C", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spawned' means to generate or bring forth." +
            "<br><br>" +
            "(B) 'ended' means to bring to a conclusion." +
            "<br><br>" +
            "(C) 'hindered' means to create difficulties for someone or something, resulting in delay or obstruction." +
            "<br><br>" +
            "(D) 'neglected' means to fail to care for properly.",
        chinese_explanation: "(A) '产生' 意味着生成或引发。" +
            "<br><br>" +
            "(B) '结束' 意味着带来结论。" +
            "<br><br>" +
            "(C) '阻碍' 意味着制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 5,
    question: "Farmers __________ on good weather for a successful harvest.",
    chinese_question: "农民 __________ 好天气来获得丰收。",
    answers: [
        { option: "A", answer: "thrive", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "B", answer: "rely", chinese_answer: "依赖", chinese_romanization: "yīlài" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "fear", chinese_answer: "害怕", chinese_romanization: "hàipà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rely' means to depend on with full trust or confidence." +
        "<br><br>" +
        "(A) 'thrive' means to grow or develop well or vigorously." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'fear' means to be afraid of someone or something as likely to be dangerous, painful, or threatening.",
    chinese_explanation: "(B) '依赖' 意味着完全信任或依赖。" +
        "<br><br>" +
        "(A) '繁荣' 意味着良好或旺盛地生长或发展。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(D) '害怕' 意味着对某人或某物可能是危险的、痛苦的或威胁的感到害怕。"
    },
    {
        id: 6,
        question: "After graduating from high school, he __________ in the army to serve his country.",
        chinese_question: "高中毕业后，他 __________ 参军为国效力。",
        answers: [
            { option: "A", answer: "resigned", chinese_answer: "辞职", chinese_romanization: "cízhí" },
            { option: "B", answer: "retired", chinese_answer: "退休", chinese_romanization: "tuìxiū" },
            { option: "C", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "D", answer: "enlisted", chinese_answer: "入伍", chinese_romanization: "rùwǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enlisted' means enrolled or signed up for military service." +
            "<br><br>" +
            "(A) 'resigned' means voluntarily leaving a job or position." +
            "<br><br>" +
            "(B) 'retired' means leaving one's job and ceasing to work after reaching a certain age." +
            "<br><br>" +
            "(C) 'dismissed' means being let go from a job or position.",
        chinese_explanation: "(D) '入伍' 意味着报名或签约参加军队服役。" +
            "<br><br>" +
            "(A) '辞职' 意味着自愿离开工作或职位。" +
            "<br><br>" +
            "(B) '退休' 意味着在达到一定年龄后离开工作并停止工作。" +
            "<br><br>" +
            "(C) '解雇' 意味着被解雇离开工作或职位。"
    },
    {
        id: 7,
    question: "The lawyer discovered that his client had been __________ by a fake investment scheme.",
    chinese_question: "律师发现他的客户被一个假投资计划 __________ 了。",
    answers: [
        { option: "A", answer: "protected", chinese_answer: "保护",

 chinese_romanization: "bǎohù" },
        { option: "B", answer: "swindled", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "C", answer: "advised", chinese_answer: "建议", chinese_romanization: "jiànyì" },
        { option: "D", answer: "consulted", chinese_answer: "咨询", chinese_romanization: "zīxún" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'swindled' means to deceive someone in order to take their money or possessions." +
        "<br><br>" +
        "(A) 'protected' means to keep safe from harm or injury." +
        "<br><br>" +
        "(C) 'advised' means to offer suggestions about the best course of action." +
        "<br><br>" +
        "(D) 'consulted' means to seek information or advice from someone.",
    chinese_explanation: "(B) '欺骗' 意味着为了骗取某人的钱或财物而欺骗某人。" +
        "<br><br>" +
        "(A) '保护' 意味着使免受伤害或伤害。" +
        "<br><br>" +
        "(C) '建议' 意味着提供关于最佳行动方案的建议。" +
        "<br><br>" +
        "(D) '咨询' 意味着向某人寻求信息或建议。"
    },
    {
        id: 8,
        question: "The old pipes in the basement had __________ over the years, causing leaks and water damage.",
        chinese_question: "地下室的旧管道经过多年 __________，导致泄漏和水损坏。",
        answers: [
            { option: "A", answer: "corroded", chinese_answer: "腐蚀", chinese_romanization: "fǔshí" },
            { option: "B", answer: "polished", chinese_answer: "抛光", chinese_romanization: "pāoguāng" },
            { option: "C", answer: "repaired", chinese_answer: "修复", chinese_romanization: "xiūfù" },
            { option: "D", answer: "installed", chinese_answer: "安装", chinese_romanization: "ānzhuāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'corroded' means damaged or worn away gradually by chemical action." +
            "<br><br>" +
            "(B) 'polished' means made smooth and shiny by rubbing." +
            "<br><br>" +
            "(C) 'repaired' means fixed or mended." +
            "<br><br>" +
            "(D) 'installed' means put in place for use or service.",
        chinese_explanation: "(A) '腐蚀' 意味着被化学作用逐渐损坏或磨损。" +
            "<br><br>" +
            "(B) '抛光' 意味着通过摩擦使其光滑和有光泽。" +
            "<br><br>" +
            "(C) '修复' 意味着修理或修补。" +
            "<br><br>" +
            "(D) '安装' 意味着放置到位以供使用或服务。"
    },
    {
        id: 9,
        question: "He felt constantly __________ by his younger brother's endless questions.",
        chinese_question: "他感到被弟弟无休止的问题__________。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "badgered", chinese_answer: "骚扰", chinese_romanization: "sāorǎo" },
            { option: "C", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "appreciated", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'badgered' means repeatedly ask (someone) to do something; pester." +
            "<br><br>" +
            "(A) 'ignored' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'assisted' means helped (someone), typically by doing a share of the work." +
            "<br><br>" +
            "(D) 'appreciated' means recognized the full worth of.",
        chinese_explanation: "(B) '骚扰' 一词意味着反复要求（某人）做某事；纠缠。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助（某人），通常是通过分担工作。" +
            "<br><br>" +
            "(D) '感谢' 意味着认识到的全部价值。"
    },
    {
        id: 10,
    question: "The teacher __________ the students for talking during the lecture, reminding them to be respectful.",
    chinese_question: "老师 __________ 学生在讲座期间讲话，提醒他们要尊重他人。",
    answers: [
        { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "upbraided", chinese_answer: "斥责", chinese_romanization: "chìzé" },
        { option: "C", answer: "rewarded", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'upbraided' means to scold or criticize someone severely." +
        "<br><br>" +
        "(A) 'praised' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'rewarded' means to give something to someone in recognition of their services, efforts, or achievements." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '斥责' 一词意味着严厉地责骂或批评某人。" +
        "<br><br>" +
        "(A) '赞美' 意味着表示热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
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
