// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "By gathering all necessary evidence and witnesses, he decided to __________ the case to ensure that justice was served.",
        chinese_question: "通过收集所有必要的证据和证人，他决定 __________ 案件，以确保正义得到伸张。",
        answers: [
            { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "prosecute", chinese_answer: "起诉", chinese_romanization: "qǐsù" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prosecute' means to institute legal proceedings against someone." +
            "<br><br>" +
            "(A) 'abandon' means to give up completely." +
            "<br><br>" +
            "(C) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '起诉'一词意味着对某人提起法律诉讼。" +
            "<br><br>" +
            "(A) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(C) '驳回' 意味着命令或允许离开；遣散。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
    question: "Despite having plenty of resources, he continued to __________ food and supplies as if preparing for a disaster.",
    chinese_question: "尽管有充足的资源，他仍然继续囤积食物和物资，就像在为灾难做准备。",
    answers: [
        { option: "A", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
        { option: "B", answer: "share", chinese_answer: "分享", chinese_romanization: "fēnxiǎng" },
        { option: "C", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
        { option: "D", answer: "distribute", chinese_answer: "分发", chinese_romanization: "fēnfā" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hoard' means to accumulate and store away (a large amount of something) for future use." +
        "<br><br>" +
        "(B) 'share' means to have a portion of (something) with another or others." +
        "<br><br>" +
        "(C) 'waste' means to use or expend carelessly, extravagantly, or to no purpose." +
        "<br><br>" +
        "(D) 'distribute' means to give shares of (something); deal out.",
    chinese_explanation: "(A) '囤积' 意味着积累和存储（大量的某物）以备将来使用。" +
        "<br><br>" +
        "(B) '分享' 意味着与他人共同拥有（某物）的份额。" +
        "<br><br>" +
        "(C) '浪费' 意味着不小心地、奢侈地或无目的地使用或消耗。" +
        "<br><br>" +
        "(D) '分发' 意味着将（某物）分发给各部分；分配。"
    },
    {
        id: 3,
        question: "The calm lake __________ the beautiful mountain scenery perfectly, mirroring every detail clearly.",
        chinese_question: "平静的湖面完美地 __________ 出美丽的山景，清晰地反映出每一个细节。",
        answers: [
            { option: "A", answer: "absorbed", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
            { option: "B", answer: "hid", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "distorted", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
            { option: "D", answer: "reflected", chinese_answer: "反映", chinese_romanization: "fǎnyìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reflected' means to throw back (heat, light, or sound) without absorbing it." +
            "<br><br>" +
            "(A) 'absorbed' means to take in or soak up (energy, or a liquid or other substance) by chemical or physical action." +
            "<br><br>" +
            "(B) 'hid' means to put or keep out of sight." +
            "<br><br>" +
            "(C) 'distorted' means to pull or twist out of shape.",
        chinese_explanation: "(D) '反映' 意味着反射（热、光或声音）而不吸收它。" +
            "<br><br>" +
            "(A) '吸收' 意味着通过化学或物理作用吸收或吸收（能量或液体或其他物质）。" +
            "<br><br>" +
            "(B) '隐藏' 意味着把或保持在视线之外。" +
            "<br><br>" +
            "(C) '扭曲' 意味着拉或扭曲变形。"
    },
    {
        id: 4,
        question: "The speaker's inflammatory remarks __________ the crowd to protest violently.",
        chinese_question: "演讲者煽动性的言论 __________ 人群进行暴力抗议。",
        answers: [
            { option: "A", answer: "calmed", chinese_answer: "平息", chinese_romanization: "píngxī" },
            { option: "B", answer: "confused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "C", answer: "incited", chinese_answer: "煽动", chinese_romanization: "shāndòng" },
            { option: "D", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incited' means encouraged or stirred up (violent or unlawful behavior)." +
            "<br><br>" +
            "(A) 'calmed' means made or became quiet or calm." +
            "<br><br>" +
            "(B) 'confused' means made (someone) bewildered or perplexed." +
            "<br><br>" +
            "(D) 'discouraged' means caused (someone) to lose confidence or enthusiasm.",
        chinese_explanation: "(C) '煽动' 意味着鼓励或煽动（暴力或非法行为）。" +
            "<br><br>" +
            "(A) '平息' 意味着使或变得安静或冷静。" +
            "<br><br>" +
            "(B) '使困惑' 意味着使（某人）迷惑或困惑。" +
            "<br><br>" +
            "(D) '劝阻' 意味着使（某人）失去信心或热情。"
    },
    {
        id: 5,
    question: "The movie's intricate plot and stunning visuals __________ the audience from beginning to end.",
    chinese_question: "电影复杂的情节和惊艳的视觉效果从头到尾 __________ 了观众。",
    answers: [
        { option: "A", answer: "enthralled", chinese_answer: "迷住了", chinese_romanization: "mízhùle" },
        { option: "B", answer: "disappointed", chinese_answer: "使失望", chinese_romanization: "shǐ shīwàng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "confused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enthralled' means to capture the fascinated attention of someone, used figuratively here." +
        "<br><br>" + 
        "(B) 'disappointed' means to fail to fulfill someone's hopes or expectations." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'confused' means to make someone bewildered or perplexed.",
    chinese_explanation: "(A) '迷住了' 意味着吸引某人的注意力，这里是比喻用法。" +
        "<br><br>" + 
        "(B) '使失望' 意味着未能实现某人的期望。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '使困惑' 意味着使某人困惑或不解。"
    },
    {
        id: 6,
    question: "During the meeting, he couldn't help but __________ on about his personal life, much to everyone's annoyance.",
    chinese_question: "在会议期间，他忍不住 __________ 他的个人生活，这让大家很烦恼。",
    answers: [
        { option: "A", answer: "jabber", chinese_answer: "喋喋不休", chinese_romanization: "diédiébùxiū" },
        { option: "B", answer: "analyze", chinese_answer: "分析", chinese_romanization: "fēnxī" },
        { option: "C", answer: "meditate", chinese_answer: "冥想", chinese_romanization: "míngxiǎng" },
        { option: "D", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jabber' means to talk rapidly and excitedly but with little sense." +
        "<br><br>" +
        "(B) 'analyze' means to examine methodically and in detail the constitution or structure of something." +
        "<br><br>" +
        "(C) 'meditate' means to think deeply or focus one's mind for a period of time." +
        "<br><br>" +
        "(D) 'rest' means to cease work or movement in order to relax.",
    chinese_explanation: "(A) '喋喋不休' 意味着快速且兴奋地说话，但意义不大。" +
        "<br><br>" +
        "(B) '分析' 意味着系统地、详细地检查某物的构成或结构。" +
        "<br><br>" +
        "(C) '冥想' 意味着深思或集中注意力一段时间。" +
        "<br><br>" +
        "(D) '休息' 意味着停止工作或运动以放松。"
    },
    {
        id: 7,
        question: "The child __________ his parents for a new toy until they finally gave in and bought it for him.",
        chinese_question: "那个孩子不断地 __________ 他的父母要一件新玩具，直到他们最终同意并给他买了。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "B", answer: "thanked", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" },
            { option: "C", answer: "comforted", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "D", answer: "badgered", chinese_answer: "纠缠", chinese_romanization: "jiūchán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'badgered' means repeatedly and annoyingly asked (someone) to do something." +
            "<br><br>" +
            "(A) 'ignored' means refused to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'thanked' means expressed gratitude to someone." +
            "<br><br>" +
            "(C) 'comforted' means eased the grief or distress of.",
        chinese_explanation: "(D) '纠缠' 意味着反复且恼人地要求（某人）做某事。" +
            "<br><br>" +
            "(A) '忽略' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '感谢' 意味着向某人表达感激之情。" +
            "<br><br>" +
            "(C) '安慰' 意味着缓解某人的悲痛或苦恼。"
    },
    {
        id: 8,
        question: "The artist will __________ his latest painting at the gallery opening next week.",
        chinese_question: "这位艺术家将在下周的画廊开幕式上 __________ 他最新的画作。",
        answers: [
            { option: "A", answer: "unveil", chinese_answer: "揭幕", chinese_romanization: "jiēmù" },
            { option: "B", answer: "cover", chinese_answer: "覆盖", chinese_romanization: "fùgài" },
            { option: "C", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "mask", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unveil' means to reveal or disclose something, especially something that has been kept secret." +
            "<br><br>" +
            "(B) 'cover' means to put something on top of or in front of something in order to protect or conceal it." +
            "<br><br>" +
            "(C) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(D) 'mask' means to cover or conceal.",
        chinese_explanation: "(A) '揭幕' 意味着揭示或公开某事，尤其是一直保密的事情。" +
            "<br><br>" +
            "(B) '覆盖' 意味着在某物上面或前面放置某物以保护或隐藏它。" +
            "<br><br>" +
            "(C) '隐藏' 意味着把某物放到看不见的地方或保持看不见。" +
            "<br><br>" +
            "(D) '遮掩' 意味着覆盖或隐藏。"
    },
    {
        id: 9,
    question: "Using historical data, the researchers could __________ the outcome of the experiment with high accuracy.",
    chinese_question: "利用历史数据，研究人员可以高精度地 __________ 实验结果。",
    answers: [
        { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "B", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
        { option: "C", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
        { option: "D", answer: "underestimate", chinese_answer: "低估", chinese_romanization: "dīgū" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'predict' means to say what will happen in the future." +
        "<br><br>" +
        "(A) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(B) 'emphasize' means to give special importance or prominence to something." +
        "<br><br>" +
        "(D) 'underestimate' means to estimate something to be smaller or less important than it actually is.",
    chinese_explanation: "(C) '预测' 意味着说出将来会发生什么。" +
        "<br><br>" +
        "(A) '避免' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(B) '强调' 意味着对某事物给予特别的重要性或突出。" +
        "<br><br>" +
        "(D) '低估' 意味着低估某事物的重要性或规模。"
    },
    {
        id: 10,
        question: "Despite the harsh weather, the hikers were determined to __________ the journey to the mountain summit.",
        chinese_question: "尽管天气恶劣，徒步旅行者仍决心 __________ 这段通往山顶的旅程。",
        answers: [
            { option: "A", answer: "endure", chinese_answer: "忍受", chinese_romanization: "rěnshòu" },
            { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endure' means to suffer (something painful or difficult) patiently." +
            "<br><br>" +
            "(B) 'abandon' means to give up completely." +
            "<br><br>" +
            "(C) 'enjoy' means to take delight or pleasure in." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(A) '忍受' 意味着耐心地忍受（痛苦或困难的事情）。" +
            "<br><br>" +
            "(B) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(C) '享受' 意味着从中获得乐趣或愉悦。" +
            "<br><br>" +
            "(D) '避免' 意味着避开或阻止自己做某事。"
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
