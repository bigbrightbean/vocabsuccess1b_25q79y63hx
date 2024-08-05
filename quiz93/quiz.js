// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The condition of the abandoned house __________ potential buyers.",
    chinese_question: "废弃房屋的状况 __________ 了潜在买家。",
    answers: [
        { option: "A", answer: "attracted", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
        { option: "B", answer: "repulsed", chinese_answer: "使厌恶", chinese_romanization: "shǐ yànwù" },
        { option: "C", answer: "comforted", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
        { option: "D", answer: "entertained", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'repulsed' means to cause someone to feel intense distaste and aversion." +
        "<br><br>" +
        "(A) 'attracted' means to cause someone to have a liking for or interest in something." +
        "<br><br>" +
        "(C) 'comforted' means to soothe or console someone." +
        "<br><br>" +
        "(D) 'entertained' means to provide someone with amusement or enjoyment.",
    chinese_explanation: "(B) '使厌恶' 意味着使某人感到强烈的反感和厌恶。" +
        "<br><br>" +
        "(A) '吸引' 意味着使某人对某事物产生喜欢或兴趣。" +
        "<br><br>" +
        "(C) '安慰' 意味着安抚或安慰某人。" +
        "<br><br>" +
        "(D) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 2,
    question: "The antique chair looked brand new after the craftsman skillfully __________ it with high-quality fabric.",
    chinese_question: "工匠用高质量的面料熟练地 __________ 了这把古董椅，使其看起来焕然一新。",
    answers: [
        { option: "A", answer: "dismantled", chinese_answer: "拆卸", chinese_romanization: "chāixiè" },
        { option: "B", answer: "upholstered", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
        { option: "C", answer: "tarnished", chinese_answer: "使失去光泽", chinese_romanization: "shǐ shīqù guāngzé" },
        { option: "D", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'upholstered' means to provide furniture with a soft, padded covering." +
        "<br><br>" +
        "(A) 'dismantled' means to take apart." +
        "<br><br>" +
        "(C) 'tarnished' means to lose luster." +
        "<br><br>" +
        "(D) 'neglected' means to fail to care for.",
    chinese_explanation: "(B) '装饰' 一词意味着为家具提供柔软的衬垫覆盖物。" +
        "<br><br>" +
        "(A) '拆卸' 意味着拆开。" +
        "<br><br>" +
        "(C) '使失去光泽' 意味着失去光泽。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能照顾。"
    },
    {
        id: 3,
    question: "Seeing the rain begin to pour, she decided to __________ back home as quickly as possible.",
    chinese_question: "看到开始下雨，她决定尽快 __________ 回家。",
    answers: [
        { option: "A", answer: "stroll", chinese_answer: "漫步", chinese_romanization: "mànbù" },
        { option: "B", answer: "scuttle", chinese_answer: "快跑", chinese_romanization: "kuàipǎo" },
        { option: "C", answer: "wander", chinese_answer: "闲逛", chinese_romanization: "xiánguàng" },
        { option: "D", answer: "meander", chinese_answer: "蜿蜒", chinese_romanization: "wānyán" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'scuttle' means to move quickly with short, hurried steps." +
        "<br><br>" +
        "(A) 'stroll' means to walk in a leisurely way." +
        "<br><br>" +
        "(C) 'wander' means to walk or move in a leisurely, casual, or aimless way." +
        "<br><br>" +
        "(D) 'meander' means to follow a winding course.",
    chinese_explanation: "(B) '快跑' 意味着以短而急的步伐快速移动。" +
        "<br><br>" +
        "(A) '漫步' 意味着悠闲地走。" +
        "<br><br>" +
        "(C) '闲逛' 意味着悠闲、随意或无目的地走动。" +
        "<br><br>" +
        "(D) '蜿蜒' 意味着沿着弯曲的路线前进。"
    },
    {
        id: 4,
    question: "The company was accused of __________ safety reports to avoid penalties.",
    chinese_question: "该公司被指控 __________ 安全报告以避免处罚。",
    answers: [
        { option: "A", answer: "fabricating", chinese_answer: "伪造", chinese_romanization: "wěizào" },
        { option: "B", answer: "auditing", chinese_answer: "审计", chinese_romanization: "shěnjì" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "submitting", chinese_answer: "提交", chinese_romanization: "tíjiāo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fabricating' means to invent or concoct something, typically with deceitful intent." +
        "<br><br>" + 
        "(B) 'auditing' means to conduct an official financial inspection." +
        "<br><br>" + 
        "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'submitting' means to present for consideration or judgment.",
    chinese_explanation: "(A) '伪造' 意味着发明或编造某物，通常是出于欺骗目的。" +
        "<br><br>" + 
        "(B) '审计' 意味着进行正式的财务检查。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '提交' 意味着提交以供考虑或判断。"
    },
    {
        id: 5,
    question: "The breathtaking view from the mountaintop __________ every hiker who made it to the summit.",
    chinese_question: "山顶的美景 __________ 了每一个登顶的徒步旅行者。",
    answers: [
        { option: "A", answer: "enthralled", chinese_answer: "迷住了", chinese_romanization: "mízhùle" },
        { option: "B", answer: "bored", chinese_answer: "使厌烦", chinese_romanization: "shǐ yànfán" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "confused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enthralled' means to capture the fascinated attention of someone, used figuratively here." +
        "<br><br>" + 
        "(B) 'bored' means to make someone feel weary and uninterested." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'confused' means to make someone bewildered or perplexed.",
    chinese_explanation: "(A) '迷住了' 意味着吸引某人的注意力，这里是比喻用法。" +
        "<br><br>" + 
        "(B) '使厌烦' 意味着使某人感到厌倦和无趣。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '使困惑' 意味着使某人困惑或不解。"
    },
    {
        id: 6,
        question: "The dark clouds on the horizon seemed to __________ a storm.",
        chinese_question: "地平线上的乌云似乎 __________ 暴风雨。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "assure", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
            { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "forebode", chinese_answer: "预示", chinese_romanization: "yùshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'forebode' means to act as a warning or indication of a future event." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'assure' means to tell someone something positively to dispel any doubts." +
            "<br><br>" +
            "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(D) '预示' 意味着作为未来事件的警告或指示。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '保证' 意味着肯定地告诉某人某事以消除任何疑虑。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 7,
    question: "The mountain climbers were able to __________ the peak despite the harsh weather conditions.",
    chinese_question: "登山者在恶劣的天气条件下，仍然能够 __________ 山峰。",
    answers: [
        { option: "A", answer: "ascend", chinese_answer: "登上", chinese_romanization: "dēngshàng" },
        { option: "B", answer: "surmount", chinese_answer: "登顶", chinese_romanization: "dēngdǐng" },
        { option: "C", answer: "descend", chinese_answer: "下山", chinese_romanization: "xiàshān" },
        { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'surmount' means to overcome a difficulty or obstacle." +
        "<br><br>" +
        "(A) 'ascend' means to go up or climb." +
        "<br><br>" +
        "(C) 'descend' means to move or fall downward." +
        "<br><br>" +
        "(D) 'overlook' means to fail to notice something.",
    chinese_explanation: "(B) '登顶' 意味着克服困难或障碍。" +
        "<br><br>" +
        "(A) '登上' 意味着向上攀登。" +
        "<br><br>" +
        "(C) '下山' 意味着向下移动或下降。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能注意到某事。"
    },
    {
        id: 8,
    question: "Vandals were arrested for attempting to __________ the historic monument with graffiti.",
    chinese_question: "破坏者因试图用涂鸦 __________ 历史纪念碑而被捕。",
    answers: [
        { option: "A", answer: "desecrate", chinese_answer: "亵渎", chinese_romanization: "xièdú" },
        { option: "B", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'desecrate' means to treat a sacred place or thing with violent disrespect; to violate." +
        "<br><br>" + 
        "(B) 'honor' means to regard with great respect." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'preserve' means to maintain something in its original or existing state.",
    chinese_explanation: "(A) '亵渎' 意味着用暴力的不敬对待一个神圣的地方或事物；亵渎。" +
        "<br><br>" + 
        "(B) '尊敬' 意味着对某人或某物表示很高的尊重。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '保存' 意味着保持某物的原始或现有状态。"
    },
    {
        id: 9,
    question: "She spent the summer __________ around Europe, visiting different cities.",
    chinese_question: "她整个夏天都在欧洲 __________ ，拜访不同的城市。",
    answers: [
        { option: "A", answer: "gallivanting", chinese_answer: "闲逛", chinese_romanization: "xiánguàng" },
        { option: "B", answer: "studying", chinese_answer: "学习", chinese_romanization: "xuéxí" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "resting", chinese_answer: "休息", chinese_romanization: "xiūxí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gallivanting' means to go around from one place to another in the pursuit of pleasure or entertainment." +
        "<br><br>" +
        "(B) 'studying' means to devote time and attention to acquiring knowledge on an academic subject." +
        "<br><br>" +
        "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'resting' means to cease work or movement in order to relax, refresh oneself, or recover strength.",
    chinese_explanation: "(A) '闲逛' 意味着为了追求娱乐或享受而到处闲逛。" +
        "<br><br>" +
        "(B) '学习' 意味着花时间和注意力来获取学科知识。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '休息' 意味着停止工作或活动以放松、恢复自己或恢复体力。"
    },
    {
        id: 10,
    question: "The pendulum in the old grandfather clock would __________ back and forth, marking the passage of time.",
    chinese_question: "古老的落地钟里的钟摆会来回 __________，标志着时间的流逝。",
    answers: [
        { option: "A", answer: "freeze", chinese_answer: "冻结", chinese_romanization: "dòngjié" },
        { option: "B", answer: "oscillate", chinese_answer: "摆动", chinese_romanization: "bǎidòng" },
        { option: "C", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "D", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'oscillate' means to move back and forth in a regular rhythm." +
        "<br><br>" +
        "(A) 'freeze' means to stop moving and become solid." +
        "<br><br>" +
        "(C) 'stabilize' means to make or become steady." +
        "<br><br>" +
        "(D) 'halt' means to stop.",
    chinese_explanation: "(B) '摆动' 一词意味着以规则的节奏来回移动。" +
        "<br><br>" +
        "(A) '冻结' 意味着停止移动并变成固体。" +
        "<br><br>" +
        "(C) '稳定' 意味着使稳定。" +
        "<br><br>" +
        "(D) '停止' 意味着停止。"
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
