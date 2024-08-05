// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After running up the stairs, he began to __________, taking rapid, shallow breaths.",
        chinese_question: "跑上楼梯后，他开始 __________ ，呼吸急促且浅。",
        answers: [
            { option: "A", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "B", answer: "exhale", chinese_answer: "呼气", chinese_romanization: "hūqì" },
            { option: "C", answer: "whisper", chinese_answer: "低声说", chinese_romanization: "dīshēng shuō" },
            { option: "D", answer: "hyperventilate", chinese_answer: "过度换气", chinese_romanization: "guòdù huànqì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hyperventilate' means to breathe at an abnormally rapid rate, resulting in a decreased level of carbon dioxide in the blood." +
            "<br><br>" +
            "(A) 'relax' means to become less tense." +
            "<br><br>" +
            "(B) 'exhale' means to breathe out." +
            "<br><br>" +
            "(C) 'whisper' means to speak very softly.",
        chinese_explanation: "(D) '过度换气' 意味着以异常快速的速度呼吸，导致血液中的二氧化碳水平下降。" +
            "<br><br>" +
            "(A) '放松' 意味着变得不那么紧张。" +
            "<br><br>" +
            "(B) '呼气' 意味着呼气。" +
            "<br><br>" +
            "(C) '低声说' 意味着非常轻声地说话。"
    },
    {
        id: 2,
    question: "The artist decided to __________ the old and new architectural styles in her latest painting.",
    chinese_question: "艺术家决定在她最新的画作中 __________ 旧的和新的建筑风格。",
    answers: [
        { option: "A", answer: "juxtapose", chinese_answer: "并列", chinese_romanization: "bìngliè" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'juxtapose' means to place side by side for contrast." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'separate' means to set or keep apart." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(A) '并列' 意味着并排放置以作对比。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '分开' 意味着将某物分开。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 3,
    question: "The thick fog __________ the entire village, making it difficult to see anything.",
    chinese_question: "浓雾 __________ 了整个村庄，使得难以看清任何东西。",
    answers: [
        { option: "A", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
        { option: "B", answer: "enshrouded", chinese_answer: "笼罩", chinese_romanization: "lǒngzhào" },
        { option: "C", answer: "illuminated", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
        { option: "D", answer: "exposed", chinese_answer: "暴露", chinese_romanization: "bàolù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'enshrouded' means to cover or envelop completely and hide from view." +
        "<br><br>" + 
        "(A) 'revealed' means to make known to others." +
        "<br><br>" + 
        "(C) 'illuminated' means to light up." +
        "<br><br>" + 
        "(D) 'exposed' means to make something visible by uncovering it.",
    chinese_explanation: "(B) '笼罩' 意味着完全覆盖或包围，使其隐藏不见。" +
        "<br><br>" + 
        "(A) '揭示' 意味着让别人知道。" +
        "<br><br>" + 
        "(C) '照亮' 意味着点亮。" +
        "<br><br>" + 
        "(D) '暴露' 意味着通过揭开使某物可见。"
    },
    {
        id: 4,
    question: "She felt embarrassed when she realized that the email claiming she had won a prize was just a ploy to __________ her.",
    chinese_question: "当她意识到那封声称她赢得奖品的电子邮件只是一个 __________ 她的骗局时，她感到很尴尬。",
    answers: [
        { option: "A", answer: "inform", chinese_answer: "通知", chinese_romanization: "tōngzhī" },
        { option: "B", answer: "hoodwink", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "C", answer: "educate", chinese_answer: "教育", chinese_romanization: "jiàoyù" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hoodwink' means to deceive or trick someone." +
        "<br><br>" +
        "(A) 'inform' means to give someone facts or information." +
        "<br><br>" +
        "(C) 'educate' means to give intellectual, moral, and social instruction to someone." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(B) '欺骗' 意味着欺骗或欺诈某人。" +
        "<br><br>" +
        "(A) '通知' 意味着向某人提供事实或信息。" +
        "<br><br>" +
        "(C) '教育' 意味着对某人进行智力、道德和社会的教育。" +
        "<br><br>" +
        "(D) '帮助' 意味着协助某人。"
    },
    {
        id: 5,
        question: "In an effort to __________ his tardiness, he blamed the heavy traffic.",
        chinese_question: "为了 __________ 他的迟到，他把原因归咎于交通拥堵。",
        answers: [
            { option: "A", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzáhuà" },
            { option: "D", answer: "rationalize", chinese_answer: "合理化", chinese_romanization: "hélǐhuà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rationalize' means to attempt to explain or justify behavior or an attitude with logical reasons, even if these are not appropriate." +
            "<br><br>" +
            "(A) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(B) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
            "<br><br>" +
            "(C) 'complicate' means to make something more difficult or complex.",
        chinese_explanation: "(D) '合理化' 意味着试图用合理的理由解释或证明行为或态度，即使这些理由并不合适。" +
            "<br><br>" +
            "(A) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(B) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
            "<br><br>" +
            "(C) '复杂化' 意味着使某事变得更加困难或复杂。"
    },
    {
        id: 6,
    question: "The children __________ away as the teacher entered the room.",
    chinese_question: "老师走进教室时，孩子们 __________ 走开。",
    answers: [
        { option: "A", answer: "scuttled", chinese_answer: "快跑", chinese_romanization: "kuàipǎo" },
        { option: "B", answer: "rested", chinese_answer: "休息", chinese_romanization: "xiūxí" },
        { option: "C", answer: "sang", chinese_answer: "唱歌", chinese_romanization: "chànggē" },
        { option: "D", answer: "lingered", chinese_answer: "逗留", chinese_romanization: "dòuliú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'scuttled' means to move quickly with short, hurried steps." +
        "<br><br>" +
        "(B) 'rested' means to cease work or movement in order to relax." +
        "<br><br>" +
        "(C) 'sang' means to make musical sounds with the voice." +
        "<br><br>" +
        "(D) 'lingered' means to stay in a place longer than necessary.",
    chinese_explanation: "(A) '快跑' 意味着以短而急的步伐快速移动。" +
        "<br><br>" +
        "(B) '休息' 意味着停止工作或活动以放松。" +
        "<br><br>" +
        "(C) '唱歌' 意味着用嗓音发出音乐声。" +
        "<br><br>" +
        "(D) '逗留' 意味着在一个地方停留时间超过必要的时间。"
    },
    {
        id: 7,
        question: "During the meeting, his comments were meant to __________ her by implying she was incompetent.",
        chinese_question: "在会议期间，他的评论意在 __________ 她，暗示她无能。",
        answers: [
            { option: "A", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "C", answer: "demean", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'demean' means to cause a severe loss in the dignity of and respect for (someone or something)." +
            "<br><br>" +
            "(A) 'uplift' means to raise the level of; improve." +
            "<br><br>" +
            "(B) 'simplify' means to make (something) simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'praise' means to express warm approval or admiration of.",
        chinese_explanation: "(C) '贬低' 意味着导致（某人或某物）尊严和尊重的严重丧失。" +
            "<br><br>" +
            "(A) '提升' 意味着提高水平；改善。" +
            "<br><br>" +
            "(B) '简化' 意味着使（某事物）更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '赞美' 意味着表达热情的赞同或钦佩。"
    },
    {
        id: 8,
        question: "Her tendency to __________ people’s ideas often left her isolated in group projects.",
        chinese_question: "她 __________ 他人想法的倾向常常让她在小组项目中显得孤立。",
        answers: [
            { option: "A", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "C", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disparage' figuratively means to regard or represent as being of little worth." +
            "<br><br>" +
            "(B) 'validate' means to check or prove the validity or accuracy of (something)." +
            "<br><br>" +
            "(C) 'promote' means to further the progress of (something, especially a cause, venture, or aim); support or actively encourage." +
            "<br><br>" +
            "(D) 'simplify' means to make (something) simpler or easier to do or understand.",
        chinese_explanation: "(A) '贬低' 在此语境下比喻认为或表现出某事物没有价值。" +
            "<br><br>" +
            "(B) '验证' 意味着检查或证明（某事）的有效性或准确性。" +
            "<br><br>" +
            "(C) '促进' 意味着推进（某事，特别是事业、风险或目标）；支持或积极鼓励。" +
            "<br><br>" +
            "(D) '简化' 意味着使（某事物）更简单或更容易做或理解。"
    },
    {
        id: 9,
        question: "They needed to __________ a strategy to win the game.",
        chinese_question: "他们需要 __________ 一种策略来赢得比赛。",
        answers: [
            { option: "A", answer: "devise", chinese_answer: "设计", chinese_romanization: "shèjì" },
            { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "dismantle", chinese_answer: "拆卸", chinese_romanization: "chāixiè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'devise' means to plan or invent (a complex procedure, system, or mechanism) by careful thought." +
            "<br><br>" +
            "(B) 'forget' means to fail to remember." +
            "<br><br>" +
            "(C) 'overlook' means to fail to notice something." +
            "<br><br>" +
            "(D) 'dismantle' means to take (a machine or structure) to pieces.",
        chinese_explanation: "(A) '设计' 意味着通过仔细思考来计划或发明（复杂的程序、系统或机制）。" +
            "<br><br>" +
            "(B) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能注意到某事。" +
            "<br><br>" +
            "(D) '拆卸' 意味着将（机器或结构）拆成碎片。"
    },
    {
        id: 10,
        question: "The organization issued a statement to __________ the actions of its former employee.",
        chinese_question: "该组织发表声明 __________ 其前雇员的行为。",
        answers: [
            { option: "A", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" },
            { option: "B", answer: "disavow", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "highlight", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
            { option: "D", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disavow' means to deny any responsibility or support for something." +
            "<br><br>" +
            "(A) 'endorse' means to declare one's public approval or support of." +
            "<br><br>" +
            "(C) 'highlight' means to emphasize or make prominent." +
            "<br><br>" +
            "(D) 'confirm' means to establish the truth or correctness of something previously believed, suspected, or feared to be the case.",
        chinese_explanation: "(B) '否认'一词意味着否认对某事的任何责任或支持。" +
            "<br><br>" +
            "(A) '认可' 意味着公开表示赞同或支持。" +
            "<br><br>" +
            "(C) '强调' 意味着强调或突出。" +
            "<br><br>" +
            "(D) '确认' 意味着确定之前被认为、怀疑或担心的事情的真实性或正确性。"
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
