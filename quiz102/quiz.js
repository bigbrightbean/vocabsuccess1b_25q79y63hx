// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The nurse tried to __________ the patient's fears by explaining the procedure in detail.",
    chinese_question: "护士试图通过详细解释手术过程来 __________ 病人的恐惧。",
    answers: [
        { option: "A", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" + 
        "(B) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'amplify' means to increase the volume of sound or the intensity of something.",
    chinese_explanation: "(A) '缓解' 意味着使不愉快的感觉变得不那么强烈。" +
        "<br><br>" + 
        "(B) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '放大' 意味着增加声音或某物的强度。"
    },
    {
        id: 2,
    question: "He tried to __________ the effects of the medication by drinking plenty of water.",
    chinese_question: "他试图通过大量饮水来 __________ 药物的效果。",
    answers: [
        { option: "A", answer: "reverse", chinese_answer: "逆转", chinese_romanization: "nìzhuǎn" },
        { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reverse' means to cause to move backward or to change to the opposite state." +
        "<br><br>" +
        "(B) 'enhance' means to improve the quality, amount, or strength of something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
    chinese_explanation: "(A) '逆转' 意味着使向后移动或改变到相反的状态。" +
        "<br><br>" +
        "(B) '增强' 意味着提高某物的质量、数量或强度。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '加剧' 意味着使问题、糟糕的情况或负面情绪恶化。"
    },
    {
        id: 3,
    question: "Grief __________ her thoughts, making it hard for her to focus on anything else.",
    chinese_question: "悲伤 __________ 她的思绪，使她难以集中注意力。",
    answers: [
        { option: "A", answer: "freed", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
        { option: "B", answer: "enshrouded", chinese_answer: "笼罩", chinese_romanization: "lǒngzhào" },
        { option: "C", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "D", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enshrouded' used figuratively means to cover or envelop completely and hide from view, often with a negative connotation." +
        "<br><br>" + 
        "(A) 'freed' means to release from captivity or confinement." +
        "<br><br>" + 
        "(C) 'clarified' means to make a statement or situation less confused and more comprehensible." +
        "<br><br>" + 
        "(D) 'revealed' means to make known to others.",
    chinese_explanation: "(B) '笼罩' 在比喻意义上指完全覆盖或包围，使其隐藏不见，通常带有负面含义。" +
        "<br><br>" + 
        "(A) '解放' 意味着从囚禁或限制中解放出来。" +
        "<br><br>" + 
        "(C) '澄清' 意味着使声明或情况不那么混乱，更容易理解。" +
        "<br><br>" + 
        "(D) '揭示' 意味着让别人知道。"
    },
    {
        id: 4,
   question: "The mother would __________ her son, making sure he always had his favorite meals and never missed a bedtime story.",
    chinese_question: "这位母亲会 __________ 她的儿子，确保他总能吃到他最喜欢的饭菜，从不漏掉睡前故事。",
    answers: [
        { option: "A", answer: "coddle", chinese_answer: "溺爱", chinese_romanization: "nì'ài" },
        { option: "B", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "scold", chinese_answer: "责骂", chinese_romanization: "zémà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'coddle' means to treat with excessive indulgence and care." +
        "<br><br>" + 
        "(B) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" + 
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" + 
        "(D) 'scold' means to reprimand or criticize angrily.",
    chinese_explanation: "(A) '溺爱' 意味着过度宠爱和关怀。" +
        "<br><br>" + 
        "(B) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
        "<br><br>" + 
        "(C) '忽视' 意味着未能适当照顾。" +
        "<br><br>" + 
        "(D) '责骂' 意味着愤怒地斥责或批评。"
    },
    {
        id: 5,
    question: "The gardener __________ the path with colorful flower petals for the wedding ceremony.",
    chinese_question: "园丁在小路上 __________ 了彩色的花瓣，为婚礼仪式做准备。",
    answers: [
        { option: "A", answer: "collected", chinese_answer: "收集", chinese_romanization: "shōují" },
        { option: "B", answer: "bestrewed", chinese_answer: "散布", chinese_romanization: "sànbù" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "swept", chinese_answer: "扫", chinese_romanization: "sǎo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'bestrewed' means to scatter or spread things over a surface." +
        "<br><br>" + 
        "(A) 'collected' means to gather together." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'swept' means to clean an area by brushing away dirt or litter.",
    chinese_explanation: "(B) '散布' 意味着将东西散布在表面上。" +
        "<br><br>" + 
        "(A) '收集' 意味着聚集在一起。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '扫' 意味着通过刷去污垢或垃圾来清洁区域。"
    },
    {
        id: 6,
        question: "He felt __________ when his colleagues laughed at his idea during the brainstorming session.",
        chinese_question: "当同事在头脑风暴会议上嘲笑他的想法时，他感到被 __________ 。",
        answers: [
            { option: "A", answer: "demeaned", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "appreciated", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'demeaned' means to cause a severe loss in the dignity of and respect for (someone or something)." +
            "<br><br>" +
            "(B) 'appreciated' means to recognize the full worth of." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'encouraged' means to give support, confidence, or hope to (someone).",
        chinese_explanation: "(A) '贬低' 意味着导致（某人或某物）尊严和尊重的严重丧失。" +
            "<br><br>" +
            "(B) '欣赏' 意味着认出某物的全部价值。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予（某人）支持、信心或希望。"
    },
    {
        id: 7,
        question: "The teacher’s question __________ a lively discussion among the students.",
        chinese_question: "老师的问题 __________ 学生们展开了热烈的讨论。",
        answers: [
            { option: "A", answer: "prompted", chinese_answer: "引发", chinese_romanization: "yǐnfā" },
            { option: "B", answer: "silenced", chinese_answer: "使沉默", chinese_romanization: "shǐ chénmò" },
            { option: "C", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prompted' means to cause or bring about (an action or feeling)." +
            "<br><br>" +
            "(B) 'silenced' means to cause to be silent; prohibit or prevent from speaking." +
            "<br><br>" +
            "(C) 'delayed' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '引发' 意味着导致或引起（一个行动或感觉）。" +
            "<br><br>" +
            "(B) '使沉默' 意味着使沉默；禁止或阻止说话。" +
            "<br><br>" +
            "(C) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
    question: "The recent data breach __________ the importance of having strong cybersecurity measures in place.",
    chinese_question: "最近的数据泄露 __________ 了拥有强大网络安全措施的重要性。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "underscore", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
        { option: "C", answer: "belittle", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
        { option: "D", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'underscore' means to emphasize or highlight the importance of something." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'belittle' means to make someone or something seem less impressive or important." +
        "<br><br>" +
        "(D) 'obscure' means to keep from being seen; conceal.",
    chinese_explanation: "(B) '强调'一词意味着强调或突出某事的重要性。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '贬低' 意味着使某人或某事显得不那么重要或重要。" +
        "<br><br>" +
        "(D) '掩盖' 意味着防止被看到；隐藏。"
    },
    {
        id: 9,
    question: "After receiving her acceptance letter, she was excited to __________ at the prestigious university in the fall.",
    chinese_question: "收到录取通知书后，她很高兴秋季能够 __________ 进入这所著名大学。",
    answers: [
        { option: "A", answer: "withdraw", chinese_answer: "退出", chinese_romanization: "tuìchū" },
        { option: "B", answer: "graduate", chinese_answer: "毕业", chinese_romanization: "bìyè" },
        { option: "C", answer: "matriculate", chinese_answer: "注册", chinese_romanization: "zhùcè" },
        { option: "D", answer: "teach", chinese_answer: "教授", chinese_romanization: "jiāoshòu" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'matriculate' means to be enrolled at a college or university." +
        "<br><br>" +
        "(A) 'withdraw' means to remove or take away." +
        "<br><br>" +
        "(B) 'graduate' means to complete a course of study." +
        "<br><br>" +
        "(D) 'teach' means to impart knowledge or instruct.",
    chinese_explanation: "(C) '注册' 意味着被大学或学院录取。" +
        "<br><br>" +
        "(A) '退出' 意味着移除或拿走。" +
        "<br><br>" +
        "(B) '毕业' 意味着完成学业。" +
        "<br><br>" +
        "(D) '教授' 意味着传授知识或教学。"
    },
    {
        id: 10,
        question: "Her habit of __________ others' achievements did not earn her many friends.",
        chinese_question: "她 __________ 他人成就的习惯并没有为她赢得很多朋友。",
        answers: [
            { option: "A", answer: "disparaging", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "celebrating", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "supporting", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disparaging' figuratively means to regard or represent as being of little worth." +
            "<br><br>" +
            "(B) 'celebrating' means to acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'supporting' means to give assistance to.",
        chinese_explanation: "(A) '贬低' 在此语境下比喻认为或表现出某事物没有价值。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认（重要或快乐的日子或事件）。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '支持' 意味着给予帮助。"
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
