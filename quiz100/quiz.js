// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She was thrilled to finally __________ at her dream university, having worked hard throughout high school.",
    chinese_question: "她终于能够在梦想的大学 __________ ，为此她在整个高中阶段都很努力，这让她感到非常激动。",
    answers: [
        { option: "A", answer: "quit", chinese_answer: "退出", chinese_romanization: "tuìchū" },
        { option: "B", answer: "matriculate", chinese_answer: "注册", chinese_romanization: "zhùcè" },
        { option: "C", answer: "drop out", chinese_answer: "辍学", chinese_romanization: "chuòxué" },
        { option: "D", answer: "defer", chinese_answer: "推迟", chinese_romanization: "tuīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'matriculate' means to be enrolled at a college or university." +
        "<br><br>" +
        "(A) 'quit' means to stop or discontinue." +
        "<br><br>" +
        "(C) 'drop out' means to leave school before completing it." +
        "<br><br>" +
        "(D) 'defer' means to postpone or delay.",
    chinese_explanation: "(B) '注册' 意味着被大学或学院录取。" +
        "<br><br>" +
        "(A) '退出' 意味着停止或中断。" +
        "<br><br>" +
        "(C) '辍学' 意味着在完成学业前离开学校。" +
        "<br><br>" +
        "(D) '推迟' 意味着推迟或延迟。"
    },
    {
        id: 2,
    question: "During the storm, the children would __________ under the blankets, scared of the thunder.",
    chinese_question: "在暴风雨中，孩子们会 __________ 在毯子下，害怕雷声。",
    answers: [
        { option: "A", answer: "cower", chinese_answer: "畏缩", chinese_romanization: "wèisuō" },
        { option: "B", answer: "play", chinese_answer: "玩耍", chinese_romanization: "wánshuǎ" },
        { option: "C", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
        { option: "D", answer: "explore", chinese_answer: "探索", chinese_romanization: "tànsuǒ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cower' means to crouch down in fear." +
        "<br><br>" + 
        "(B) 'play' means to engage in activity for enjoyment and recreation." +
        "<br><br>" + 
        "(C) 'laugh' means to make sounds and movements of the face and body that show amusement." +
        "<br><br>" + 
        "(D) 'explore' means to travel in or through an unfamiliar area to learn about it.",
    chinese_explanation: "(A) '畏缩' 意味着害怕地蜷缩下来。" +
        "<br><br>" + 
        "(B) '玩耍' 意味着为了享受和娱乐而进行的活动。" +
        "<br><br>" + 
        "(C) '笑' 意味着发出显示愉悦的声音和面部、身体的动作。" +
        "<br><br>" + 
        "(D) '探索' 意味着在不熟悉的区域中旅行以了解它。"
    },
    {
        id: 3,
    question: "She managed to __________ her friend into attending the party, despite his initial reluctance.",
    chinese_question: "她设法 __________ 她的朋友去参加派对，尽管他起初不愿意。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "C", answer: "cajole", chinese_answer: "劝诱", chinese_romanization: "quànyòu" },
        { option: "D", answer: "offend", chinese_answer: "冒犯", chinese_romanization: "màofàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'cajole' means to persuade someone to do something by sustained coaxing or flattery." +
        "<br><br>" + 
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(B) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" + 
        "(D) 'offend' means to cause someone to feel upset, annoyed, or resentful.",
    chinese_explanation: "(C) '劝诱' 意味着通过持续的劝说或奉承来让某人做某事。" +
        "<br><br>" + 
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(B) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
        "<br><br>" + 
        "(D) '冒犯' 意味着使某人感到不安、恼怒或愤慨。"
    },
    {
        id: 4,
    question: "In autumn, the leaves __________ from the trees, covering the ground in a colourful blanket.",
    chinese_question: "秋天，树叶从树上 __________，在地面上覆盖了一层五彩斑斓的毯子。",
    answers: [
        { option: "A", answer: "grow", chinese_answer: "生长", chinese_romanization: "shēngzhǎng" },
        { option: "B", answer: "adhere", chinese_answer: "粘附", chinese_romanization: "zhānfù" },
        { option: "C", answer: "abscise", chinese_answer: "脱落", chinese_romanization: "tuōluò" },
        { option: "D", answer: "flourish", chinese_answer: "繁茂", chinese_romanization: "fánmào" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'abscise' means to separate, detach, or shed, typically as part of a natural process." +
        "<br><br>" + 
        "(A) 'grow' means to undergo natural development by increasing in size and changing physically." +
        "<br><br>" + 
        "(B) 'adhere' means to stick fast to a surface or substance." +
        "<br><br>" + 
        "(D) 'flourish' means to grow or develop in a healthy or vigorous way.",
    chinese_explanation: "(C) “脱落” 意味着分离、分离或脱落，通常是作为自然过程的一部分。" +
        "<br><br>" + 
        "(A) '生长' 意味着通过增加体积和物理变化进行自然发展。" +
        "<br><br>" + 
        "(B) '粘附' 意味着紧贴在表面或物质上。" +
        "<br><br>" + 
        "(D) '繁茂' 意味着以健康或旺盛的方式生长或发展。"
    },
    {
        id: 5,
    question: "She had to __________ with the landlord to give her a few more days to pay the rent.",
    chinese_question: "她不得不 __________ 房东给她几天时间付房租。",
    answers: [
        { option: "A", answer: "plead", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
        { option: "B", answer: "argue", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
        { option: "C", answer: "negotiate", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
        { option: "D", answer: "insist", chinese_answer: "坚持", chinese_romanization: "jiānchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'plead' means to make an emotional appeal." +
        "<br><br>" +
        "(B) 'argue' means to give reasons or cite evidence in support of an idea, action, or theory." +
        "<br><br>" +
        "(C) 'negotiate' means to try to reach an agreement or compromise by discussion." +
        "<br><br>" +
        "(D) 'insist' means to demand something forcefully, not accepting refusal.",
    chinese_explanation: "(A) '恳求' 意味着提出情感上的请求。" +
        "<br><br>" +
        "(B) '争论' 意味着提供理由或引用证据来支持某个想法、行动或理论。" +
        "<br><br>" +
        "(C) '谈判' 意味着试图通过讨论达成协议或妥协。" +
        "<br><br>" +
        "(D) '坚持' 意味着强烈要求某事，不接受拒绝。"
    },
    {
        id: 6,
   question: "The new security measures were implemented to __________ data breaches.",
    chinese_question: "实施新安全措施是为了 __________ 数据泄露。",
    answers: [
        { option: "A", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "ensure", chinese_answer: "确保", chinese_romanization: "quèbǎo" },
        { option: "D", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'prevent' means to stop something from happening or arising." +
        "<br><br>" +
        "(A) 'promote' means to further the progress of something, especially a cause, venture, or aim; support or actively encourage." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(C) 'ensure' means to make certain that something will occur or be the case.",
    chinese_explanation: "(D) '防止' 意味着阻止某事发生或出现。" +
        "<br><br>" +
        "(A) '促进' 意味着促进某事的进展，尤其是事业、冒险或目标；支持或积极鼓励。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(C) '确保' 意味着确保某事会发生或成为事实。"
    },
    {
        id: 7,
   question: "The contract was __________ by mutual consent after both parties found it unworkable.",
    chinese_question: "在双方都发现合同不可行之后，合同经双方同意 __________ 。",
    answers: [
        { option: "A", answer: "annulled", chinese_answer: "废除", chinese_romanization: "fèichú" },
        { option: "B", answer: "extended", chinese_answer: "延长", chinese_romanization: "yáncháng" },
        { option: "C", answer: "signed", chinese_answer: "签署", chinese_romanization: "qiānshǔ" },
        { option: "D", answer: "honored", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'annulled' means to declare invalid (an official agreement, decision, or result)." +
        "<br><br>" + 
        "(B) 'extended' means to cause to cover a larger area; make longer or wider." +
        "<br><br>" + 
        "(C) 'signed' means to write one's name on (a letter, card, or similar item) to identify oneself as the writer or sender." +
        "<br><br>" + 
        "(D) 'honored' means to regard with great respect.",
    chinese_explanation: "(A) '废除' 意味着宣布无效（正式协议、决定或结果）。" +
        "<br><br>" + 
        "(B) '延长' 意味着使覆盖更大的区域；使更长或更宽。" +
        "<br><br>" + 
        "(C) '签署' 意味着在（信件、卡片或类似物品）上写下自己的名字，以标识自己为作者或发送者。" +
        "<br><br>" + 
        "(D) '尊重' 意味着以极大的尊重对待。"
    },
    {
        id: 8,
        question: "He managed to __________ his speech, forgetting key points and stumbling over words.",
        chinese_question: "他把演讲 __________ 了，忘记了关键点，还结巴了。",
        answers: [
            { option: "A", answer: "deliver", chinese_answer: "发表", chinese_romanization: "fābiǎo" },
            { option: "B", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "bungle", chinese_answer: "搞砸", chinese_romanization: "gǎo zá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bungle' means to carry out a task clumsily or incompetently." +
            "<br><br>" +
            "(A) 'deliver' means to bring and hand over a letter, parcel, or ordered goods to the proper recipient or address." +
            "<br><br>" +
            "(B) 'clarify' means to make a statement or situation less confused and more comprehensible." +
            "<br><br>" +
            "(C) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(D) '搞砸' 意味着笨拙或无能地完成一项任务。" +
            "<br><br>" +
            "(A) '发表' 意味着递送和交给适当的收件人或地址。" +
            "<br><br>" +
            "(B) '澄清' 意味着使声明或情况不再混乱并更容易理解。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 9,
    question: "The stranded hikers had to find food and shelter to __________ the harsh winter conditions.",
    chinese_question: "被困的徒步旅行者必须找到食物和住所才能 __________ 严酷的冬季条件。",
    answers: [
        { option: "A", answer: "survive", chinese_answer: "生存", chinese_romanization: "shēngcún" },
        { option: "B", answer: "thrive", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" },
        { option: "C", answer: "struggle", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "D", answer: "escape", chinese_answer: "逃脱", chinese_romanization: "táotuō" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'survive' means to continue to live or exist, especially in spite of danger or hardship." +
        "<br><br>" +
        "(B) 'thrive' means to grow or develop well or vigorously." +
        "<br><br>" +
        "(C) 'struggle' means to make forceful or violent efforts to get free of restraint or constriction." +
        "<br><br>" +
        "(D) 'escape' means to break free from confinement or control.",
    chinese_explanation: "(A) '生存' 意味着继续活着或存在，尤其是尽管有危险或困难。" +
        "<br><br>" +
        "(B) '兴旺' 意味着生长或发展得很好或蓬勃发展。" +
        "<br><br>" +
        "(C) '挣扎' 意味着努力或剧烈地尝试摆脱约束或限制。" +
        "<br><br>" +
        "(D) '逃脱' 意味着摆脱拘束或控制。"
    },
    {
        id: 10,
    question: "The strict mentor aimed to __________ his students to ensure they reached their full potential.",
    chinese_question: "严厉的导师旨在 __________ 学生，以确保他们发挥出全部潜力。",
    answers: [
        { option: "A", answer: "chasten", chinese_answer: "磨练", chinese_romanization: "móliàn" },
        { option: "B", answer: "indulge", chinese_answer: "纵容", chinese_romanization: "zòngróng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'chasten' means to have a restraining or moderating effect on; to discipline or punish in order to correct." +
        "<br><br>" + 
        "(B) 'indulge' means to allow oneself to enjoy the pleasure of." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
    chinese_explanation: "(A) '磨练' 意味着有抑制或缓和的作用；为了纠正而惩戒或处罚。" +
        "<br><br>" + 
        "(B) '纵容' 意味着让自己享受乐趣。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
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
