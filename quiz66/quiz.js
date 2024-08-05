// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "There was a __________ of hope in his eyes as he spoke about the future.",
    chinese_question: "当他说到未来时，他眼中闪烁着一丝 __________ 的希望。",
    answers: [
        { option: "A", answer: "shadow", chinese_answer: "阴影", chinese_romanization: "yīnyǐng" },
        { option: "B", answer: "glimmer", chinese_answer: "微光", chinese_romanization: "wéiguāng" },
        { option: "C", answer: "darkness", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" },
        { option: "D", answer: "despair", chinese_answer: "绝望", chinese_romanization: "juéwàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'glimmer' means a faint or wavering light; a small sign of something." +
        "<br><br>" +
        "(A) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface." +
        "<br><br>" +
        "(C) 'darkness' means the partial or total absence of light." +
        "<br><br>" +
        "(D) 'despair' means the complete loss or absence of hope.",
    chinese_explanation: "(B) '微光' 意味着微弱或不稳定的光；一丝迹象。" +
        "<br><br>" +
        "(A) '阴影' 意味着由于物体遮挡光线而产生的黑暗区域或形状。" +
        "<br><br>" +
        "(C) '黑暗' 意味着部分或完全没有光。" +
        "<br><br>" +
        "(D) '绝望' 意味着完全失去或没有希望。"
    },
    {
        id: 2,
    question: "The team's failure was attributed to a __________ of proper planning.",
    chinese_question: "团队的失败归因于 __________ 适当的计划。",
    answers: [
        { option: "A", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
        { option: "B", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "C", answer: "lack", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
        { option: "D", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'lack' means the state of being without or not having enough of something." +
        "<br><br>" +
        "(A) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
        "<br><br>" +
        "(B) 'abundance' means a very large quantity of something." +
        "<br><br>" +
        "(D) 'excess' means an amount of something that is more than necessary, permitted, or desirable.",
    chinese_explanation: "(C) '缺乏' 意味着没有或不足够某物的状态。" +
        "<br><br>" +
        "(A) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。" +
        "<br><br>" +
        "(B) '丰富' 意味着大量的某物。" +
        "<br><br>" +
        "(D) '过量' 意味着超过必要、允许或理想的数量。"
    },
    {
        id: 3,
    question: "The workers were trained to recognize and avoid __________ in the construction site to ensure their safety.",
    chinese_question: "工人们接受了培训，以识别和避免建筑工地上的 __________，以确保他们的安全。",
    answers: [
        { option: "A", answer: "comforts", chinese_answer: "舒适", chinese_romanization: "shūshì" },
        { option: "B", answer: "hazards", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
        { option: "C", answer: "amenities", chinese_answer: "便利设施", chinese_romanization: "biànlì shèshī" },
        { option: "D", answer: "luxuries", chinese_answer: "奢侈品", chinese_romanization: "shēchǐpǐn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hazards' means dangers or risks." +
        "<br><br>" +
        "(A) 'comforts' means things that provide physical ease and relaxation." +
        "<br><br>" +
        "(C) 'amenities' means desirable or useful features or facilities of a building or place." +
        "<br><br>" +
        "(D) 'luxuries' means the state of great comfort and extravagant living.",
    chinese_explanation: "(B) '危险' 意味着危险或风险。" +
        "<br><br>" +
        "(A) '舒适' 意味着提供身体上的轻松和放松的事物。" +
        "<br><br>" +
        "(C) '便利设施' 意味着建筑物或地方的令人愉快或有用的特征或设施。" +
        "<br><br>" +
        "(D) '奢侈品' 意味着极大的舒适和奢华的生活状态。"
    },
    {
        id: 4,
    question: "The teacher's __________ about the importance of hard work motivated the students.",
    chinese_question: "老师关于努力工作重要性的 __________ 激励了学生。",
    answers: [
        { option: "A", answer: "remark", chinese_answer: "评论", chinese_romanization: "pínglùn" },
        { option: "B", answer: "threat", chinese_answer: "威胁", chinese_romanization: "wēixié" },
        { option: "C", answer: "instruction", chinese_answer: "指示", chinese_romanization: "zhǐshì" },
        { option: "D", answer: "apology", chinese_answer: "道歉", chinese_romanization: "dàoqiàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'remark' means a spoken statement or comment." +
        "<br><br>" +
        "(B) 'threat' means a statement of an intention to inflict pain, injury, damage, or other hostile action." +
        "<br><br>" +
        "(C) 'instruction' means detailed information telling how something should be done, operated, or assembled." +
        "<br><br>" +
        "(D) 'apology' means a regretful acknowledgment of an offense or failure.",
    chinese_explanation: "(A) '评论' 意味着口头的陈述或评论。" +
        "<br><br>" +
        "(B) '威胁' 意味着表示意图施加痛苦、伤害、损害或其他敌对行为的陈述。" +
        "<br><br>" +
        "(C) '指示' 意味着详细说明某事应如何完成、操作或组装。" +
        "<br><br>" +
        "(D) '道歉' 意味着对冒犯或失败的遗憾承认。"
    },
    {
        id: 5,
        question: "The constant __________ in their political views made it difficult for them to have a peaceful conversation.",
        chinese_question: "他们政治观点上的不断 __________ 使得他们很难进行和平的对话。",
        answers: [
            { option: "A", answer: "consonance", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "B", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
            { option: "C", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "D", answer: "coherence", chinese_answer: "连贯性", chinese_romanization: "liánguànxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissonance' means a conflict of people's opinions or actions or characters." +
            "<br><br>" +
            "(A) 'consonance' means agreement or compatibility between opinions or actions." +
            "<br><br>" +
            "(C) 'unity' means the state of being united or joined as a whole." +
            "<br><br>" +
            "(D) 'coherence' means the quality of being logical and consistent.",
        chinese_explanation: "(B) '不和谐'一词意味着人们意见、行动或性格之间的冲突。" +
            "<br><br>" +
            "(A) '一致' 意味着意见或行动之间的协议或兼容性。" +
            "<br><br>" +
            "(C) '团结' 意味着团结或联合为整体的状态。" +
            "<br><br>" +
            "(D) '连贯性' 意味着逻辑和一致性的质量。"
    },
    {
        id: 6,
        question: "Despite his natural __________ towards sports, he excelled academically and pursued a career in science.",
        chinese_question: "尽管他天生对运动有 __________，他在学业上表现出色并从事了科学事业。",
        answers: [
            { option: "A", answer: "inclination", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
            { option: "B", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "C", answer: "disinterest", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "skepticism", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inclination' means a natural tendency or urge to act or feel in a particular way." +
            "<br><br>" +
            "(B) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(C) 'disinterest' means lack of interest." +
            "<br><br>" +
            "(D) 'skepticism' means an attitude of doubt or a disposition to incredulity.",
        chinese_explanation: "(A) '倾向'一词意味着自然的倾向或冲动去以某种方式行动或感觉。" +
            "<br><br>" +
            "(B) '厌恶' 意味着强烈的反感或不情愿。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣。" +
            "<br><br>" +
            "(D) '怀疑' 意味着怀疑的态度或不轻信的倾向。"
    },
    {
        id: 7,
        question: "The manufacturing __________ involves several stages, including design, assembly, and quality control.",
        chinese_question: "制造 __________ 包括多个阶段，包括设计、组装和质量控制。",
        answers: [
            { option: "A", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "B", answer: "event", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
            { option: "C", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
            { option: "D", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'process' means a series of actions or steps taken in order to achieve a particular end." +
            "<br><br>" +
            "(A) 'mistake' means an action or judgment that is misguided or wrong." +
            "<br><br>" +
            "(B) 'event' means a thing that happens, especially one of importance." +
            "<br><br>" +
            "(D) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally.",
        chinese_explanation: "(C) '过程' 意味着为了实现特定目标而采取的一系列行动或步骤。" +
            "<br><br>" +
            "(A) '错误' 意味着误导或错误的行为或判断。" +
            "<br><br>" +
            "(B) '事件' 意味着发生的事情，尤其是重要的事情。" +
            "<br><br>" +
            "(D) '事故' 意味着意外且无意中发生的不幸事件。"
    },
    {
        id: 8,
        question: "The negotiations gave a __________ of progress, but no real decisions were made.",
        chinese_question: "谈判表现出某种 __________ 的进展，但实际上没有做出任何决定。",
        answers: [
            { option: "A", answer: "semblance", chinese_answer: "表象", chinese_romanization: "biǎoxiàng" },
            { option: "B", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "D", answer: "collapse", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'semblance' figuratively means the outward appearance or apparent form of something, especially when the reality is different." +
            "<br><br>" +
            "(B) 'stagnation' means the state of not flowing or moving." +
            "<br><br>" +
            "(C) 'retreat' means the act of moving back or withdrawing." +
            "<br><br>" +
            "(D) 'collapse' means a sudden failure or breakdown.",
        chinese_explanation: "(A) '表象' 在此语境下意指某物的外在表现或表面形式，尤其是当现实情况有所不同时。" +
            "<br><br>" +
            "(B) '停滞' 意味着不流动或不动的状态。" +
            "<br><br>" +
            "(C) '撤退' 意味着向后移动或撤退的行为。" +
            "<br><br>" +
            "(D) '崩溃' 意味着突然的失败或崩溃。"
    },
    {
        id: 9,
        question: "The meeting ended in __________, with team members arguing over the best approach to the project.",
        chinese_question: "会议以 __________ 结束，团队成员就项目的最佳方法争论不休。",
        answers: [
            { option: "A", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "D", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'discord' means disagreement between people." +
            "<br><br>" +
            "(B) 'harmony' means agreement or concord." +
            "<br><br>" +
            "(C) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(D) 'unity' means the state of being united or joined as a whole.",
        chinese_explanation: "(A) '不和' 意味着人们之间的意见不一致。" +
            "<br><br>" +
            "(B) '和谐' 意味着意见一致或和谐。" +
            "<br><br>" +
            "(C) '同意' 意味着意见或感觉上的一致或协调。" +
            "<br><br>" +
            "(D) '团结' 意味着联合或作为一个整体的状态。"
    },
    {
        id: 10,
       question: "A __________ broke out at the concert when two groups of fans clashed over seating arrangements.",
        chinese_question: "当两个粉丝团体因座位安排发生冲突时，音乐会爆发了 __________。",
        answers: [
            { option: "A", answer: "brawl", chinese_answer: "斗殴", chinese_romanization: "dòu'ōu" },
            { option: "B", answer: "negotiation", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
            { option: "C", answer: "dialogue", chinese_answer: "对话", chinese_romanization: "duìhuà" },
            { option: "D", answer: "performance", chinese_answer: "表演", chinese_romanization: "biǎoyǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brawl' means a rough or noisy fight or quarrel." +
            "<br><br>" +
            "(B) 'negotiation' means discussion aimed at reaching an agreement." +
            "<br><br>" +
            "(C) 'dialogue' means conversation between two or more people as a feature of a book, play, or movie." +
            "<br><br>" +
            "(D) 'performance' means an act of staging or presenting a play, concert, or other form of entertainment.",
        chinese_explanation: "(A) '斗殴' 意味着一场粗暴或喧闹的打斗或争吵。" +
            "<br><br>" +
            "(B) '谈判' 意味着旨在达成协议的讨论。" +
            "<br><br>" +
            "(C) '对话' 意味着书籍、戏剧或电影中的两人或多人之间的对话。" +
            "<br><br>" +
            "(D) '表演' 意味着上演或呈现戏剧、音乐会或其他形式的娱乐活动的行为。"
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
