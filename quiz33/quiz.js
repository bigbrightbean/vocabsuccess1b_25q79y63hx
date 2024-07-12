// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His plans for the future were __________, with no clear direction or goals.",
        chinese_question: "他对未来的计划是 __________ 的，没有明确的方向或目标。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "definite", chinese_answer: "明确", chinese_romanization: "míngquè" },
            { option: "C", answer: "nebulous", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "D", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nebulous' means in the form of a cloud or haze; hazy; unclear or vague." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'definite' means clearly stated or decided; not vague or doubtful." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(C) '模糊' 意味着呈云状或雾状；模糊的；不清楚或含糊的。" +
            "<br><br>" +
            "(A) '清晰' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '明确' 意味着清楚地陈述或决定的；不含糊或不怀疑的。" +
            "<br><br>" +
            "(D) '明显' 意味着容易察觉或理解；清楚的，自明的或明显的。"
    },
    {
        id: 2,
        question: "The young pianist showed __________ talent, wowing audiences with her incredible skill.",
        chinese_question: "这位年轻的钢琴家展示了__________的才华，以令人难以置信的技巧让观众赞叹不已。",
        answers: [
            { option: "A", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "prodigious", chinese_answer: "惊人的", chinese_romanization: "jīngrén de" },
            { option: "D", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prodigious' means remarkably or impressively great in extent, size, or degree." +
            "<br><br>" +
            "(A) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'average' means having qualities that are seen as typical of a particular person or thing.",
        chinese_explanation: "(C) '惊人的'一词意味着在范围、大小或程度上显著或令人印象深刻的。" +
            "<br><br>" +
            "(A) '平庸的' 意味着质量只是一般的；不太好的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特殊或显著特征的；正常的。" +
            "<br><br>" +
            "(D) '平均的' 意味着具有被视为某人或某事典型的特质的。"
    },
    {
        id: 3,
        question: "She felt __________ to have such supportive friends who helped her through difficult times.",
        chinese_question: "她感到 __________，有这么多支持她的朋友帮助她渡过难关。",
        answers: [
            { option: "A", answer: "unfortunate", chinese_answer: "不幸的", chinese_romanization: "bùxìng de" },
            { option: "B", answer: "lucky", chinese_answer: "幸运的", chinese_romanization: "xìngyùn de" },
            { option: "C", answer: "fortunate", chinese_answer: "幸运的", chinese_romanization: "xìngyùn de" },
            { option: "D", answer: "unlucky", chinese_answer: "倒霉的", chinese_romanization: "dǎoméi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fortunate' means favored by or involving good luck or fortune." +
            "<br><br>" +
            "(A) 'unfortunate' means having or marked by bad fortune; unlucky." +
            "<br><br>" +
            "(B) 'lucky' means having, bringing, or resulting from good luck." +
            "<br><br>" +
            "(D) 'unlucky' means having, bringing, or resulting from bad luck.",
        chinese_explanation: "(C) '幸运的' 意味着受到或涉及好运或运气的。" +
            "<br><br>" +
            "(A) '不幸的' 意味着有或标志着坏运气；倒霉的。" +
            "<br><br>" +
            "(B) '幸运的' 意味着有、带来或导致好运的。" +
            "<br><br>" +
            "(D) '倒霉的' 意味着有、带来或导致坏运气的。"
    },
    {
        id: 4,
        question: "His __________ attitude towards his mentor earned him valuable guidance and support.",
        chinese_question: "他对导师的 __________ 态度为他赢得了宝贵的指导和支持。",
        answers: [
            { option: "A", answer: "dismissive", chinese_answer: "轻视的", chinese_romanization: "qīngshì de" },
            { option: "B", answer: "disrespectful", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "C", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(A) 'dismissive' means feeling or showing that something is unworthy of consideration." +
            "<br><br>" +
            "(B) 'disrespectful' means showing a lack of respect or courtesy; impolite." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '尊重的' 意味着感到或表现出敬意。" +
            "<br><br>" +
            "(A) '轻视的' 意味着感到或表现出某事不值得考虑的。" +
            "<br><br>" +
            "(B) '无礼的' 意味着表现出缺乏尊重或礼貌的；无礼的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别兴趣或同情的；不关心的。"
    },
    {
        id: 5,
        question: "The engineer discovered that the new batch of parts was __________ and needed to be returned to the manufacturer.",
        chinese_question: "工程师发现新批次的零件是 __________ 的，需要退还给制造商。",
        answers: [
            { option: "A", answer: "flawless", chinese_answer: "完美无缺", chinese_romanization: "wánměi wúquē" },
            { option: "B", answer: "defective", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" },
            { option: "C", answer: "functional", chinese_answer: "功能正常", chinese_romanization: "gōngnéng zhèngcháng" },
            { option: "D", answer: "efficient", chinese_answer: "高效", chinese_romanization: "gāoxiào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'defective' means having a fault or flaw." +
            "<br><br>" +
            "(A) 'flawless' means without any imperfections." +
            "<br><br>" +
            "(C) 'functional' means working or operating." +
            "<br><br>" +
            "(D) 'efficient' means working in a well-organized and competent way.",
        chinese_explanation: "(B) '有缺陷' 意味着有故障或瑕疵。" +
            "<br><br>" +
            "(A) '完美无缺' 意味着没有任何缺陷。" +
            "<br><br>" +
            "(C) '功能正常' 意味着工作或运行正常。" +
            "<br><br>" +
            "(D) '高效' 意味着以良好组织和能力工作。"
    },
    {
        id: 6,
        question: "It was __________ that she was excited about the trip; her smile said it all.",
        chinese_question: "显然她对这次旅行很兴奋；她的笑容说明了一切。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "B", answer: "apparent", chinese_answer: "显然的", chinese_romanization: "xiǎnrán de" },
            { option: "C", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchǔ de" },
            { option: "D", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apparent' means clearly visible or understood; obvious." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(C) 'unclear' means not easy to see, hear, or understand." +
            "<br><br>" +
            "(D) 'obscure' means not discovered or known about; uncertain.",
        chinese_explanation: "(B) '显然的' 意味着清晰可见或理解的；明显的。" +
            "<br><br>" +
            "(A) '隐藏的' 意味着被隐藏；隐蔽的。" +
            "<br><br>" +
            "(C) '不清楚的' 意味着不容易看到、听到或理解的。" +
            "<br><br>" +
            "(D) '模糊的' 意味着未被发现或了解的；不确定的。"
    },
    {
        id: 7,
        question: "Efforts were made to provide food supplies to the __________ population after the disaster.",
        chinese_question: "灾难发生后，人们努力向 __________ 的人口提供食物。",
        answers: [
            { option: "A", answer: "thriving", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "B", answer: "starved", chinese_answer: "挨饿的", chinese_romanization: "ái'è de" },
            { option: "C", answer: "flourishing", chinese_answer: "兴旺的", chinese_romanization: "xīngwàng de" },
            { option: "D", answer: "nourished", chinese_answer: "营养充足的", chinese_romanization: "yíngyǎng chōngzú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'starved' means to suffer or die from lack of food." +
            "<br><br>" +
            "(A) 'thriving' means growing or developing well or vigorously." +
            "<br><br>" +
            "(C) 'flourishing' means developing rapidly and successfully; thriving." +
            "<br><br>" +
            "(D) 'nourished' means provided with the food or other substances necessary for growth, health, and good condition.",
        chinese_explanation: "(B) '挨饿的' 意味着因缺乏食物而受苦或死亡。" +
            "<br><br>" +
            "(A) '繁荣的' 意味着良好或旺盛地生长或发展。" +
            "<br><br>" +
            "(C) '兴旺的' 意味着快速发展并取得成功；繁荣的。" +
            "<br><br>" +
            "(D) '营养充足的' 意味着提供生长、健康和良好状况所需的食物或其他物质。"
    },
    {
        id: 8,
        question: "The maintenance team performed the __________ check on the equipment to ensure it was functioning properly.",
        chinese_question: "维修团队进行了设备的 __________ 检查，以确保其正常运行。",
        answers: [
            { option: "A", answer: "routine", chinese_answer: "例行", chinese_romanization: "lìxíng" },
            { option: "B", answer: "emergency", chinese_answer: "紧急", chinese_romanization: "jǐnjí" },
            { option: "C", answer: "unusual", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "D", answer: "haphazard", chinese_answer: "随意", chinese_romanization: "suíyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'routine' means a sequence of actions regularly followed; a fixed program." +
            "<br><br>" +
            "(B) 'emergency' means a serious, unexpected, and often dangerous situation requiring immediate action." +
            "<br><br>" +
            "(C) 'unusual' means not habitually or commonly occurring or done." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious principle of organization.",
        chinese_explanation: "(A) '例行' 意味着定期遵循的一系列行动；固定程序。" +
            "<br><br>" +
            "(B) '紧急' 意味着需要立即采取行动的严重、意外且常常危险的情况。" +
            "<br><br>" +
            "(C) '异常' 意味着不习惯或不常发生或做的。" +
            "<br><br>" +
            "(D) '随意' 意味着缺乏任何明显的组织原则。"
    },
    {
        id: 9,
    question: "He wore a __________ coat that had clearly seen better days, with patches and frayed edges.",
    chinese_question: "他穿着一件 __________ 的外套，显然已经风光不再，上面有补丁和磨损的边缘。",
    answers: [
        { option: "A", answer: "elegant", chinese_answer: "优雅", chinese_romanization: "yōuyǎ" },
        { option: "B", answer: "trendy", chinese_answer: "时髦", chinese_romanization: "shímáo" },
        { option: "C", answer: "stylish", chinese_answer: "时尚", chinese_romanization: "shíshàng" },
        { option: "D", answer: "shabby", chinese_answer: "破旧", chinese_romanization: "pòjiù" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'shabby' means in poor condition through long use or lack of care." +
        "<br><br>" +
        "(A) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
        "<br><br>" +
        "(B) 'trendy' means very fashionable or up to date." +
        "<br><br>" +
        "(C) 'stylish' means having or displaying a good sense of style.",
    chinese_explanation: "(D) '破旧' 意味着由于长期使用或缺乏维护而处于糟糕的状态。" +
        "<br><br>" +
        "(A) '优雅' 意味着外观或举止令人愉悦地优美和时尚。" +
        "<br><br>" +
        "(B) '时髦' 意味着非常时尚或最新的。" +
        "<br><br>" +
        "(C) '时尚' 意味着有或显示出良好的风格感。"
    },
    {
        id: 10,
        question: "The __________ hero never received recognition for his brave deeds.",
        chinese_question: "这位__________的英雄从未因其英勇事迹而得到表彰。",
        answers: [
            { option: "A", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "B", answer: "unsung", chinese_answer: "默默无闻的", chinese_romanization: "mòmò wú wén de" },
            { option: "C", answer: "celebrated", chinese_answer: "受赞扬的", chinese_romanization: "shòu zànyáng de" },
            { option: "D", answer: "acclaimed", chinese_answer: "受欢迎的", chinese_romanization: "shòu huānyíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unsung' means not celebrated or praised." +
            "<br><br>" +
            "(A) 'famous' means known about by many people." +
            "<br><br>" +
            "(C) 'celebrated' means greatly admired; renowned." +
            "<br><br>" +
            "(D) 'acclaimed' means praised enthusiastically and publicly.",
        chinese_explanation: "(B) '默默无闻的'一词意味着未被庆祝或赞扬的。" +
            "<br><br>" +
            "(A) '著名的' 意味着被许多人知道的。" +
            "<br><br>" +
            "(C) '受赞扬的' 意味着受到高度钦佩的；著名的。" +
            "<br><br>" +
            "(D) '受欢迎的' 意味着受到热烈和公开的赞扬的。"
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
