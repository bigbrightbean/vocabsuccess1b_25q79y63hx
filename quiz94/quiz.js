// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The legal jargon used in the contract served to __________ its meaning, making it difficult for laypeople to understand.",
    chinese_question: "合同中使用的法律术语 __________ 了其意义，使外行人难以理解。",
    answers: [
        { option: "A", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "B", answer: "obfuscate", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
        { option: "C", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'obfuscate' means to make something unclear or confusing." +
        "<br><br>" +
        "(A) 'clarify' means to make clear." +
        "<br><br>" +
        "(C) 'reveal' means to show or disclose." +
        "<br><br>" +
        "(D) 'simplify' means to make less complex.",
    chinese_explanation: "(B) '混淆' 一词意味着使某事变得不清楚或混乱。" +
        "<br><br>" +
        "(A) '澄清' 意味着使清楚。" +
        "<br><br>" +
        "(C) '揭示' 意味着展示或披露。" +
        "<br><br>" +
        "(D) '简化' 意味着使之变得不复杂。"
    },
    {
        id: 2,
    question: "After many successful years, the band decided to __________ and pursue solo careers.",
    chinese_question: "经过多年成功后，乐队决定 __________ 并追求个人事业。",
    answers: [
        { option: "A", answer: "disband", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
        { option: "B", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disband' means to break up or cause to break up and stop functioning." +
        "<br><br>" + 
        "(B) 'continue' means to persist in an activity or process." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '解散' 意味着分开或导致分开并停止运作。" +
        "<br><br>" + 
        "(B) '继续' 意味着继续进行一项活动或过程。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 3,
    question: "The milk began to __________ after being left out on the counter overnight.",
    chinese_question: "牛奶在柜台上放了一夜后开始 __________。",
    answers: [
        { option: "A", answer: "dissolve", chinese_answer: "溶解", chinese_romanization: "róngjiě" },
        { option: "B", answer: "coagulate", chinese_answer: "凝结", chinese_romanization: "níngjié" },
        { option: "C", answer: "evaporate", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
        { option: "D", answer: "dilute", chinese_answer: "稀释", chinese_romanization: "xīshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'coagulate' means to change to a solid or semi-solid state." +
        "<br><br>" + 
        "(A) 'dissolve' means to become incorporated into a liquid so as to form a solution." +
        "<br><br>" + 
        "(C) 'evaporate' means to turn from liquid into vapor." +
        "<br><br>" + 
        "(D) 'dilute' means to make a liquid thinner or weaker by adding water or another solvent to it.",
    chinese_explanation: "(B) '凝结' 意味着变成固态或半固态。" +
        "<br><br>" + 
        "(A) '溶解' 意味着融入液体中以形成溶液。" +
        "<br><br>" + 
        "(C) '蒸发' 意味着从液态变成气态。" +
        "<br><br>" + 
        "(D) '稀释' 意味着通过加入水或其他溶剂使液体变薄或变弱。"
    },
    {
        id: 4,
    question: "In the heated argument, she began to __________ her friend's character, making hurtful and unfair accusations.",
    chinese_question: "在激烈的争吵中，她开始 __________ 她朋友的品格，做出了伤人且不公平的指责。",
    answers: [
        { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zānyáng" },
        { option: "B", answer: "vilify", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'vilify' means to speak or write about in an abusively disparaging manner." +
        "<br><br>" +
        "(A) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(B) '诋毁' 意味着以辱骂性的贬低方式谈论或写作。" +
        "<br><br>" +
        "(A) '赞扬' 意味着表达热情的赞同或钦佩。" +
        "<br><br>" +
        "(C) '支持' 意味着承担某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 5,
    question: "His emotions seemed to __________ between joy and despair, making it hard to predict how he would feel from one moment to the next.",
    chinese_question: "他的情绪似乎在喜悦和绝望之间 __________，使人难以预测他每时每刻的感受。",
    answers: [
        { option: "A", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "B", answer: "oscillate", chinese_answer: "摆动", chinese_romanization: "bǎidòng" },
        { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "disappear", chinese_answer: "消失", chinese_romanization: "xiāoshī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'oscillate' figuratively means to swing back and forth between different states or conditions." +
        "<br><br>" +
        "(A) 'stabilize' means to make or become steady." +
        "<br><br>" +
        "(C) 'diminish' means to become smaller or less." +
        "<br><br>" +
        "(D) 'disappear' means to cease to be visible.",
    chinese_explanation: "(B) '摆动' 一词在比喻上意味着在不同状态或条件之间来回波动。" +
        "<br><br>" +
        "(A) '稳定' 意味着使稳定。" +
        "<br><br>" +
        "(C) '减少' 意味着变得更小或更少。" +
        "<br><br>" +
        "(D) '消失' 意味着不再可见。"
    },
    {
        id: 6,
    question: "The dark clouds on the horizon seemed to __________ an approaching storm.",
    chinese_question: "地平线上的乌云似乎在 __________ 即将到来的暴风雨。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "foreshadow", chinese_answer: "预示", chinese_romanization: "yùshì" },
        { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "D", answer: "alleviate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'foreshadow' means to indicate or hint at a future event." +
        "<br><br>" + 
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(C) 'conceal' means to hide or keep something secret." +
        "<br><br>" + 
        "(D) 'alleviate' means to make less severe.",
    chinese_explanation: "(B) '预示' 意味着暗示或预示未来的事件。" +
        "<br><br>" + 
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(C) '隐藏' 意味着隐藏或保守秘密。" +
        "<br><br>" + 
        "(D) '缓解' 意味着使不那么严重。"
    },
    {
        id: 7,
    question: "He felt betrayed when he realized his partner had __________ him in the deal.",
    chinese_question: "当他意识到他的伙伴在交易中 __________ 他时，他感到被背叛了。",
    answers: [
        { option: "A", answer: "double-crossed", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'double-crossed' means to betray or deceive someone after initially pretending to support them." +
        "<br><br>" + 
        "(B) 'supported' means to give assistance to." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'assisted' means to help someone.",
    chinese_explanation: "(A) '欺骗' 意味着在最初假装支持某人后背叛或欺骗某人。" +
        "<br><br>" + 
        "(B) '支持' 意味着给予帮助。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 8,
        question: "The hikers had to __________ up the steep, rocky hillside to reach the summit.",
        chinese_question: "徒步旅行者不得不 __________ 上陡峭的岩石山坡才能到达山顶。",
        answers: [
            { option: "A", answer: "slide", chinese_answer: "滑动", chinese_romanization: "huádòng" },
            { option: "B", answer: "stroll", chinese_answer: "漫步", chinese_romanization: "mànbù" },
            { option: "C", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "D", answer: "clamber", chinese_answer: "攀爬", chinese_romanization: "pānpá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'clamber' means to climb or move in an awkward and laborious way, typically using both hands and feet." +
            "<br><br>" +
            "(A) 'slide' means to move smoothly along a surface." +
            "<br><br>" +
            "(B) 'stroll' means to walk in a leisurely way." +
            "<br><br>" +
            "(C) 'descend' means to move or fall downward.",
        chinese_explanation: "(D) '攀爬' 意味着以笨拙和费力的方式攀登或移动，通常使用双手和双脚。" +
            "<br><br>" +
            "(A) '滑动' 意味着沿着表面平滑移动。" +
            "<br><br>" +
            "(B) '漫步' 意味着悠闲地走。" +
            "<br><br>" +
            "(C) '下降' 意味着向下移动或落下。"
    },
    {
        id: 9,
        question: "The local market is known to __________ a variety of fresh produce every day.",
        chinese_question: "当地市场每天都 __________ 各种新鲜农产品。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
            { option: "C", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
            { option: "D", answer: "purvey", chinese_answer: "供应", chinese_romanization: "gōngyìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'purvey' means to supply goods, especially food or provisions." +
            "<br><br>" +
            "(A) 'conceal' means to keep something hidden." +
            "<br><br>" +
            "(B) 'discard' means to get rid of something as no longer useful or desirable." +
            "<br><br>" +
            "(C) 'obscure' means to keep from being seen.",
        chinese_explanation: "(D) '供应' 意味着供应货物，尤其是食品或食物。" +
            "<br><br>" +
            "(A) '隐藏' 意味着保持某物隐藏。" +
            "<br><br>" +
            "(B) '丢弃' 意味着丢弃不再有用或不想要的东西。" +
            "<br><br>" +
            "(C) '遮掩' 意味着防止被看到。"
    },
    {
        id: 10,
    question: "The doctor prescribed medication to __________ the patient's pain after surgery.",
    chinese_question: "医生开了药来 __________ 患者术后的疼痛。",
    answers: [
        { option: "A", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "B", answer: "eliminate", chinese_answer: "消除", chinese_romanization: "xiāochú" },
        { option: "C", answer: "mitigate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mitigate' means to make less severe or intense." +
        "<br><br>" +
        "(A) 'exacerbate' means to make something worse." +
        "<br><br>" +
        "(B) 'eliminate' means to completely remove or get rid of." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(C) '缓解' 意味着使某事物不那么严重或强烈。" +
        "<br><br>" +
        "(A) '加剧' 意味着使某事变得更糟。" +
        "<br><br>" +
        "(B) '消除' 意味着完全去除或摆脱。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
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
