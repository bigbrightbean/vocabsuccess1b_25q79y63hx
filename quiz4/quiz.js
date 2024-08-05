// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ speaker, with his grandiose language and self-important demeanour, bored the audience quickly.",
        chinese_question: "那位 __________ 的演讲者，用夸张的语言和自负的举止，很快让观众感到无聊。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "C", answer: "pompous", chinese_answer: "自负的", chinese_romanization: "zìfù de" },
            { option: "D", answer: "unassuming", chinese_answer: "不装腔作势的", chinese_romanization: "bù zhuāngqiāng zuòshì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pompous' means affectedly and irritatingly grand, solemn, or self-important." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'unassuming' means not pretentious or arrogant; modest.",
        chinese_explanation: "(C) '自负的' 意味着做作的和令人恼火的庄严或自以为是。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估。" +
            "<br><br>" +
            "(B) '谦虚的' 意味着对自己的能力或成就不自以为是的。" +
            "<br><br>" +
            "(D) '不装腔作势的' 意味着不自负或傲慢的；谦虚的。"
    },
    {
        id: 2,
        question: "Despite his wealth, he lived a __________ lifestyle, avoiding any unnecessary luxuries.",
        chinese_question: "尽管他很富有，他过着 __________ 的生活，避免任何不必要的奢侈。",
        answers: [
            { option: "A", answer: "parsimonious", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "B", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "C", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
            { option: "D", answer: "prodigal", chinese_answer: "挥霍的", chinese_romanization: "huīhuò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'parsimonious' means unwilling to spend money or use resources; stingy or frugal." +
            "<br><br>" +
            "(B) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(C) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(D) 'prodigal' means spending money or resources freely and recklessly; wastefully extravagant.",
        chinese_explanation: "(A) '吝啬的' 意味着不愿花钱或使用资源；吝啬或节俭的。" +
            "<br><br>" +
            "(B) '奢侈的' 意味着在花钱或使用资源上缺乏克制的。" +
            "<br><br>" +
            "(C) '浪费的' 意味着不小心、奢侈或无目的地使用或消耗有价值的东西。" +
            "<br><br>" +
            "(D) '挥霍的' 意味着自由和鲁莽地花费金钱或资源；挥霍浪费的。"
    },
    {
        id: 3,
        question: "His __________ remarks during the meeting, which included mocking his colleagues, were completely unprofessional.",
        chinese_question: "他在会议上的 __________ 言论，包括嘲笑他的同事，完全不专业。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "obnoxious", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "C", answer: "agreeable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "D", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obnoxious' means extremely unpleasant or offensive." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'agreeable' means enjoyable and pleasurable; pleasant." +
            "<br><br>" +
            "(D) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(B) '令人厌恶的' 意味着极其令人不快或冒犯的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着带来快乐满足感的。" +
            "<br><br>" +
            "(C) '令人愉快的' 意味着令人愉快和愉悦的；愉快的。" +
            "<br><br>" +
            "(D) '有礼貌的' 意味着举止礼貌、尊重或体贴的。"
    },
    {
        id: 4,
        question: "The rope was pulled __________, with no slack left, ensuring the tent was securely fastened.",
        chinese_question: "绳子被拉得 __________，没有任何松弛，确保帐篷被牢固地固定住。",
        answers: [
            { option: "A", answer: "loose", chinese_answer: "松的", chinese_romanization: "sōng de" },
            { option: "B", answer: "taut", chinese_answer: "拉紧的", chinese_romanization: "lā jǐn de" },
            { option: "C", answer: "slack", chinese_answer: "松弛的", chinese_romanization: "sōngchí de" },
            { option: "D", answer: "droopy", chinese_answer: "下垂的", chinese_romanization: "xiàchuí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'taut' means stretched or pulled tight; not slack." +
            "<br><br>" +
            "(A) 'loose' means not firmly or tightly fixed in place; detached or able to be detached." +
            "<br><br>" +
            "(C) 'slack' means not taut or held tightly in position; loose." +
            "<br><br>" +
            "(D) 'droopy' means hanging down limply.",
        chinese_explanation: "(B) '拉紧的' 意味着拉伸或拉紧；不松弛的。" +
            "<br><br>" +
            "(A) '松的' 意味着没有牢固或紧紧固定在原地的；分离或能够分离的。" +
            "<br><br>" +
            "(C) '松弛的' 意味着不拉紧或不牢固固定的；松弛的。" +
            "<br><br>" +
            "(D) '下垂的' 意味着下垂松软。"
    },
    {
        id: 5,
        question: "The weather in the mountains is highly __________, changing from sunny to stormy in minutes.",
        chinese_question: "山上的天气非常__________，在几分钟内从晴天变成暴风雨。",
        answers: [
            { option: "A", answer: "constant", chinese_answer: "恒定的", chinese_romanization: "héngdìng de" },
            { option: "B", answer: "mutable", chinese_answer: "多变的", chinese_romanization: "duōbiàn de" },
            { option: "C", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "unchanging", chinese_answer: "不变的", chinese_romanization: "bù biàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mutable' means liable to change." +
            "<br><br>" +
            "(A) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(C) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(D) 'unchanging' means not changing; remaining the same.",
        chinese_explanation: "(B) '多变的' 意味着容易变化的。" +
            "<br><br>" +
            "(A) '恒定的' 意味着在一段时间内持续发生的。" +
            "<br><br>" +
            "(C) '稳定的' 意味着不容易变化或失败的；稳固建立的。" +
            "<br><br>" +
            "(D) '不变的' 意味着不变化的；保持不变的。"
    },
    {
        id: 6,
        question: "She was __________ in accepting the award, thanking everyone for their support.",
        chinese_question: "她 __________ 地接受了奖项，感谢大家的支持。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
            { option: "B", answer: "ungrateful", chinese_answer: "忘恩负义", chinese_romanization: "wàng'ēn fùyì" },
            { option: "C", answer: "gracious", chinese_answer: "亲切", chinese_romanization: "qīnqiè" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gracious' means courteous, kind, and pleasant." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(B) 'ungrateful' means not feeling or showing gratitude." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '亲切' 意味着礼貌、友善和愉快。" +
            "<br><br>" +
            "(A) '粗鲁' 意味着冒犯性的不礼貌或无礼。" +
            "<br><br>" +
            "(B) '忘恩负义' 意味着没有感激之情或不表现出感激之情。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 7,
        question: "The __________ decorations for Halloween included fake tombstones and eerie skeletons.",
        chinese_question: "万圣节的__________装饰包括假墓碑和诡异的骷髅。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "ghoulish", chinese_answer: "恐怖的", chinese_romanization: "kǒngbù de" },
            { option: "C", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "D", answer: "joyful", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ghoulish' means resembling or characteristic of a ghoul; morbidly interested in death or disaster." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(D) 'joyful' means feeling, expressing, or causing great pleasure and happiness.",
        chinese_explanation: "(B) '恐怖的'一词意味着类似或特征为食尸鬼的；病态地对死亡或灾难感兴趣的。" +
            "<br><br>" +
            "(A) '快乐的' 意味着显著地快乐和乐观的。" +
            "<br><br>" +
            "(C) '明亮的' 意味着发出或反射大量光线的；闪耀的。" +
            "<br><br>" +
            "(D) '欢乐的' 意味着感到、表达或引起极大的愉悦和快乐的。"
    },
    {
        id: 8,
        question: "The __________ weather in the mountains made it difficult to plan outdoor activities.",
        chinese_question: "山中的 __________ 天气使得很难计划户外活动。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "B", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" },
            { option: "C", answer: "fickle", chinese_answer: "反复无常", chinese_romanization: "fǎnfù wúcháng" },
            { option: "D", answer: "consistent", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fickle' means changing frequently, especially as regards one's loyalties, interests, or affection." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate.",
        chinese_explanation: "(C) '反复无常' 意味着经常变化，特别是关于一个人的忠诚、兴趣或感情。" +
            "<br><br>" +
            "(A) '稳定' 意味着不太可能改变或失败；牢固确立的。" +
            "<br><br>" +
            "(B) '可预测' 意味着能够预测。" +
            "<br><br>" +
            "(D) '一致' 意味着以同样的方式行动或完成，特别是为了公平或准确。"
    },
    {
        id: 9,
    question: "The nurse was very __________, always ready to listen and provide comfort to her patients.",
    chinese_question: "护士非常 __________，总是准备好倾听并安慰她的病人。",
    answers: [
        { option: "A", answer: "unsympathetic", chinese_answer: "无同情心的", chinese_romanization: "wú tóngqíng xīn de" },
        { option: "B", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "C", answer: "sympathetic", chinese_answer: "富有同情心的", chinese_romanization: "fùyǒu tóngqíng xīn de" },
        { option: "D", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sympathetic' means feeling, showing, or expressing sympathy." +
        "<br><br>" +
        "(A) 'unsympathetic' means not feeling, showing, or expressing sympathy." +
        "<br><br>" +
        "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy.",
    chinese_explanation: "(C) '富有同情心的' 意味着感受、表现或表达同情的。" +
        "<br><br>" +
        "(A) '无同情心的' 意味着没有感受、表现或表达同情的。" +
        "<br><br>" +
        "(B) '冷漠的' 意味着没有兴趣、热情或关心的。" +
        "<br><br>" +
        "(D) '无动于衷的' 意味着没有特别的兴趣或同情的。"
    },
    {
        id: 10,
        question: "The __________ nature of the spring blossoms meant they would only be visible for a short time.",
        chinese_question: "春天花朵的 __________ 性质意味着它们只会在短时间内可见。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
            { option: "B", answer: "transient", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" },
            { option: "C", answer: "enduring", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "D", answer: "lasting", chinese_answer: "持续", chinese_romanization: "chíxù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'transient' means lasting only for a short time; impermanent." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(C) 'enduring' means lasting over a long period." +
            "<br><br>" +
            "(D) 'lasting' means enduring or able to endure over a long period.",
        chinese_explanation: "(B) '短暂' 意味着只持续很短的时间；不永久的。" +
            "<br><br>" +
            "(A) '永久' 意味着持续或打算无限期保持不变。" +
            "<br><br>" +
            "(C) '持久' 意味着持续很长时间。" +
            "<br><br>" +
            "(D) '持续' 意味着持续或能够持续很长时间。"
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
