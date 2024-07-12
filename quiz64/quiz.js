// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The company’s growth __________ is a testament to its innovative strategies.",
    chinese_question: "公司的增长 __________ 证明了其创新战略的有效性。",
    answers: [
        { option: "A", answer: "rate", chinese_answer: "速度", chinese_romanization: "sùdù" },
        { option: "B", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "D", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rate' means a measure, quantity, or frequency, typically one measured against another quantity or measure." +
        "<br><br>" +
        "(B) 'mistake' means an action or judgment that is misguided or wrong." +
        "<br><br>" +
        "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(D) 'stagnation' means the state of not flowing or moving.",
    chinese_explanation: "(A) '速度' 意味着一种度量、数量或频率，通常与另一数量或度量相比较。" +
        "<br><br>" +
        "(B) '错误' 意味着误导或错误的行为或判断。" +
        "<br><br>" +
        "(C) '犹豫' 意味着在说或做某事之前暂停或犹豫的行为。" +
        "<br><br>" +
        "(D) '停滞' 意味着不流动或不移动的状态。"
    },
    {
        id: 2,
        question: "Even though he laughed along, the __________ from his friends about his new haircut hurt his feelings.",
        chinese_question: "尽管他跟着笑了，但朋友们对他新发型的 __________ 伤了他的感情。",
        answers: [
            { option: "A", answer: "compliments", chinese_answer: "恭维", chinese_romanization: "gōngwéi" },
            { option: "B", answer: "jibes", chinese_answer: "嘲讽", chinese_romanization: "cháofèng" },
            { option: "C", answer: "encouragements", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "suggestions", chinese_answer: "建议", chinese_romanization: "jiànyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jibes' used figuratively means mocking or sarcastic remarks." +
            "<br><br>" +
            "(A) 'compliments' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(C) 'encouragements' means the action of giving someone support, confidence, or hope." +
            "<br><br>" +
            "(D) 'suggestions' means ideas or plans put forward for consideration.",
        chinese_explanation: "(B) '嘲讽' 在比喻意义上指嘲弄或讽刺的言辞。" +
            "<br><br>" +
            "(A) '恭维' 意味着礼貌地表达赞美或钦佩。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予某人支持、信心或希望的行动。" +
            "<br><br>" +
            "(D) '建议' 意味着提出供考虑的想法或计划。"
    },
    {
        id: 3,
        question: "After a thorough __________ of the contract, she decided to consult with her lawyer before signing it.",
        chinese_question: "在仔细 __________ 合同后，她决定在签字前咨询她的律师。",
        answers: [
            { option: "A", answer: "glance", chinese_answer: "浏览", chinese_romanization: "liúlǎn" },
            { option: "B", answer: "perusal", chinese_answer: "阅读", chinese_romanization: "yuèdú" },
            { option: "C", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perusal' means the action of reading or examining something thoroughly." +
            "<br><br>" +
            "(A) 'glance' means to take a brief or hurried look." +
            "<br><br>" +
            "(C) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(D) 'ignorance' means lack of knowledge or information.",
        chinese_explanation: "(B) '阅读'一词意味着彻底阅读或检查某事的行为。" +
            "<br><br>" +
            "(A) '浏览' 意味着匆忙或粗略地看一眼。" +
            "<br><br>" +
            "(C) '拒绝' 意味着拒绝或拒绝某个提议、想法等。" +
            "<br><br>" +
            "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 4,
        question: "The preacher's __________ in his sermons inspired the congregation and strengthened their faith.",
        chinese_question: "传教士在布道中的 __________ 激励了会众，加强了他们的信仰。",
        answers: [
            { option: "A", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "skepticism", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fervour' figuratively means intense and passionate feeling." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'skepticism' means a skeptical attitude; doubt as to the truth of something." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(A) '热情' 在此语境下意指强烈而热情的感情。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '怀疑' 意味着怀疑的态度；对某事的真实性表示怀疑。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说话或做事之前的暂停或犹豫。"
    },
    {
        id: 5,
        question: "His excitement about the new project was __________ by the realization of how much work it would entail.",
        chinese_question: "对新项目的兴奋被认识到所需工作的 __________ 所缓和。",
        answers: [
            { option: "A", answer: "increased", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "tempered", chinese_answer: "缓和", chinese_romanization: "huǎnhé" },
            { option: "C", answer: "fueled", chinese_answer: "助长", chinese_romanization: "zhùzhǎng" },
            { option: "D", answer: "exacerbated", chinese_answer: "加剧", chinese_romanization: "jiājù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tempered' means to serve as a counterbalancing force to something; to moderate or mitigate." +
            "<br><br>" +
            "(A) 'increased' means to become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(C) 'fueled' means to supply or power with material." +
            "<br><br>" +
            "(D) 'exacerbated' means to make (a problem, bad situation, or negative feeling) worse.",
        chinese_explanation: "(B) '缓和'一词意味着作为某物的平衡力；调节或减轻。" +
            "<br><br>" +
            "(A) '增加' 意味着变得或使更大。" +
            "<br><br>" +
            "(C) '助长' 意味着用材料供应或供电。" +
            "<br><br>" +
            "(D) '加剧' 意味着使（问题、糟糕的情况或消极情绪）变得更糟。"
    },
    {
        id: 6,
        question: "The artist’s __________ was to always carry a sketchbook wherever he went, ready to capture inspiration at any moment.",
        chinese_question: "这位艺术家的 __________ 是无论去哪里总是带着一本速写本，随时准备捕捉灵感。",
        answers: [
            { option: "A", answer: "quirk", chinese_answer: "怪癖", chinese_romanization: "guàipǐ" },
            { option: "B", answer: "talent", chinese_answer: "才华", chinese_romanization: "cáihuá" },
            { option: "C", answer: "passion", chinese_answer: "激情", chinese_romanization: "jīqíng" },
            { option: "D", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quirk' means a peculiar behavioral habit." +
            "<br><br>" +
            "(B) 'talent' means a natural aptitude or skill." +
            "<br><br>" +
            "(C) 'passion' means a strong and barely controllable emotion." +
            "<br><br>" +
            "(D) 'hobby' means an activity done regularly in one's leisure time for pleasure.",
        chinese_explanation: "(A) '怪癖' 意味着一种奇特的行为习惯。" +
            "<br><br>" +
            "(B) '才华' 意味着一种自然的才能或技能。" +
            "<br><br>" +
            "(C) '激情' 意味着一种强烈且几乎无法控制的情感。" +
            "<br><br>" +
            "(D) '爱好' 意味着在闲暇时间定期进行的活动，以获得乐趣。"
    },
    {
        id: 7,
        question: "The manager's __________ to the team's hard work demotivated the employees, affecting overall productivity.",
        chinese_question: "经理对团队辛勤工作的 __________ 使员工失去了动力，影响了整体生产力。",
        answers: [
            { option: "A", answer: "appreciation", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "recognition", chinese_answer: "认可", chinese_romanization: "rènkě" },
            { option: "D", answer: "gratitude", chinese_answer: "感激", chinese_romanization: "gǎnjī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(A) 'appreciation' means recognition and enjoyment of the good qualities of someone or something." +
            "<br><br>" +
            "(C) 'recognition' means acknowledgment of something's existence, validity, or legality." +
            "<br><br>" +
            "(D) 'gratitude' means the quality of being thankful; readiness to show appreciation for and to return kindness.",
        chinese_explanation: "(B) '冷漠'一词意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(A) '感谢' 意味着对某人或某事的优良品质的认可和享受。" +
            "<br><br>" +
            "(C) '认可' 意味着对某物存在、有效性或合法性的承认。" +
            "<br><br>" +
            "(D) '感激' 意味着感恩的品质；愿意表示感谢并回报善意。"
    },
    {
        id: 8,
        question: "The artist’s __________ into different styles and mediums, such as painting, sculpture, and digital art, enriched her portfolio and attracted a diverse audience.",
        chinese_question: "艺术家对不同风格和媒介的 __________，如绘画、雕塑和数字艺术，丰富了她的作品集并吸引了不同的观众。",
        answers: [
            { option: "A", answer: "diversification", chinese_answer: "多元化", chinese_romanization: "duōyuán huà" },
            { option: "B", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "C", answer: "reduction", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "D", answer: "limitation", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diversification' figuratively means exploring various styles to enhance creativity and appeal." +
            "<br><br>" +
            "(B) 'stagnation' means a state of no activity or growth." +
            "<br><br>" +
            "(C) 'reduction' means the action or fact of making something smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(D) 'limitation' means a restricting condition or limitation.",
        chinese_explanation: "(A) '多元化' 在此语境下意指探索各种风格以增强创造力和吸引力。" +
            "<br><br>" +
            "(B) '停滞' 意味着没有活动或增长的状态。" +
            "<br><br>" +
            "(C) '减少' 意味着减少数量、程度或大小的行为或事实。" +
            "<br><br>" +
            "(D) '限制' 意味着限制条件或限制。"
    },
    {
        id: 9,
        question: "The gardener's __________ in maintaining the garden resulted in beautiful flowers and healthy plants throughout the year.",
        chinese_question: "园丁在维护花园中的 __________ 使得全年都有美丽的花朵和健康的植物。",
        answers: [
            { option: "A", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "B", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "C", answer: "carelessness", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "D", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diligence' means careful and persistent work or effort." +
            "<br><br>" +
            "(A) 'negligence' means failure to take proper care over something." +
            "<br><br>" +
            "(C) 'carelessness' means failure to give sufficient attention to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'laziness' means the quality of being unwilling to work or use energy; idleness.",
        chinese_explanation: "(B) '勤奋'一词意味着细致和坚持不懈的工作或努力。" +
            "<br><br>" +
            "(A) '疏忽' 意味着未能妥善照顾某事。" +
            "<br><br>" +
            "(C) '粗心' 意味着未能给予足够的注意以避免伤害或错误。" +
            "<br><br>" +
            "(D) '懒惰' 意味着不愿意工作或使用精力的品质；懒散。"
    },
    {
        id: 10,
        question: "The team finally achieved a __________ on the project timeline, agreeing to extend the deadline by two weeks.",
        chinese_question: "团队最终在项目时间表上达成了 __________，同意将截止日期延长两周。",
        answers: [
            { option: "A", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
            { option: "B", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
            { option: "C", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "controversy", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'consensus' means general agreement among a group of people." +
            "<br><br>" +
            "(B) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(C) 'opposition' means resistance or dissent." +
            "<br><br>" +
            "(D) 'controversy' means prolonged public disagreement or heated discussion.",
        chinese_explanation: "(A) '共识' 意味着一群人之间的普遍同意。" +
            "<br><br>" +
            "(B) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(C) '反对' 意味着抵抗或异议。" +
            "<br><br>" +
            "(D) '争论' 意味着长期的公众分歧或激烈讨论。"
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
