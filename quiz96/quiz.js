// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The teacher used a variety of examples to __________ the key points of the lesson.",
        chinese_question: "老师用各种例子来 __________ 课程的重点。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "B", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "underscore", chinese_answer: "强调", chinese_romanization: "qiángdiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'underscore' means to emphasize or highlight the importance of something." +
            "<br><br>" +
            "(A) 'confuse' means to make someone unable to think clearly; bewilder." +
            "<br><br>" +
            "(B) 'minimize' means to reduce to the smallest possible amount or degree." +
            "<br><br>" +
            "(C) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(D) '强调'一词意味着强调或突出某事的重要性。" +
            "<br><br>" +
            "(A) '混淆' 意味着使某人无法清晰思考；使迷惑。" +
            "<br><br>" +
            "(B) '最小化' 意味着减少到最小可能的数量或程度。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 2,
    question: "The architect could easily __________ how the new building would look once completed, imagining every detail in his mind.",
    chinese_question: "建筑师可以轻松地 __________ 新建筑完成后的样子，在脑海中想象每一个细节。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "envisage", chinese_answer: "设想", chinese_romanization: "shèxiǎng" },
        { option: "C", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'envisage' means to contemplate or conceive of as a possibility or a desirable future event." +
        "<br><br>" +
        "(A) 'ignore' means to pay no attention to." +
        "<br><br>" +
        "(C) 'overlook' means to fail to notice." +
        "<br><br>" +
        "(D) 'reject' means to dismiss as inadequate or inappropriate.",
    chinese_explanation: "(B) '设想' 一词意味着设想或构思作为可能性或理想的未来事件。" +
        "<br><br>" +
        "(A) '忽视' 意味着不注意。" +
        "<br><br>" +
        "(C) '忽略' 意味着未能注意到。" +
        "<br><br>" +
        "(D) '拒绝' 意味着认为不充分或不合适而驳回。"
    },
    {
        id: 3,
    question: "She took a walk in the park to __________ her stress after a long day at work.",
    chinese_question: "她在公园散步，以 __________ 工作一天后的压力。",
    answers: [
        { option: "A", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "B", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" +
        "(A) 'intensify' means to become or make more intense." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'amplify' means to increase the volume of sound or the strength of something.",
    chinese_explanation: "(B) '缓解' 意味着减轻不愉快的感觉。" +
        "<br><br>" +
        "(A) '加剧' 意味着变得或使更强烈。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '放大' 意味着增加声音的音量或某物的强度。"
    },
    {
        id: 4,
    question: "The pirates were known to __________ coastal villages, taking whatever they could carry.",
    chinese_question: "海盗以 __________ 沿海村庄著称，拿走他们能带走的任何东西。",
    answers: [
        { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "B", answer: "ransack", chinese_answer: "洗劫", chinese_romanization: "xǐjié" },
        { option: "C", answer: "construct", chinese_answer: "建造", chinese_romanization: "jiànzào" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zānyáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ransack' means to search through a place and cause damage, often taking valuables by force." +
        "<br><br>" +
        "(A) 'protect' means to keep safe from harm or injury." +
        "<br><br>" +
        "(C) 'construct' means to build or make something." +
        "<br><br>" +
        "(D) 'praise' means to express approval or admiration.",
    chinese_explanation: "(B) '洗劫' 意味着翻箱倒柜并造成损害，通常是用武力抢走贵重物品。" +
        "<br><br>" +
        "(A) '保护' 意味着使免受伤害或伤害。" +
        "<br><br>" +
        "(C) '建造' 意味着建造或制作某物。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达赞同或钦佩。"
    },
    {
        id: 5,
        question: "Despite the challenging questions, the seasoned lawyer did not seem to __________.",
        chinese_question: "尽管问题棘手，这位经验丰富的律师似乎并没有被 __________。",
        answers: [
            { option: "A", answer: "faze", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
            { option: "B", answer: "impress", chinese_answer: "打动", chinese_romanization: "dǎdòng" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "confuse", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'faze' means to disturb or disconcert someone." +
            "<br><br>" + 
            "(B) 'impress' means to make someone feel admiration and respect." +
            "<br><br>" + 
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" + 
            "(D) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(A) '打扰' 意味着使某人不安或困扰。" +
            "<br><br>" + 
            "(B) '打动' 意味着让某人感到钦佩和尊敬。" +
            "<br><br>" + 
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" + 
            "(D) '困惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 6,
        question: "He __________ his negotiation skills by attending workshops and reading extensively on the topic.",
        chinese_question: "他通过参加讲习班和广泛阅读该主题 __________ 了自己的谈判技巧。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "worsened", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "C", answer: "abandoned", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "honed", chinese_answer: "磨炼", chinese_romanization: "móliàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'honed' used figuratively means to refine or perfect skills through practice and study." +
            "<br><br>" +
            "(A) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'worsened' means to make or become worse." +
            "<br><br>" +
            "(C) 'abandoned' means to give up completely.",
        chinese_explanation: "(D) '磨炼' 在比喻意义上指通过实践和学习改进或完善技能。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '恶化' 意味着使变得更糟。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃。"
    },
    {
        id: 7,
    question: "The detective's sudden disappearance __________ his colleagues, who had no clues about his whereabouts.",
    chinese_question: "侦探的突然失踪 __________ 了他的同事们，他们对他的下落毫无头绪。",
    answers: [
        { option: "A", answer: "illuminated", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
        { option: "B", answer: "mystified", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "C", answer: "bored", chinese_answer: "使无聊", chinese_romanization: "shǐ wúliáo" },
        { option: "D", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'mystified' means to perplex or bewilder." +
        "<br><br>" +
        "(A) 'illuminated' means to light up or make clear." +
        "<br><br>" +
        "(C) 'bored' means to cause someone to feel uninterested." +
        "<br><br>" +
        "(D) 'simplified' means to make less complex.",
    chinese_explanation: "(B) '使困惑' 一词意味着使困惑或迷惑。" +
        "<br><br>" +
        "(A) '照亮' 意味着点亮或使清楚。" +
        "<br><br>" +
        "(C) '使无聊' 意味着使某人感到没有兴趣。" +
        "<br><br>" +
        "(D) '简化' 意味着使之变得不复杂。"
    },
    {
        id: 8,
    question: "The limited edition sneakers __________ the sneakerheads, many of whom camped out overnight to buy them.",
    chinese_question: "限量版运动鞋 __________ 鞋迷，其中许多人通宵排队购买。",
    answers: [
        { option: "A", answer: "dissuaded", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
        { option: "B", answer: "tantalized", chinese_answer: "诱惑", chinese_romanization: "yòuhuò" },
        { option: "C", answer: "satisfied", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "D", answer: "angered", chinese_answer: "激怒", chinese_romanization: "jīnù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tantalized' means to torment or tease someone with the sight or promise of something that is unobtainable." +
        "<br><br>" +
        "(A) 'dissuaded' means to persuade someone not to take a particular course of action." +
        "<br><br>" +
        "(C) 'satisfied' means to meet the expectations, needs, or desires of someone." +
        "<br><br>" +
        "(D) 'angered' means to make someone feel strong displeasure.",
    chinese_explanation: "(B) '诱惑' 意味着用无法得到的东西的景象或承诺来折磨或戏弄某人。" +
        "<br><br>" +
        "(A) '劝阻' 意味着劝说某人不要采取某种行动。" +
        "<br><br>" +
        "(C) '满足' 意味着满足某人的期望、需求或愿望。" +
        "<br><br>" +
        "(D) '激怒' 意味着使某人感到强烈的不满。"
    },
    {
        id: 9,
    question: "The firefighters worked quickly to __________ the people trapped in the burning building.",
    chinese_question: "消防员迅速行动 __________ 被困在燃烧建筑物中的人。",
    answers: [
        { option: "A", answer: "extricate", chinese_answer: "解救", chinese_romanization: "jiějiù" },
        { option: "B", answer: "endanger", chinese_answer: "危及", chinese_romanization: "wéijí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "detain", chinese_answer: "拘留", chinese_romanization: "jūliú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'extricate' means to free someone or something from a constraint or difficulty." +
        "<br><br>" + 
        "(B) 'endanger' means to put someone or something at risk or in danger." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'detain' means to keep someone in official custody.",
    chinese_explanation: "(A) '解救' 意味着从约束或困难中解放某人或某物。" +
        "<br><br>" + 
        "(B) '危及' 意味着使某人或某物处于危险之中。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '拘留' 意味着将某人拘留在官方监护中。"
    },
    {
        id: 10,
    question: "He tried to __________ himself with the boss by constantly offering to help with extra work.",
    chinese_question: "他通过不断主动提供额外工作来 __________ 自己与老板的关系。",
    answers: [
        { option: "A", answer: "alienate", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" },
        { option: "B", answer: "ingratiate", chinese_answer: "讨好", chinese_romanization: "tǎohǎo" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ingratiate' means to bring oneself into favor with someone by flattering or trying to please them." +
        "<br><br>" +
        "(A) 'alienate' means to cause someone to feel isolated or estranged." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
    chinese_explanation: "(B) '讨好' 意味着通过奉承或试图取悦某人使自己受到某人的喜欢。" +
        "<br><br>" +
        "(A) '疏远' 意味着使某人感到孤立或疏远。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
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
