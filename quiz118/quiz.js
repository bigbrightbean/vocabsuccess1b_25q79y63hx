// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Before starting the experiment, the scientist had to __________ the scales to get precise results.",
        chinese_question: "在开始实验之前，科学家必须 __________ 秤以获得精确的结果。",
        answers: [
            { option: "A", answer: "calibrate", chinese_answer: "校准", chinese_romanization: "xiàozhǔn" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dismantle", chinese_answer: "拆卸", chinese_romanization: "chāixiè" },
            { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'calibrate' means to adjust (a measuring instrument) to ensure its accuracy." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dismantle' means to take (a machine or structure) to pieces." +
            "<br><br>" +
            "(D) 'confuse' means to make (someone) unable to think clearly.",
        chinese_explanation: "(A) '校准' 意味着调整（测量仪器）以确保其准确性。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '拆卸' 意味着将（机器或结构）拆成碎片。" +
            "<br><br>" +
            "(D) '迷惑' 意味着使（某人）无法清晰思考。"
    },
    {
        id: 2,
    question: "The unfair decision by the judge seemed to __________ the defendant, causing him great distress.",
    chinese_question: "法官的不公平裁决似乎 __________ 被告，使他非常痛苦。",
    answers: [
        { option: "A", answer: "aggrieve", chinese_answer: "使痛苦", chinese_romanization: "shǐ tòngkǔ" },
        { option: "B", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "delight", chinese_answer: "使高兴", chinese_romanization: "shǐ gāoxìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'aggrieve' means to cause distress or affliction." +
        "<br><br>" + 
        "(B) 'comfort' means to soothe or console." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'delight' means to please greatly.",
    chinese_explanation: "(A) '使痛苦' 意味着引起痛苦或苦难。" +
        "<br><br>" + 
        "(B) '安慰' 意味着抚慰或安慰。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '使高兴' 意味着使人非常愉快。"
    },
    {
        id: 3,
    question: "The teacher tried to __________ the discussion towards more productive topics.",
    chinese_question: "老师试图将讨论 __________ 向更有成效的话题。",
    answers: [
        { option: "A", answer: "steer", chinese_answer: "引导", chinese_romanization: "yǐndǎo" },
        { option: "B", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
        { option: "C", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "D", answer: "distract", chinese_answer: "分心", chinese_romanization: "fēn xīn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'steer' means to guide or control the movement or course of something." +
        "<br><br>" +
        "(B) 'end' means to bring or come to a conclusion." +
        "<br><br>" +
        "(C) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'distract' means to prevent someone from giving full attention to something.",
    chinese_explanation: "(A) '引导' 意味着引导或控制某物的运动或进程。" +
        "<br><br>" +
        "(B) '结束' 意味着使或达到结论。" +
        "<br><br>" +
        "(C) '避免' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(D) '分心' 意味着阻止某人全神贯注于某事。"
    },
    {
        id: 4,
        question: "He quickly __________ out of the way to avoid being hit by the ball.",
        chinese_question: "为了避免被球击中，他迅速__________到了一边。",
        answers: [
            { option: "A", answer: "dodged", chinese_answer: "闪避", chinese_romanization: "shǎnbì" },
            { option: "B", answer: "faced", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "C", answer: "confronted", chinese_answer: "对抗", chinese_romanization: "duìkàng" },
            { option: "D", answer: "tackled", chinese_answer: "处理", chinese_romanization: "chǔlǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dodged' means to move quickly to avoid someone or something." +
            "<br><br>" +
            "(B) 'faced' means to confront and deal with or accept." +
            "<br><br>" +
            "(C) 'confronted' means to face up to and deal with (a problem or difficult situation)." +
            "<br><br>" +
            "(D) 'tackled' means to make determined efforts to deal with (a problem or difficult task).",
        chinese_explanation: "(A) '闪避' 一词意味着迅速移动以避开某人或某物。" +
            "<br><br>" +
            "(B) '面对' 意味着面对和处理或接受。" +
            "<br><br>" +
            "(C) '对抗' 意味着面对和处理（问题或困难情况）。" +
            "<br><br>" +
            "(D) '处理' 意味着努力应对（问题或困难任务）。"
    },
    {
        id: 5,
        question: "He tried to __________ a new way to organize his schedule.",
        chinese_question: "他试图 __________ 一种新的方法来安排他的日程。",
        answers: [
            { option: "A", answer: "devise", chinese_answer: "设计", chinese_romanization: "shèjì" },
            { option: "B", answer: "disrupt", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'devise' means to plan or invent (a complex procedure, system, or mechanism) by careful thought." +
            "<br><br>" +
            "(B) 'disrupt' means to interrupt (an event, activity, or process) by causing a disturbance or problem." +
            "<br><br>" +
            "(C) 'abandon' means to give up completely." +
            "<br><br>" +
            "(D) 'confuse' means to make (someone) unable to think clearly.",
        chinese_explanation: "(A) '设计' 意味着通过仔细思考来计划或发明（复杂的程序、系统或机制）。" +
            "<br><br>" +
            "(B) '打扰' 意味着通过制造干扰或问题来中断（事件、活动或过程）。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(D) '迷惑' 意味着使（某人）无法清晰思考。"
    },
    {
        id: 6,
        question: "The data from various sources were __________ to form a single report.",
        chinese_question: "来自各种来源的数据被 __________ 起来，形成了一份报告。",
        answers: [
            { option: "A", answer: "aggregated", chinese_answer: "汇总", chinese_romanization: "huìzǒng" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "separated", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "D", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aggregated' means to collect and combine (several separate elements) into a whole." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'separated' means to cause to move or be apart." +
            "<br><br>" +
            "(D) 'simplified' means to make (something) simpler or easier to do or understand.",
        chinese_explanation: "(A) '汇总' 意味着收集和组合（几个独立元素）成一个整体。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '分离' 意味着使移动或分开。" +
            "<br><br>" +
            "(D) '简化' 意味着使（某事物）更简单或更容易做或理解。"
    },
    {
        id: 7,
        question: "The campfire began to __________ a soft, warm glow as the night grew darker.",
        chinese_question: "随着夜色加深，篝火开始 __________ 柔和温暖的光芒。",
        answers: [
            { option: "A", answer: "emit", chinese_answer: "发出", chinese_romanization: "fāchū" },
            { option: "B", answer: "extinguish", chinese_answer: "熄灭", chinese_romanization: "xīmiè" },
            { option: "C", answer: "absorb", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emit' means to produce and discharge (something, especially gas or radiation)." +
            "<br><br>" +
            "(B) 'extinguish' means to cause (a fire or light) to cease to burn or shine." +
            "<br><br>" +
            "(C) 'absorb' means to take in or soak up (energy or a liquid or other substance)." +
            "<br><br>" +
            "(D) 'conceal' means to keep from being seen; hide.",
        chinese_explanation: "(A) '发出' 意味着产生并释放（某物，尤其是气体或辐射）。" +
            "<br><br>" +
            "(B) '熄灭' 意味着使（火或光）停止燃烧或发光。" +
            "<br><br>" +
            "(C) '吸收' 意味着吸收（能量或液体或其他物质）。" +
            "<br><br>" +
            "(D) '隐藏' 意味着使看不见；隐藏。"
    },
    {
        id: 8,
        question: "Her birthday __________ with the annual town festival, making it a double celebration.",
        chinese_question: "她的生日与年度镇节日 __________，使其成为双重庆祝。",
        answers: [
            { option: "A", answer: "contrasts", chinese_answer: "对比", chinese_romanization: "duìbǐ" },
            { option: "B", answer: "coincides", chinese_answer: "同时发生", chinese_romanization: "tóngshí fāshēng" },
            { option: "C", answer: "conflicts", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
            { option: "D", answer: "separates", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coincides' means to occur at the same time." +
            "<br><br>" +
            "(A) 'contrasts' means to differ strikingly." +
            "<br><br>" +
            "(C) 'conflicts' means to be incompatible or at variance; clash." +
            "<br><br>" +
            "(D) 'separates' means to cause to move or be apart.",
        chinese_explanation: "(B) '同时发生'一词意味着在同一时间发生。" +
            "<br><br>" +
            "(A) '对比' 意味着显著不同。" +
            "<br><br>" +
            "(C) '冲突' 意味着不相容或有差异；冲突。" +
            "<br><br>" +
            "(D) '分离' 意味着使分开或分离。"
    },
    {
        id: 9,
    question: "Instead of offering constructive feedback, he chose to __________ his colleague's suggestions.",
    chinese_question: "他没有提供建设性的反馈，而是选择 __________ 同事的建议。",
    answers: [
        { option: "A", answer: "value", chinese_answer: "重视", chinese_romanization: "zhòngshì" },
        { option: "B", answer: "deride", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
        { option: "C", answer: "consider", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
        { option: "D", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'deride' means to express contempt for; ridicule." +
        "<br><br>" +
        "(A) 'value' means to consider something to be important or beneficial." +
        "<br><br>" +
        "(C) 'consider' means to think carefully about something." +
        "<br><br>" +
        "(D) 'accept' means to consent to receive or undertake something.",
    chinese_explanation: "(B) '嘲笑' 意味着表达蔑视；嘲弄。" +
        "<br><br>" +
        "(A) '重视' 意味着认为某事重要或有益。" +
        "<br><br>" +
        "(C) '考虑' 意味着仔细考虑某事。" +
        "<br><br>" +
        "(D) '接受' 意味着同意接收或承担某事。"
    },
    {
        id: 10,
    question: "The chef worked tirelessly to __________ the recipe for the perfect souffle.",
    chinese_question: "这位厨师不知疲倦地工作，终于 __________ 了制作完美蛋奶酥的食谱。",
    answers: [
        { option: "A", answer: "ruin", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
        { option: "B", answer: "master", chinese_answer: "精通", chinese_romanization: "jīngtōng" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'master' means to become highly skilled or proficient in a particular area." +
        "<br><br>" + 
        "(A) 'ruin' means to spoil or destroy." +
        "<br><br>" + 
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" + 
        "(D) 'abandon' means to give up completely.",
    chinese_explanation: "(B) “精通” 意味着在某一特定领域变得非常熟练或精通。" +
        "<br><br>" + 
        "(A) '毁坏' 意味着破坏或摧毁。" +
        "<br><br>" + 
        "(C) '忽视' 意味着未能适当照顾。" +
        "<br><br>" + 
        "(D) '放弃' 意味着完全放弃。"
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
