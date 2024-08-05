// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The teacher's __________ was evident when she discovered the students had cheated on the exam.",
        chinese_question: "当老师发现学生在考试中作弊时，显然感到 __________。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "D", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reproach' means expressing disapproval or disappointment." +
            "<br><br>" +
            "(A) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(B) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'excitement' means a feeling of great enthusiasm and eagerness.",
        chinese_explanation: "(D) '责备'一词意味着表示不赞成或失望。" +
            "<br><br>" +
            "(A) '赞美' 意味着对某人或某事表示赞同或钦佩。" +
            "<br><br>" +
            "(B) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '兴奋' 意味着极大的热情和渴望。"
    },
    {
        id: 2,
        question: "Her analysis of the situation was praised for its __________, as she avoided letting her personal feelings influence her conclusions.",
        chinese_question: "她对形势的分析因其 __________ 而受到赞扬，因为她避免让个人感情影响她的结论。",
        answers: [
            { option: "A", answer: "subjectivity", chinese_answer: "主观性", chinese_romanization: "zhǔguān xìng" },
            { option: "B", answer: "partiality", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
            { option: "C", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
            { option: "D", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'objectivity' means the quality of being objective, unbiased, and not influenced by personal feelings or opinions." +
            "<br><br>" +
            "(A) 'subjectivity' means based on or influenced by personal feelings, tastes, or opinions." +
            "<br><br>" +
            "(B) 'partiality' means unfair bias in favor of one thing or person compared with another; favoritism." +
            "<br><br>" +
            "(D) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair.",
        chinese_explanation: "(C) '客观性'一词意味着客观、公正、不受个人感情或意见影响的品质。" +
            "<br><br>" +
            "(A) '主观性' 意味着基于或受个人感情、兴趣或意见影响的。" +
            "<br><br>" +
            "(B) '偏袒' 意味着偏向某一事物或某人；偏爱。" +
            "<br><br>" +
            "(D) '偏见' 意味着对一个人或一群人的倾向或偏见，尤其是被认为不公平的方式。"
    },
    {
        id: 3,
        question: "The dinner party she planned turned into a __________ when the caterers didn't show up, and she had to cook for everyone.",
        chinese_question: "她计划的晚宴变成了一场 __________，因为餐饮服务没有出现，她不得不为所有人做饭。",
        answers: [
            { option: "A", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "debacle", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
            { option: "D", answer: "highlight", chinese_answer: "高潮", chinese_romanization: "gāocháo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'debacle' figuratively means a sudden and ignominious failure; a fiasco." +
            "<br><br>" +
            "(A) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(B) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
            "<br><br>" +
            "(D) 'highlight' means an outstanding part of an event or period of time.",
        chinese_explanation: "(C) '崩溃' 在此语境下意指突然的、可耻的失败；一场惨败。" +
            "<br><br>" +
            "(A) '胜利' 意味着巨大的胜利或成就。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过参与愉快的、通常是社交的活动来标志对一个重要事件或场合的愉悦。" +
            "<br><br>" +
            "(D) '高潮' 意味着一个事件或时间段的突出部分。"
    },
    {
        id: 4,
    question: "The soldier's heroic __________ during the battle, where he single-handedly defended the outpost against overwhelming odds, earned him a medal of honor.",
    chinese_question: "士兵在战斗中的英勇 __________，他单枪匹马对抗压倒性的敌人，赢得了荣誉勋章。",
    answers: [
        { option: "A", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "B", answer: "defeat", chinese_answer: "挫败", chinese_romanization: "cuòbài" },
        { option: "C", answer: "blunder", chinese_answer: "失误", chinese_romanization: "shīwù" },
        { option: "D", answer: "exploit", chinese_answer: "功绩", chinese_romanization: "gōngjì" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'exploit' means a bold or daring feat or accomplishment." +
        "<br><br>" +
        "(A) 'failure' means lack of success." +
        "<br><br>" +
        "(B) 'defeat' means an instance of being beaten or overcoming in a contest." +
        "<br><br>" +
        "(C) 'blunder' means a careless mistake.",
    chinese_explanation: "(D) '功绩' 意味着大胆或英勇的壮举或成就。" +
        "<br><br>" +
        "(A) '失败' 意味着缺乏成功。" +
        "<br><br>" +
        "(B) '挫败' 意味着在比赛中被击败或克服的实例。" +
        "<br><br>" +
        "(C) '失误' 意味着粗心的错误。"
    },
    {
        id: 5,
        question: "The movie evoked a strong __________ of nostalgia, reminding everyone of their childhood days.",
        chinese_question: "这部电影唤起了强烈的怀旧 __________，让每个人都想起了他们的童年时光。",
        answers: [
            { option: "A", answer: "sentiment", chinese_answer: "情感", chinese_romanization: "qínggǎn" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "whim", chinese_answer: "奇想", chinese_romanization: "qíxiǎng" },
            { option: "D", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sentiment' means a view or attitude toward a situation or event; an opinion or feeling." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained." +
            "<br><br>" +
            "(D) 'aversion' means a strong dislike or disinclination.",
        chinese_explanation: "(A) '情感'一词意味着对某种情况或事件的看法或态度；意见或感觉。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '奇想' 意味着一种突然的愿望或改变主意，尤其是非同寻常或无法解释的。" +
            "<br><br>" +
            "(D) '厌恶' 意味着强烈的厌恶或不情愿。"
    },
    {
        id: 6,
    question: "Taking a job in a new city was a __________ she was willing to take for her career growth.",
    chinese_question: "为了职业发展，她愿意承担在新城市工作的 __________。",
    answers: [
        { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "B", answer: "risk", chinese_answer: "风险", chinese_romanization: "fēngxiǎn" },
        { option: "C", answer: "guarantee", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
        { option: "D", answer: "safeguard", chinese_answer: "保障", chinese_romanization: "bǎozhàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'risk' means a situation involving exposure to danger." +
        "<br><br>" +
        "(A) 'reward' means a thing given in recognition of service, effort, or achievement." +
        "<br><br>" +
        "(C) 'guarantee' means a formal assurance that certain conditions will be fulfilled." +
        "<br><br>" +
        "(D) 'safeguard' means a measure taken to protect someone or something or to prevent something undesirable.",
    chinese_explanation: "(B) '风险' 意味着涉及暴露于危险的情况。" +
        "<br><br>" +
        "(A) '奖励' 意味着为表彰服务、努力或成就而给予的东西。" +
        "<br><br>" +
        "(C) '保证' 意味着对某些条件将得到满足的正式保证。" +
        "<br><br>" +
        "(D) '保障' 意味着保护某人或某事或防止不希望发生的事情的措施。"
    },
    {
        id: 7,
    question: "The concert was held in an open-air __________, making it a memorable experience.",
    chinese_question: "音乐会在露天 __________ 中举行，使其成为难忘的经历。",
    answers: [
        { option: "A", answer: "arena", chinese_answer: "竞技场", chinese_romanization: "jìngjì chǎng" },
        { option: "B", answer: "hall", chinese_answer: "大厅", chinese_romanization: "dàtīng" },
        { option: "C", answer: "theater", chinese_answer: "剧院", chinese_romanization: "jùyuàn" },
        { option: "D", answer: "room", chinese_answer: "房间", chinese_romanization: "fángjiān" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'arena' means a level area surrounded by seats for spectators, in which sports, entertainments, and other public events are held." +
        "<br><br>" +
        "(B) 'hall' means a large room or building for meetings, concerts, or other events." +
        "<br><br>" +
        "(C) 'theater' means a building or outdoor area in which plays and other dramatic performances are given." +
        "<br><br>" +
        "(D) 'room' means a part or division of a building enclosed by walls, floor, and ceiling.",
    chinese_explanation: "(A) '竞技场' 意味着一个四周有座位的平坦区域，观众在其中观看体育比赛、娱乐活动和其他公共活动。" +
        "<br><br>" +
        "(B) '大厅' 意味着用于会议、音乐会或其他活动的大房间或建筑。" +
        "<br><br>" +
        "(C) '剧院' 意味着上演戏剧和其他戏剧表演的建筑或户外区域。" +
        "<br><br>" +
        "(D) '房间' 意味着建筑物的一部分或分区，由墙壁、地板和天花板围起来。"
    },
    {
        id: 8,
        question: "The teacher granted a __________ on the project deadline, giving students an extra week to complete their work.",
        chinese_question: "老师给予项目截止日期的 __________，让学生多一周时间完成他们的工作。",
        answers: [
            { option: "A", answer: "extension", chinese_answer: "延期", chinese_romanization: "yánqí" },
            { option: "B", answer: "reprieve", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "C", answer: "penalty", chinese_answer: "处罚", chinese_romanization: "chǔfá" },
            { option: "D", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reprieve' means a temporary relief or delay." +
            "<br><br>" +
            "(A) 'extension' means the action of extending; an additional period of time." +
            "<br><br>" +
            "(C) 'penalty' means a punishment imposed for breaking a law, rule, or contract." +
            "<br><br>" +
            "(D) 'rejection' means the dismissing or refusing of a proposal, idea, etc.",
        chinese_explanation: "(B) '缓解'一词意味着暂时的缓解或延迟。" +
            "<br><br>" +
            "(A) '延期' 意味着延长的行为；额外的一段时间。" +
            "<br><br>" +
            "(C) '处罚' 意味着因违反法律、规则或合同而施加的惩罚。" +
            "<br><br>" +
            "(D) '拒绝' 意味着对提议、想法等的拒绝或拒绝。"
    },
    {
        id: 9,
        question: "The school adhered to a strict educational __________ that prioritized discipline and academic excellence.",
        chinese_question: "学校坚持严格的教育 __________，优先考虑纪律和学术卓越。",
        answers: [
            { option: "A", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "B", answer: "doctrine", chinese_answer: "教义", chinese_romanization: "jiàoyì" },
            { option: "C", answer: "opinion", chinese_answer: "意见", chinese_romanization: "yìjiàn" },
            { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'doctrine' means a belief or set of beliefs held and taught by a Church, political party, or other group." +
            "<br><br>" +
            "(A) 'theory' means a supposition or a system of ideas intended to explain something." +
            "<br><br>" +
            "(C) 'opinion' means a view or judgment formed about something, not necessarily based on fact or knowledge." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(B) '教义'一词意味着一个教会、政党或其他团体持有并教授的信仰或信念。" +
            "<br><br>" +
            "(A) '理论' 意味着意图解释某事的假设或系统的想法。" +
            "<br><br>" +
            "(C) '意见' 意味着对某事的看法或判断，不一定基于事实或知识。" +
            "<br><br>" +
            "(D) '混乱' 意味着缺乏理解；不确定。"
    },
    {
        id: 10,
    question: "The company's quick __________ to the crisis helped to minimize the damage.",
    chinese_question: "公司对危机的迅速 __________ 有助于将损失降到最低。",
    answers: [
        { option: "A", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
        { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'response' means a reaction to something." +
        "<br><br>" +
        "(B) 'neglect' means fail to care for properly." +
        "<br><br>" +
        "(C) 'error' means a mistake." +
        "<br><br>" +
        "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
    chinese_explanation: "(A) '反应' 意味着对某事的反应。" +
        "<br><br>" +
        "(B) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(C) '错误' 意味着错误。" +
        "<br><br>" +
        "(D) '犹豫' 意味着在说或做某事之前暂停或犹豫的行为。"
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
