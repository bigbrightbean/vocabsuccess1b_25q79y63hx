// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The historian's __________ account of the ancient civilization provided deep insights into their culture and traditions.",
        chinese_question: "历史学家对古代文明的 __________ 描述提供了对其文化和传统的深刻见解。",
        answers: [
            { option: "A", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsībùgǒu de" },
            { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
            { option: "D", answer: "disjointed", chinese_answer: "支离破碎的", chinese_romanization: "zhīlí pòsuì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'meticulous' means showing great attention to detail." +
            "<br><br>" +
            "(B) 'vague' means unclear or not precise." +
            "<br><br>" +
            "(C) 'superficial' means existing or occurring at the surface level." +
            "<br><br>" +
            "(D) 'disjointed' means lacking a coherent sequence or connection.",
        chinese_explanation: "(A) '一丝不苟的' 意味着非常注意细节。" +
            "<br><br>" +
            "(B) '模糊的' 意味着不清楚或不精确的。" +
            "<br><br>" +
            "(C) '肤浅的' 意味着存在或发生在表面层的。" +
            "<br><br>" +
            "(D) '支离破碎的' 意味着缺乏连贯的顺序或连接。"
    },
    {
        id: 2,
        question: "His __________ comments about the new policy highlighted his disapproval and contempt.",
        chinese_question: "他对新政策的 __________ 评论突显了他的不赞成和轻蔑。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "sarcastic", chinese_answer: "讽刺的", chinese_romanization: "fèngcì de" },
            { option: "D", answer: "constructive", chinese_answer: "建设性的", chinese_romanization: "jiànshè xìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sarcastic' means marked by or given to using irony in order to mock or convey contempt." +
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'constructive' means serving a useful purpose; tending to build up.",
        chinese_explanation: "(C) '讽刺的' 意味着以讽刺的方式进行，或用来讥讽或传达轻蔑的。" +
            "<br><br>" +
            "(A) '支持的' 意味着提供鼓励或情感上的帮助。" +
            "<br><br>" +
            "(B) '热情的' 意味着表现出强烈和热切的享受、兴趣或认可。" +
            "<br><br>" +
            "(D) '建设性的' 意味着起有用的作用；倾向于建立的。"
    },
    {
        id: 3,
    question: "The __________ nature of the mission required the soldiers to be constantly vigilant.",
    chinese_question: "任务的 __________ 性质要求士兵们时刻保持警惕。",
    answers: [
        { option: "A", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
        { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
        { option: "C", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
        { option: "D", answer: "perilous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'perilous' means full of danger or risk." +
        "<br><br>" +
        "(A) 'safe' means protected from or not exposed to danger or risk." +
        "<br><br>" +
        "(B) 'mundane' means lacking interest or excitement; dull." +
        "<br><br>" +
        "(C) 'routine' means a sequence of actions regularly followed; a fixed program.",
    chinese_explanation: "(D) '危险的' 意味着充满危险或风险的。" +
        "<br><br>" +
        "(A) '安全的' 意味着受到保护或不暴露于危险或风险的。" +
        "<br><br>" +
        "(B) '平凡的' 意味着缺乏兴趣或兴奋的；枯燥的。" +
        "<br><br>" +
        "(C) '常规的' 意味着定期遵循的一系列动作；固定的程序。"
    },
    {
        id: 4,
        question: "She was deeply __________ for the support her friends gave her during the difficult times, feeling overwhelmed by their kindness.",
        chinese_question: "在困难时期，她对朋友们的支持感到深深的 __________，被他们的善意所感动。",
        answers: [
            { option: "A", answer: "resentful", chinese_answer: "愤恨的", chinese_romanization: "fènhèn de" },
            { option: "B", answer: "unappreciative", chinese_answer: "不感激的", chinese_romanization: "bù gǎnjī de" },
            { option: "C", answer: "grateful", chinese_answer: "感激的", chinese_romanization: "gǎnjī de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grateful' means feeling or showing an appreciation of kindness; thankful." +
            "<br><br>" +
            "(A) 'resentful' means feeling or expressing bitterness or indignation at having been treated unfairly." +
            "<br><br>" +
            "(B) 'unappreciative' means not feeling or showing appreciation." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '感激的' 意味着感到或表现出对善意的感激；感恩的。" +
            "<br><br>" +
            "(A) '愤恨的' 意味着对受到不公平对待感到愤怒或愤慨。" +
            "<br><br>" +
            "(B) '不感激的' 意味着没有感到或表现出感激之情的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
        question: "The teacher's __________ approach helped students feel more comfortable discussing their personal problems.",
        chinese_question: "老师 __________ 的方法帮助学生更舒服地讨论他们的个人问题。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "sympathetic", chinese_answer: "有同情心的", chinese_romanization: "yǒu tóngqíng xīn de" },
            { option: "D", answer: "strict", chinese_answer: "严格的", chinese_romanization: "yángé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sympathetic' means feeling, showing, or expressing sympathy." +
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring to the senses; cruel or severe." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'strict' means demanding that rules concerning behavior are obeyed and observed.",
        chinese_explanation: "(C) '有同情心的' 意味着感受到、表现或表达同情的。" +
            "<br><br>" +
            "(A) '严厉的' 意味着让人不愉快的粗糙或震撼感官的；残酷或严厉的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；漠不关心的。" +
            "<br><br>" +
            "(D) '严格的' 意味着要求遵守和遵循行为规范的。"
    },
    {
        id: 6,
        question: "The library offered __________ resources for students, including books, journals, and online databases.",
        chinese_question: "图书馆为学生提供了 __________ 的资源，包括书籍、期刊和在线数据库。",
        answers: [
            { option: "A", answer: "plentiful", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "scarce", chinese_answer: "稀少", chinese_romanization: "xīshǎo" },
            { option: "C", answer: "insufficient", chinese_answer: "不足", chinese_romanization: "bùzú" },
            { option: "D", answer: "restricted", chinese_answer: "受限制", chinese_romanization: "shòu xiànzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'plentiful' means existing in or yielding great quantities; abundant." +
            "<br><br>" +
            "(B) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(C) 'insufficient' means not enough; inadequate." +
            "<br><br>" +
            "(D) 'restricted' means limited in extent, number, scope, or action.",
        chinese_explanation: "(A) '丰富' 意味着存在或产生大量的；丰富的。" +
            "<br><br>" +
            "(B) '稀少' 意味着供应不足。" +
            "<br><br>" +
            "(C) '不足' 意味着不够；不足。" +
            "<br><br>" +
            "(D) '受限制' 意味着在范围、数量、范围或行动上受限制的。"
    },
    {
        id: 7,
        question: "He was admired for his __________ actions in defending the weak and helpless.",
        chinese_question: "他因为保护弱者和无助者的 __________ 行为而受到钦佩。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
            { option: "C", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "D", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'noble' means having or showing fine personal qualities or high moral principles." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(C) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
            "<br><br>" +
            "(D) 'cowardly' means lacking courage.",
        chinese_explanation: "(B) '高尚的' 意味着拥有或表现出优秀的个人品质或高尚的道德原则。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(C) '欺骗的' 意味着欺骗或误导他人。" +
            "<br><br>" +
            "(D) '胆小的' 意味着缺乏勇气。"
    },
    {
        id: 8,
        question: "She felt __________ when she tripped and fell on stage during the performance.",
        chinese_question: "她在表演时在舞台上绊倒摔倒时感到 __________ 。",
        answers: [
            { option: "A", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "mortified", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "D", answer: "amused", chinese_answer: "有趣", chinese_romanization: "yǒuqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mortified' means to feel extremely embarrassed or ashamed." +
            "<br><br>" +
            "(A) 'delighted' means feeling great pleasure." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'amused' means finding something funny or entertaining.",
        chinese_explanation: "(B) '尴尬' 意味着感到极度尴尬或羞愧。" +
            "<br><br>" +
            "(A) '高兴' 意味着感到很大的快乐。" +
            "<br><br>" +
            "(C) '无动于衷' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '有趣' 意味着觉得某事有趣或娱乐性。"
    },
    {
        id: 9,
        question: "The workers set up a __________ shelter for the event that would be taken down the next day.",
        chinese_question: "工人们为活动搭建了一个__________的庇护所，第二天就会拆除。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "B", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "C", answer: "lasting", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "D", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(C) 'lasting' means enduring or able to endure over a long period of time." +
            "<br><br>" +
            "(D) 'stable' means not likely to give way or overturn; firmly fixed.",
        chinese_explanation: "(B) '临时的' 意味着仅持续有限的时间；非永久的。" +
            "<br><br>" +
            "(A) '永久的' 意味着持久的或打算无限期保持不变的。" +
            "<br><br>" +
            "(C) '持久的' 意味着经得住时间或能够经久不衰的。" +
            "<br><br>" +
            "(D) '稳定的' 意味着不太可能倒塌或翻倒；牢固固定的。"
    },
    {
        id: 10,
        question: "The gardener explained which mushrooms in the forest were __________ and which ones should be avoided.",
        chinese_question: "园丁解释了森林中哪些蘑菇是 __________ 的，哪些应该避免。",
        answers: [
            { option: "A", answer: "harmful", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "B", answer: "poisonous", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
            { option: "C", answer: "edible", chinese_answer: "可食用的", chinese_romanization: "kě shíyòng de" },
            { option: "D", answer: "dangerous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'edible' means fit to be eaten." +
            "<br><br>" +
            "(A) 'harmful' means causing or likely to cause harm." +
            "<br><br>" +
            "(B) 'poisonous' means causing or capable of causing death or illness if taken into the body." +
            "<br><br>" +
            "(D) 'dangerous' means able or likely to cause harm or injury.",
        chinese_explanation: "(C) '可食用的' 意味着适合食用的。" +
            "<br><br>" +
            "(A) '有害的' 意味着造成或可能造成伤害的。" +
            "<br><br>" +
            "(B) '有毒的' 意味着如果进入体内会导致死亡或疾病的。" +
            "<br><br>" +
            "(D) '危险的' 意味着能够或可能造成伤害或伤害的。"
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
