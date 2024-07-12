// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She tried to __________ her friend's worries by offering reassurance and support.",
        chinese_question: "她试图通过提供安慰和支持来 __________ 她朋友的担忧。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "compound", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "exaggerate", chinese_answer: "夸大", chinese_romanization: "kuādà" },
            { option: "D", answer: "mitigate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mitigate' means to make less severe or intense." +
            "<br><br>" +
            "(A) 'increase' means to make something larger or greater." +
            "<br><br>" +
            "(B) 'compound' means to make something worse by adding to it." +
            "<br><br>" +
            "(C) 'exaggerate' means to represent something as being larger, better, or worse than it really is.",
        chinese_explanation: "(D) '减轻' 意味着使某事物不那么严重或强烈。" +
            "<br><br>" +
            "(A) '增加' 意味着使某物变得更大或更强。" +
            "<br><br>" +
            "(B) '加剧' 意味着通过添加使某事变得更糟。" +
            "<br><br>" +
            "(C) '夸大' 意味着将某事描述得比实际更大、更好或更糟。"
    },
    {
        id: 2,
    question: "Children often __________ on their parents for guidance and support.",
    chinese_question: "孩子们常常 __________ 他们的父母提供指导和支持。",
    answers: [
        { option: "A", answer: "avoid", chinese_answer: "避开", chinese_romanization: "bìkāi" },
        { option: "B", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "rely", chinese_answer: "依赖", chinese_romanization: "yīlài" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'rely' means to depend on with full trust or confidence." +
        "<br><br>" +
        "(A) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(B) 'resist' means to withstand the action or effect of." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally.",
    chinese_explanation: "(D) '依赖' 意味着完全信任或依赖。" +
        "<br><br>" +
        "(A) '避开' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(B) '抵抗' 意味着经受住某事的作用或影响。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 3,
    question: "The school decided to __________ the student's suspension after reviewing the incident.",
    chinese_question: "学校在审查事件后决定 __________ 学生的停学处分。",
    answers: [
        { option: "A", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
        { option: "B", answer: "rescind", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
        { option: "C", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "extend", chinese_answer: "延长", chinese_romanization: "yáncháng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rescind' means to revoke, cancel, or repeal a law, order, or agreement." +
        "<br><br>" +
        "(A) 'maintain' means to keep in existence or continuance." +
        "<br><br>" +
        "(C) 'uphold' means to support or maintain." +
        "<br><br>" +
        "(D) 'extend' means to make something longer or larger.",
    chinese_explanation: "(B) '撤销' 意味着撤销、取消或废除一项法律、命令或协议。" +
        "<br><br>" +
        "(A) '维持' 意味着使存在或继续存在。" +
        "<br><br>" +
        "(C) '支持' 意味着支持或维持。" +
        "<br><br>" +
        "(D) '延长' 意味着使某物更长或更大。"
    },
    {
        id: 4,
    question: "He decided to take a short vacation to __________ from the stress of work.",
    chinese_question: "他决定休个短假来 __________ 工作的压力。",
    answers: [
        { option: "A", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
        { option: "B", answer: "recuperate", chinese_answer: "恢复", chinese_romanization: "huīfù" },
        { option: "C", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'recuperate' means to recover from illness or exertion." +
        "<br><br>" +
        "(A) 'deplete' means to use up the supply or resources of." +
        "<br><br>" +
        "(C) 'intensify' means to become or make more intense." +
        "<br><br>" +
        "(D) 'worsen' means to make or become worse.",
    chinese_explanation: "(B) '恢复' 意味着从疾病或劳累中恢复。" +
        "<br><br>" +
        "(A) '耗尽' 意味着用尽供应或资源。" +
        "<br><br>" +
        "(C) '加剧' 意味着变得或使更强烈。" +
        "<br><br>" +
        "(D) '恶化' 意味着变得或使更糟。"
    },
    {
        id: 5,
    question: "The organization aimed to __________ all traces of corruption from its ranks, promoting transparency and trust.",
    chinese_question: "该组织旨在 __________ 队伍中的所有腐败痕迹，促进透明度和信任。",
    answers: [
        { option: "A", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
        { option: "B", answer: "expunge", chinese_answer: "清除", chinese_romanization: "qīngchú" },
        { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "D", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'expunge' figuratively means to erase or remove completely from existence." +
        "<br><br>" +
        "(A) 'nurture' means to care for and encourage growth." +
        "<br><br>" +
        "(C) 'encourage' means to give support or confidence." +
        "<br><br>" +
        "(D) 'hide' means to conceal.",
    chinese_explanation: "(B) '清除' 一词在比喻上意味着从存在中完全抹去或移除。" +
        "<br><br>" +
        "(A) '培育' 意味着照顾和鼓励成长。" +
        "<br><br>" +
        "(C) '鼓励' 意味着给予支持或信心。" +
        "<br><br>" +
        "(D) '隐藏' 意味着隐藏。"
    },
    {
        id: 6,
    question: "Their once noble cause was __________ by greed and selfishness, turning the movement into a shadow of its former self.",
    chinese_question: "他们曾经崇高的事业被贪婪和自私 __________，使得运动变成了过去的影子。",
    answers: [
        { option: "A", answer: "debauched", chinese_answer: "堕落", chinese_romanization: "duòluò" },
        { option: "B", answer: "elevated", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "C", answer: "purified", chinese_answer: "净化", chinese_romanization: "jìnghuà" },
        { option: "D", answer: "sanctified", chinese_answer: "圣化", chinese_romanization: "shènghuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'debauched' figuratively means to corrupt or pervert the integrity or values of something." +
        "<br><br>" +
        "(B) 'elevated' means raised to a higher level, position, or state." +
        "<br><br>" +
        "(C) 'purified' means freed from any contamination." +
        "<br><br>" +
        "(D) 'sanctified' means made holy; consecrated.",
    chinese_explanation: "(A) '堕落' 在此语境下比喻腐败或颠覆某物的完整性或价值观。" +
        "<br><br>" +
        "(B) '提升' 意味着提升到更高的水平、职位或状态。" +
        "<br><br>" +
        "(C) '净化' 意味着摆脱任何污染。" +
        "<br><br>" +
        "(D) '圣化' 意味着使神圣；奉献。"
    },
    {
        id: 7,
        question: "When his friend failed the exam, he made sure to __________ with him and offer encouragement.",
        chinese_question: "当他的朋友考试失败时，他确保 __________ 他并提供鼓励。",
        answers: [
            { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "mock", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
            { option: "D", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'commiserate' means to express or feel sympathy or pity." +
            "<br><br>" +
            "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'mock' means to tease or laugh at in a scornful or contemptuous manner.",
        chinese_explanation: "(D) '同情' 意味着表达或感受到同情或怜悯。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '嘲笑' 意味着以轻蔑或蔑视的方式取笑或嘲笑。"
    },
    {
        id: 8,
    question: "The general ordered his troops to __________ at the main gate for inspection.",
    chinese_question: "将军命令他的部队在大门口 __________ 进行检阅。",
    answers: [
        { option: "A", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
        { option: "B", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" },
        { option: "C", answer: "muster", chinese_answer: "集合", chinese_romanization: "jíhé" },
        { option: "D", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'muster' means to gather or assemble, especially troops." +
        "<br><br>" +
        "(A) 'scatter' means to throw in various random directions." +
        "<br><br>" +
        "(B) 'rest' means to cease work and relax." +
        "<br><br>" +
        "(D) 'sleep' means to be in a state of rest.",
    chinese_explanation: "(C) '集合' 意味着聚集或召集，特别是部队。" +
        "<br><br>" +
        "(A) '分散' 意味着向各个随机方向投掷。" +
        "<br><br>" +
        "(B) '休息' 意味着停止工作和放松。" +
        "<br><br>" +
        "(D) '睡觉' 意味着处于休息状态。"
    },
    {
        id: 9,
    question: "The chef spent years __________ his culinary skills to perfection.",
    chinese_question: "这位厨师花了多年时间 __________ 他的烹饪技巧，使其达到完美。",
    answers: [
        { option: "A", answer: "neglecting", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "honing", chinese_answer: "磨炼", chinese_romanization: "móliàn" },
        { option: "C", answer: "ruining", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
        { option: "D", answer: "dismissing", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'honing' means to refine or perfect something over a period of time." +
        "<br><br>" +
        "(A) 'neglecting' means to fail to care for properly." +
        "<br><br>" +
        "(C) 'ruining' means to destroy or severely damage." +
        "<br><br>" +
        "(D) 'dismissing' means to treat as unworthy of serious consideration.",
    chinese_explanation: "(B) '磨炼' 意味着在一段时间内改进或完善某事。" +
        "<br><br>" +
        "(A) '忽视' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(C) '毁坏' 意味着破坏或严重损坏。" +
        "<br><br>" +
        "(D) '驳回' 意味着认为不值得认真考虑。"
    },
    {
        id: 10,
    question: "The little boy began to __________ when his toy was taken away, his nose running and his eyes red.",
    chinese_question: "当玩具被拿走时，小男孩开始 __________ ，鼻涕流出来，眼睛红红的。",
    answers: [
        { option: "A", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
        { option: "B", answer: "snivel", chinese_answer: "抽泣", chinese_romanization: "chōuqì" },
        { option: "C", answer: "sing", chinese_answer: "唱歌", chinese_romanization: "chànggē" },
        { option: "D", answer: "play", chinese_answer: "玩耍", chinese_romanization: "wánshuǎ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'snivel' means to cry and sniffle in a feeble or fretful way." +
        "<br><br>" +
        "(A) 'smile' means to form one's features into a pleased or kind expression." +
        "<br><br>" +
        "(C) 'sing' means to make musical sounds with the voice." +
        "<br><br>" +
        "(D) 'play' means to engage in activity for enjoyment and recreation.",
    chinese_explanation: "(B) '抽泣' 意味着以软弱或烦躁的方式哭泣和抽泣。" +
        "<br><br>" +
        "(A) '微笑' 意味着将面部表情变成愉快或亲切的表情。" +
        "<br><br>" +
        "(C) '唱歌' 意味着用嗓音发出音乐声。" +
        "<br><br>" +
        "(D) '玩耍' 意味着进行娱乐和休闲活动。"
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
