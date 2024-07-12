// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She made a __________ to speak with the supervisor about her concerns.",
    chinese_question: "她 __________ 与主管谈论她的担忧。",
    answers: [
        { option: "A", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
        { option: "B", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
        { option: "C", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
        { option: "D", answer: "command", chinese_answer: "命令", chinese_romanization: "mìnglìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'request' means an act of asking politely or formally for something." +
        "<br><br>" +
        "(B) 'demand' means an insistent and peremptory request, made as if by right." +
        "<br><br>" +
        "(C) 'suggestion' means an idea or plan put forward for consideration." +
        "<br><br>" +
        "(D) 'command' means an authoritative order.",
    chinese_explanation: "(A) '请求' 意味着礼貌或正式地要求某事。" +
        "<br><br>" +
        "(B) '要求' 意味着坚持和强硬地请求，好像理所当然。" +
        "<br><br>" +
        "(C) '建议' 意味着提出供考虑的想法或计划。" +
        "<br><br>" +
        "(D) '命令' 意味着权威的命令。"
    },
    {
        id: 2,
        question: "Insects exhibit a variety of __________ methods, including flying, crawling, and jumping.",
        chinese_question: "昆虫展示了多种 __________ 方法，包括飞行、爬行和跳跃。",
        answers: [
            { option: "A", answer: "locomotion", chinese_answer: "运动", chinese_romanization: "yùndòng" },
            { option: "B", answer: "respiration", chinese_answer: "呼吸", chinese_romanization: "hūxī" },
            { option: "C", answer: "reproduction", chinese_answer: "繁殖", chinese_romanization: "fánzhí" },
            { option: "D", answer: "digestion", chinese_answer: "消化", chinese_romanization: "xiāohuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'locomotion' means the ability to move from one place to another." +
            "<br><br>" +
            "(B) 'respiration' means the action of breathing." +
            "<br><br>" +
            "(C) 'reproduction' means the production of offspring." +
            "<br><br>" +
            "(D) 'digestion' means the process of breaking down food by mechanical and enzymatic action.",
        chinese_explanation: "(A) '运动' 意味着从一个地方移动到另一个地方的能力。" +
            "<br><br>" +
            "(B) '呼吸' 意味着呼吸的动作。" +
            "<br><br>" +
            "(C) '繁殖' 意味着后代的生产。" +
            "<br><br>" +
            "(D) '消化' 意味着通过机械和酶作用分解食物的过程。"
    },
    {
        id: 3,
    question: "The joyful reaction of the crowd was __________ that the performance was a success.",
    chinese_question: "人群的欢乐反应是表演成功的 __________。",
    answers: [
        { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "B", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "C", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: "D", answer: "proof", chinese_answer: "证据", chinese_romanization: "zhèngjù" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'proof' means something that demonstrates the truth or existence of something." +
        "<br><br>" +
        "(A) 'doubt' means a feeling of uncertainty or lack of conviction." +
        "<br><br>" +
        "(B) 'confusion' means lack of understanding; uncertainty." +
        "<br><br>" +
        "(C) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence.",
    chinese_explanation: "(D) '证据' 意味着证明某事真实性或存在的事物。" +
        "<br><br>" +
        "(A) '怀疑' 意味着不确定或缺乏信心的感觉。" +
        "<br><br>" +
        "(B) '困惑' 意味着缺乏理解；不确定性。" +
        "<br><br>" +
        "(C) '假设' 意味着基于有限证据提出的假设或解释。"
    },
    {
        id: 4,
    question: "The sudden __________ in the classroom was caused by a snake slithering in through the window.",
    chinese_question: "教室里突然的 __________ 是由一条蛇从窗户滑进引起的。",
    answers: [
        { option: "A", answer: "commotion", chinese_answer: "骚动", chinese_romanization: "sāodòng" },
        { option: "B", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
        { option: "C", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
        { option: "D", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'commotion' means a state of confused and noisy disturbance." +
        "<br><br>" +
        "(B) 'tranquility' means the quality or state of being calm." +
        "<br><br>" +
        "(C) 'silence' means complete absence of sound." +
        "<br><br>" +
        "(D) 'order' means the arrangement or disposition of people or things.",
    chinese_explanation: "(A) '骚动' 意味着一种混乱和吵闹的状态。" +
        "<br><br>" +
        "(B) '宁静' 意味着平静的质量或状态。" +
        "<br><br>" +
        "(C) '安静' 意味着完全没有声音。" +
        "<br><br>" +
        "(D) '秩序' 意味着人或物的安排或处置。"
    },
    {
        id: 5,
        question: "The company's new product launch turned into a complete __________ when technical issues prevented its demonstration.",
        chinese_question: "由于技术问题阻止了演示，公司的新产品发布变成了一场彻底的 __________。",
        answers: [
            { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "debacle", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
            { option: "D", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'debacle' means a sudden and ignominious failure; a fiasco." +
            "<br><br>" +
            "(A) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(B) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
            "<br><br>" +
            "(D) 'triumph' means a great victory or achievement.",
        chinese_explanation: "(C) '崩溃' 意味着突然的、可耻的失败；一场惨败。" +
            "<br><br>" +
            "(A) '成功' 意味着实现一个目标或目的。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过参与愉快的、通常是社交的活动来标志对一个重要事件或场合的愉悦。" +
            "<br><br>" +
            "(D) '胜利' 意味着巨大的胜利或成就。"
    },
    {
        id: 6,
        question: "Her __________ about buying a new car stemmed from wanting a reliable vehicle but worrying about the expense.",
        chinese_question: "她对买新车感到 __________，因为她想要一辆可靠的车，但又担心费用。",
        answers: [
            { option: "A", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" },
            { option: "B", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
            { option: "C", answer: "eagerness", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "D", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ambivalence' means having mixed feelings or contradictory ideas about something or someone." +
            "<br><br>" +
            "(B) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(C) 'eagerness' means keen or enthusiastic interest." +
            "<br><br>" +
            "(D) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something.",
        chinese_explanation: "(A) '矛盾心理' 意味着对某事或某人有混合的感觉或矛盾的想法。" +
            "<br><br>" +
            "(B) '信心' 意味着相信自己可以依赖某人或某事的感觉或信念；坚定的信任。" +
            "<br><br>" +
            "(C) '渴望' 意味着强烈或热切的兴趣。" +
            "<br><br>" +
            "(D) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。"
    },
    {
        id: 7,
        question: "He earned a hefty __________ for writing the screenplay for the blockbuster movie.",
        chinese_question: "他因编写大片电影的剧本而获得了一笔丰厚的 __________。",
        answers: [
            { option: "A", answer: "penalty", chinese_answer: "罚款", chinese_romanization: "fákuǎn" },
            { option: "B", answer: "commission", chinese_answer: "佣金", chinese_romanization: "yòngjīn" },
            { option: "C", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "ban", chinese_answer: "禁令", chinese_romanization: "jìnlìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'commission' means a sum of money paid to an agent in a commercial transaction." +
            "<br><br>" +
            "(A) 'penalty' means a punishment imposed for breaking a law, rule, or contract." +
            "<br><br>" +
            "(C) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(D) 'ban' means an official or legal prohibition.",
        chinese_explanation: "(B) '佣金'一词意味着在商业交易中支付给代理人的一笔钱。" +
            "<br><br>" +
            "(A) '罚款' 意味着因违反法律、规则或合同而施加的惩罚。" +
            "<br><br>" +
            "(C) '批评' 意味着基于感知的错误或错误对某人或某事的表示不满。" +
            "<br><br>" +
            "(D) '禁令' 意味着正式或法律上的禁止。"
    },
    {
        id: 8,
        question: "Feeling adventurous, she decided to __________ from the high cliff into the deep ocean below.",
        chinese_question: "她感到冒险，决定从高高的悬崖 __________ 到下面的深海。",
        answers: [
            { option: "A", answer: "tiptoe", chinese_answer: "踮着脚走", chinese_romanization: "diǎn zhe jiǎo zǒu" },
            { option: "B", answer: "stroll", chinese_answer: "散步", chinese_romanization: "sànbù" },
            { option: "C", answer: "ascend", chinese_answer: "攀登", chinese_romanization: "pāndēng" },
            { option: "D", answer: "plunge", chinese_answer: "跳入", chinese_romanization: "tiào rù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'plunge' means to jump or dive quickly and energetically." +
            "<br><br>" +
            "(A) 'tiptoe' means to walk quietly and carefully with one's heels raised and one's weight on the balls of the feet." +
            "<br><br>" +
            "(B) 'stroll' means to walk in a leisurely way." +
            "<br><br>" +
            "(C) 'ascend' means to go up or climb.",
        chinese_explanation: "(D) '跳入' 意味着迅速而有力地跳入或潜入。" +
            "<br><br>" +
            "(A) '踮着脚走' 意味着用脚趾走路，轻声而小心地走。" +
            "<br><br>" +
            "(B) '散步' 意味着以悠闲的方式走路。" +
            "<br><br>" +
            "(C) '攀登' 意味着向上走或攀登。"
    },
    {
        id: 9,
        question: "Her criticism was __________ with genuine concern for his well-being, making it easier for him to accept.",
        chinese_question: "她的批评伴随着对他福祉的真正关心，使他更容易接受。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "intensified", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "amplified", chinese_answer: "放大", chinese_romanization: "fàngdà" },
            { option: "D", answer: "tempered", chinese_answer: "缓和", chinese_romanization: "huǎnhé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tempered' means to serve as a counterbalancing force to something; to moderate or mitigate." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(B) 'intensified' means to become or make more intense." +
            "<br><br>" +
            "(C) 'amplified' means to increase the volume of sound, especially using an amplifier.",
        chinese_explanation: "(D) '缓和'一词意味着作为某物的平衡力；调节或减轻。" +
            "<br><br>" +
            "(A) '隐藏' 意味着不被看到；隐藏。" +
            "<br><br>" +
            "(B) '加剧' 意味着变得或使更激烈。" +
            "<br><br>" +
            "(C) '放大' 意味着增加声音的音量，尤其是使用放大器。"
    },
    {
        id: 10,
        question: "The latest model of the smartphone has several improvements over its __________.",
        chinese_question: "最新款的智能手机在其 __________ 的基础上进行了多项改进。",
        answers: [
            { option: "A", answer: "predecessor", chinese_answer: "前任", chinese_romanization: "qiánrèn" },
            { option: "B", answer: "prototype", chinese_answer: "原型", chinese_romanization: "yuánxíng" },
            { option: "C", answer: "successor", chinese_answer: "继任者", chinese_romanization: "jìrènzhě" },
            { option: "D", answer: "rival", chinese_answer: "竞争对手", chinese_romanization: "jìngzhēng duìshǒu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'predecessor' means a thing that has been followed or replaced by another." +
            "<br><br>" +
            "(B) 'prototype' means a first or preliminary version of a device or vehicle from which other forms are developed." +
            "<br><br>" +
            "(C) 'successor' means a person or thing that succeeds another." +
            "<br><br>" +
            "(D) 'rival' means a person or thing competing with another for the same objective or for superiority in the same field of activity.",
        chinese_explanation: "(A) '前任' 意味着被另一物品跟随或取代的事物。" +
            "<br><br>" +
            "(B) '原型' 意味着设备或车辆的第一或初步版本，从中开发出其他形式。" +
            "<br><br>" +
            "(C) '继任者' 意味着接替另一人的人或事物。" +
            "<br><br>" +
            "(D) '竞争对手' 意味着在同一领域或活动中与另一人竞争相同目标或优势的人或事物。"
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
