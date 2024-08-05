// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The teenager sat with a __________ expression after being grounded for the weekend.",
        chinese_question: "青少年在被禁足周末后坐在那里，表情 __________。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "sullen", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "C", answer: "joyous", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "D", answer: "happy", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sullen' means bad-tempered and sulky; gloomy." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'joyous' means feeling, showing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(D) 'happy' means feeling or showing pleasure or contentment.",
        chinese_explanation: "(B) '阴沉的' 意味着脾气暴躁和愠怒的；阴郁的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(C) '快乐的' 意味着感到、表现或引起极大的快乐和幸福。" +
            "<br><br>" +
            "(D) '高兴的' 意味着感到或表现出愉快或满足。"
    },
    {
        id: 2,
        question: "Her __________ moods made her difficult to work with.",
        chinese_question: "她__________的情绪使得与她共事变得困难。",
        answers: [
            { option: "A", answer: "temperamental", chinese_answer: "喜怒无常的", chinese_romanization: "xǐnù wúcháng de" },
            { option: "B", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "consistent", chinese_answer: "一贯的", chinese_romanization: "yīguàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'temperamental' means liable to unreasonable changes of mood." +
            "<br><br>" +
            "(B) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate.",
        chinese_explanation: "(A) '喜怒无常的'一词意味着容易出现情绪变化的。" +
            "<br><br>" +
            "(B) '稳定的' 意味着牢固固定、支撑或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着能够被预测的。" +
            "<br><br>" +
            "(D) '一贯的' 意味着以相同方式进行或完成的，尤其是为了公平或准确。"
    },
    {
        id: 3,
    question: "Her grief was __________, a depth of sadness that no words could adequately describe.",
    chinese_question: "她的悲伤是 __________ 的，一种无法用言语充分描述的深沉悲痛。",
    answers: [
        { option: "A", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "B", answer: "unfathomable", chinese_answer: "深不可测", chinese_romanization: "shēn bùkě cè" },
        { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "D", answer: "understandable", chinese_answer: "可理解的", chinese_romanization: "kě lǐjiě de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'unfathomable' means incapable of being fully explored or understood." +
        "<br><br>" +
        "(A) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(C) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(D) 'understandable' means able to be understood.",
    chinese_explanation: "(B) '深不可测' 意味着无法完全探索或理解的。" +
        "<br><br>" +
        "(A) '表面的' 意味着存在于或发生在表面上的。" +
        "<br><br>" +
        "(C) '清晰的' 意味着容易感知、理解或解释的。" +
        "<br><br>" +
        "(D) '可理解的' 意味着能够被理解的。"
    },
    {
        id: 4,
    question: "Being __________, she could easily switch between English and Spanish during conversations.",
    chinese_question: "因为是__________，她可以在对话中轻松地在英语和西班牙语之间切换。",
    answers: [
        { option: "A", answer: "monolingual", chinese_answer: "单语的", chinese_romanization: "dānyǔ de" },
        { option: "B", answer: "bilingual", chinese_answer: "双语的", chinese_romanization: "shuāngyǔ de" },
        { option: "C", answer: "trilingual", chinese_answer: "三语的", chinese_romanization: "sānyǔ de" },
        { option: "D", answer: "multilingual", chinese_answer: "多语的", chinese_romanization: "duōyǔ de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'bilingual' means speaking two languages fluently." +
        "<br><br>" +
        "(A) 'monolingual' means speaking only one language." +
        "<br><br>" +
        "(C) 'trilingual' means speaking three languages fluently." +
        "<br><br>" +
        "(D) 'multilingual' means speaking several languages fluently.",
    chinese_explanation: "(B) '双语的' 一词意味着流利地说两种语言。" +
        "<br><br>" +
        "(A) '单语的' 意味着只说一种语言。" +
        "<br><br>" +
        "(C) '三语的' 意味着流利地说三种语言。" +
        "<br><br>" +
        "(D) '多语的' 意味着流利地说几种语言。"
    },
    {
        id: 5,
        question: "The __________ maze had twists and turns that confused everyone who tried to navigate it.",
        chinese_question: "这个__________的迷宫有许多转弯，使每个试图导航的人都感到困惑。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "bewildering", chinese_answer: "令人困惑的", chinese_romanization: "lìngrén kùnhuò de" },
            { option: "C", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dāng de" },
            { option: "D", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bewildering' means extremely confusing." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(B) '令人困惑的' 意味着极其令人困惑。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成；没有困难。" +
            "<br><br>" +
            "(C) '直截了当的' 意味着简单而容易做或理解。" +
            "<br><br>" +
            "(D) '清晰的' 意味着容易感知、理解或解释。"
    },
    {
        id: 6,
        question: "His charisma was __________, drawing people to him wherever he went.",
        chinese_question: "他的魅力 __________，无论走到哪里都吸引着人们。",
        answers: [
            { option: "A", answer: "disputable", chinese_answer: "有争议", chinese_romanization: "yǒu zhēngyì" },
            { option: "B", answer: "undeniable", chinese_answer: "无可否认", chinese_romanization: "wú kě fǒurèn" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "D", answer: "questionable", chinese_answer: "可疑", chinese_romanization: "kěyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undeniable' means in a way that cannot be denied or disputed." +
            "<br><br>" +
            "(A) 'disputable' means open to disagreement or debate." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'questionable' means in a way that raises doubts or suspicions.",
        chinese_explanation: "(B) '无可否认' 意味着以一种不可否认或争辩的方式。" +
            "<br><br>" +
            "(A) '有争议' 意味着开放争论或讨论。" +
            "<br><br>" +
            "(C) '不确定' 意味着不能依赖的；未知或不确定的。" +
            "<br><br>" +
            "(D) '可疑' 意味着引起怀疑或疑虑。"
    },
    {
        id: 7,
        question: "The __________ young girl faced the bullies with courage and determination.",
        chinese_question: "那个 __________ 的小女孩勇敢而坚定地面对霸凌者。",
        answers: [
            { option: "A", answer: "plucky", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
            { option: "B", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'plucky' means having or showing determined courage in the face of difficulties." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'hesitant' means lacking decisiveness; uncertain or unwilling to make a decision.",
        chinese_explanation: "(A) '勇敢' 意味着在困难面前表现出坚定的勇气。" +
            "<br><br>" +
            "(B) '胆小' 意味着缺乏勇气或信心；容易害怕。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '犹豫' 意味着缺乏决断力；不确定或不愿做出决定。"
    },
    {
        id: 8,
        question: "The tension in the room was __________, with everyone avoiding eye contact.",
        chinese_question: "房间里的紧张气氛是 __________ 的，所有人都避免目光接触。",
        answers: [
            { option: "A", answer: "invisible", chinese_answer: "看不见的", chinese_romanization: "kàn bùjiàn de" },
            { option: "B", answer: "apparent", chinese_answer: "显然的", chinese_romanization: "xiǎnrán de" },
            { option: "C", answer: "negligible", chinese_answer: "可以忽略的", chinese_romanization: "kěyǐ hūlüè de" },
            { option: "D", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apparent' means clearly visible or understood; obvious." +
            "<br><br>" +
            "(A) 'invisible' means unable to be seen." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(D) 'subtle' means so delicate or precise as to be difficult to analyze or describe.",
        chinese_explanation: "(B) '显然的' 意味着清晰可见或理解的；明显的。" +
            "<br><br>" +
            "(A) '看不见的' 意味着无法看到的。" +
            "<br><br>" +
            "(C) '可以忽略的' 意味着如此小或不重要而不值得考虑的；无关紧要的。" +
            "<br><br>" +
            "(D) '微妙的' 意味着如此精细或精确以至于难以分析或描述的。"
    },
    {
        id: 9,
        question: "The model walked down the runway in a __________ dress that highlighted her slender figure.",
        chinese_question: "模特穿着一件 __________ 的连衣裙走在跑道上，突显了她的苗条身材。",
        answers: [
            { option: "A", answer: "bulky", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" },
            { option: "B", answer: "svelte", chinese_answer: "苗条的", chinese_romanization: "miáotiáo de" },
            { option: "C", answer: "shapeless", chinese_answer: "无形的", chinese_romanization: "wúxíng de" },
            { option: "D", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'svelte' means slender and elegant." +
            "<br><br>" +
            "(A) 'bulky' means taking up much space, typically inconveniently; large and unwieldy." +
            "<br><br>" +
            "(C) 'shapeless' means lacking a distinct shape." +
            "<br><br>" +
            "(D) 'clumsy' means awkward in movement or in handling things.",
        chinese_explanation: "(B) '苗条的' 意味着苗条和优雅的。" +
            "<br><br>" +
            "(A) '笨重的' 意味着占用很大空间，通常是不方便的；大而笨重的。" +
            "<br><br>" +
            "(C) '无形的' 意味着缺乏明确的形状。" +
            "<br><br>" +
            "(D) '笨拙的' 意味着动作或处理事情时笨拙的。"
    },
    {
        id: 10,
        question: "The athlete made a __________ impact on the sport, inspiring countless young players to follow in his footsteps.",
        chinese_question: "这位运动员对这项运动产生了 __________ 的影响，激励了无数年轻选手追随他的脚步。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "B", answer: "slight", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "C", answer: "tremendous", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "D", answer: "moderate", chinese_answer: "适度", chinese_romanization: "shìdù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tremendous' means very great in amount, scale, or intensity." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(B) 'slight' means small in degree; inconsiderable." +
            "<br><br>" +
            "(D) 'moderate' means average in amount, intensity, quality, or degree.",
        chinese_explanation: "(C) '巨大' 意味着数量、规模或强度非常大。" +
            "<br><br>" +
            "(A) '微不足道' 意味着非常小或不重要，不值得考虑。" +
            "<br><br>" +
            "(B) '轻微' 意味着程度很小；不重要的。" +
            "<br><br>" +
            "(D) '适度' 意味着数量、强度、质量或程度适中。"
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
