// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the team's efforts, the project faced __________ challenges that seemed insurmountable.",
        chinese_question: "尽管团队努力了，项目还是面临着 __________ 的挑战，似乎难以克服。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "B", answer: "formidable", chinese_answer: "强大", chinese_romanization: "qiángdà" },
            { option: "C", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(B) '强大' 意味着由于其规模大、力量强、强度大或能力强而引起恐惧或尊敬。" +
            "<br><br>" +
            "(A) '琐碎' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(C) '平凡' 意味着缺乏兴趣或刺激；乏味。" +
            "<br><br>" +
            "(D) '微不足道' 意味着小得或不重要得不值得考虑。"
    },
    {
        id: 2,
        question: "The details of the contract were __________, leaving many questions unanswered.",
        chinese_question: "合同的细节很__________，留下了许多未解答的问题。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清澈的", chinese_romanization: "qīngchè de" },
            { option: "B", answer: "murky", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
            { option: "C", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "D", answer: "limpid", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'murky' means dark and gloomy, especially due to thick mist. Figuratively, it can mean unclear or not fully explained." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen." +
            "<br><br>" +
            "(D) 'limpid' means completely clear and transparent.",
        chinese_explanation: "(B) '昏暗的'一词意味着黑暗和阴沉的，尤其是由于浓雾。比喻地，它可以表示不清楚或没有完全解释的。" +
            "<br><br>" +
            "(A) '清澈的' 意味着容易察觉、理解或解释的。" +
            "<br><br>" +
            "(C) '透明的' 意味着允许光线通过，以便清晰地看到后面的物体。" +
            "<br><br>" +
            "(D) '清晰的' 意味着完全清澈和透明的。"
    },
    {
        id: 3,
        question: "The tattoo she got was __________, a lasting reminder of her trip to Japan.",
        chinese_question: "她得到的纹身是 __________ 的，是她去日本旅行的持久纪念。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "D", answer: "momentary", chinese_answer: "瞬间的", chinese_romanization: "shùnjiān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(D) 'momentary' means lasting for a very short time; brief.",
        chinese_explanation: "(C) '永久的' 意味着无限期地持续或打算持续或保持不变的。" +
            "<br><br>" +
            "(A) '临时的' 意味着只持续有限时间的；不永久的。" +
            "<br><br>" +
            "(B) '短暂的' 意味着持续时间非常短的。" +
            "<br><br>" +
            "(D) '瞬间的' 意味着持续时间非常短的；简短的。"
    },
    {
        id: 4,
        question: "The act of vandalizing the church was considered __________ by the community.",
        chinese_question: "破坏教堂的行为被社区认为是 __________ 的。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "B", answer: "sacred", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
            { option: "C", answer: "sacrilegious", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" },
            { option: "D", answer: "reverent", chinese_answer: "恭敬的", chinese_romanization: "gōngjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sacrilegious' means involving or committing sacrilege; disrespecting something considered sacred." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(B) 'sacred' means connected with God or dedicated to a religious purpose and so deserving veneration." +
            "<br><br>" +
            "(D) 'reverent' means feeling or showing deep and solemn respect.",
        chinese_explanation: "(C) '亵渎的' 意味着涉及或犯亵渎罪；不尊重被认为是神圣的东西。" +
            "<br><br>" +
            "(A) '尊重的' 意味着感到或表现出敬意的。" +
            "<br><br>" +
            "(B) '神圣的' 意味着与上帝有关或专用于宗教目的，因此值得尊敬的。" +
            "<br><br>" +
            "(D) '恭敬的' 意味着感到或表现出深刻和庄重的敬意的。"
    },
    {
        id: 5,
    question: "The actor's __________ performance captivated the audience with its exaggerated gestures and dramatic expressions.",
    chinese_question: "这位演员的 __________ 表演以夸张的手势和戏剧性的表情吸引了观众。",
    answers: [
        { option: "A", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" },
        { option: "B", answer: "subdued", chinese_answer: "柔和", chinese_romanization: "róuhé" },
        { option: "C", answer: "understated", chinese_answer: "低调", chinese_romanization: "dīdiào" },
        { option: "D", answer: "theatrical", chinese_answer: "戏剧性", chinese_romanization: "xìjùxìng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'theatrical' means exaggerated and dramatic." +
        "<br><br>" +
        "(A) 'monotonous' means dull, tedious, and repetitious." +
        "<br><br>" +
        "(B) 'subdued' means quiet and rather reflective or depressed." +
        "<br><br>" +
        "(C) 'understated' means presented or expressed in a subtle and effective way.",
    chinese_explanation: "(D) '戏剧性' 意味着夸张和戏剧性。" +
        "<br><br>" +
        "(A) '单调' 意味着沉闷、乏味和重复。" +
        "<br><br>" +
        "(B) '柔和' 意味着安静并且相当反思或忧郁。" +
        "<br><br>" +
        "(C) '低调' 意味着以微妙而有效的方式呈现或表达。"
    },
    {
        id: 6,
        question: "The school district is working to provide an __________ distribution of resources to all schools, regardless of their location or student population.",
        chinese_question: "学区正在努力为所有学校提供 __________ 的资源分配，无论其位置或学生人数如何。",
        answers: [
            { option: "A", answer: "uneven", chinese_answer: "不均匀的", chinese_romanization: "bù jūnyún de" },
            { option: "B", answer: "equitable", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "C", answer: "lopsided", chinese_answer: "不平衡的", chinese_romanization: "bù pínghéng de" },
            { option: "D", answer: "unequal", chinese_answer: "不平等的", chinese_romanization: "bù píngděng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'equitable' means fair and impartial." +
            "<br><br>" +
            "(A) 'uneven' means not level or smooth; not consistent or equal." +
            "<br><br>" +
            "(C) 'lopsided' means with one side lower or smaller than the other." +
            "<br><br>" +
            "(D) 'unequal' means not equal in quantity, size, or value.",
        chinese_explanation: "(B) '公平的' 意味着公正和不偏不倚的。" +
            "<br><br>" +
            "(A) '不均匀的' 意味着不平或不光滑的；不一致或不相等的。" +
            "<br><br>" +
            "(C) '不平衡的' 意味着一边低于或小于另一边的。" +
            "<br><br>" +
            "(D) '不平等的' 意味着在数量、大小或价值上不相等的。",
    },
    {
        id: 7,
        question: "The __________ mountain range stretched as far as the eye could see, impressing everyone with its vastness.",
        chinese_question: "那片 __________ 的山脉一望无际，以其浩瀚无垠令人印象深刻。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "B", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "C", answer: "prodigious", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prodigious' means remarkably or impressively great in extent, size, or degree." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(B) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(D) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(C) '巨大的' 意味着在范围、大小或程度上令人惊讶或令人印象深刻的。" +
            "<br><br>" +
            "(A) '微小的' 意味着非常小的。" +
            "<br><br>" +
            "(B) '适度的' 意味着在数量、强度、质量或程度上是平均的。" +
            "<br><br>" +
            "(D) '小的' 意味着大小小于正常或通常的。"
    },
    {
        id: 8,
        question: "Her __________ thoughts about the upcoming exam made it hard for her to concentrate on anything else.",
        chinese_question: "她对即将到来的考试的 __________ 思绪使她很难集中注意力于其他事情。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "B", answer: "preoccupied", chinese_answer: "心不在焉的", chinese_romanization: "xīn bù zài yān de" },
            { option: "C", answer: "disengaged", chinese_answer: "脱离的", chinese_romanization: "tuōlí de" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'preoccupied' means engrossed in thought; distracted." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'disengaged' means emotionally detached." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(B) '心不在焉的' 意味着沉浸在思考中；心不在焉的。" +
            "<br><br>" +
            "(A) '无动于衷的' 意味着没有特别兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '脱离的' 意味着情感上脱离的。" +
            "<br><br>" +
            "(D) '不感兴趣的' 意味着对某事或某人不感兴趣或不关心的。"
    },
    {
        id: 9,
        question: "Her __________ perspective on the issue brought new energy and optimism to the discussion.",
        chinese_question: "她对这个问题的 __________ 看法为讨论带来了新的活力和乐观情绪。",
        answers: [
            { option: "A", answer: "cynical", chinese_answer: "愤世嫉俗的", chinese_romanization: "fènshì jísú de" },
            { option: "B", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "C", answer: "refreshing", chinese_answer: "清新的", chinese_romanization: "qīng xīn de" },
            { option: "D", answer: "negative", chinese_answer: "消极的", chinese_romanization: "xiāojí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'refreshing' means welcome or invigorating through newness or novelty." +
            "<br><br>" +
            "(A) 'cynical' means believing that people are motivated by self-interest; distrustful of human sincerity or integrity." +
            "<br><br>" +
            "(B) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(D) 'negative' means consisting in or characterized by the absence rather than the presence of distinguishing features.",
        chinese_explanation: "(C) '清新的' 意味着通过新颖或新奇带来欢迎或振奋的。" +
            "<br><br>" +
            "(A) '愤世嫉俗的' 意味着认为人们是出于自利而行动的；不信任人类真诚或诚信的。" +
            "<br><br>" +
            "(B) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的事情会发生。" +
            "<br><br>" +
            "(D) '消极的' 意味着由缺乏而不是存在而特征化的。"
    },
    {
        id: 10,
        question: "Her __________ response to the emergency situation showed her lack of experience and preparedness.",
        chinese_question: "她对紧急情况的 __________ 反应显示了她缺乏经验和准备。",
        answers: [
            { option: "A", answer: "quick", chinese_answer: "迅速的", chinese_romanization: "xùnsù de" },
            { option: "B", answer: "decisive", chinese_answer: "果断的", chinese_romanization: "guǒduàn de" },
            { option: "C", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "D", answer: "prompt", chinese_answer: "迅速的", chinese_romanization: "xùnsù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sluggish' means lacking energy or alertness; slow to respond or make progress." +
            "<br><br>" +
            "(A) 'quick' means moving fast or doing something in a short time." +
            "<br><br>" +
            "(B) 'decisive' means settling an issue; producing a definite result." +
            "<br><br>" +
            "(D) 'prompt' means done without delay; immediate.",
        chinese_explanation: "(C) '迟缓的' 意味着缺乏能量或警觉性；反应迟钝或进展缓慢的。" +
            "<br><br>" +
            "(A) '迅速的' 意味着快速移动或在短时间内做某事的。" +
            "<br><br>" +
            "(B) '果断的' 意味着解决问题的；产生明确结果的。" +
            "<br><br>" +
            "(D) '迅速的' 意味着没有延迟的；立即的。"
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
