// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The mayor was quick to __________ the acts of vandalism that occurred in the city.",
    chinese_question: "市长迅速 __________ 发生在城市中的破坏行为。",
    answers: [
        { option: "A", answer: "condone", chinese_answer: "宽恕", chinese_romanization: "kuānshù" },
        { option: "B", answer: "decry", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
        { option: "C", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
        { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'decry' means to publicly denounce or criticize." +
        "<br><br>" +
        "(A) 'condone' means to accept or allow behavior that is morally wrong or offensive." +
        "<br><br>" +
        "(C) 'observe' means to notice or perceive something and register it as being significant." +
        "<br><br>" +
        "(D) 'forget' means to fail to remember.",
    chinese_explanation: "(B) '谴责'一词意味着公开谴责或批评。" +
        "<br><br>" +
        "(A) '宽恕' 意味着接受或允许道德上错误或冒犯的行为。" +
        "<br><br>" +
        "(C) '观察' 意味着注意或察觉某事并将其视为重要。" +
        "<br><br>" +
        "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 2,
        question: "After realizing his mistake, he quickly __________ his harsh comments.",
        chinese_question: "意识到自己的错误后，他迅速 __________ 了自己严厉的评论。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "retracted", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "C", answer: "repeated", chinese_answer: "重复", chinese_romanization: "chóngfù" },
            { option: "D", answer: "defended", chinese_answer: "辩护", chinese_romanization: "biànhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retracted' means to withdraw a statement or accusation as untrue or unjustified." +
            "<br><br>" +
            "(A) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'repeated' means to say again something one has already said." +
            "<br><br>" +
            "(D) 'defended' means to resist an attack made on someone or something; protect from harm or danger.",
        chinese_explanation: "(B) '撤回'一词意味着撤回一项声明或指控，认为其不真实或不公正。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '重复' 意味着再次说某人已经说过的话。" +
            "<br><br>" +
            "(D) '辩护' 意味着抵御对某人或某物的攻击；保护免受伤害或危险。"
    },
    {
        id: 3,
        question: "The baby's cry __________ her to check on him immediately.",
        chinese_question: "婴儿的哭声 __________ 她立刻去查看。",
        answers: [
            { option: "A", answer: "prompted", chinese_answer: "促使", chinese_romanization: "cùshǐ" },
            { option: "B", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prompted' means to cause or bring about (an action or feeling)." +
            "<br><br>" +
            "(B) 'delayed' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'calmed' means to make (someone) tranquil and quiet; soothe.",
        chinese_explanation: "(A) '促使' 意味着导致或引起（一个行动或感觉）。" +
            "<br><br>" +
            "(B) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '平静' 意味着使（某人）平静和安静；安抚。"
    },
    {
        id: 4,
    question: "They decided to __________ the mountain range to reach the other side.",
    chinese_question: "他们决定 __________ 山脉到达另一边。",
    answers: [
        { option: "A", answer: "climb", chinese_answer: "攀登", chinese_romanization: "pāndēng" },
        { option: "B", answer: "traverse", chinese_answer: "穿越", chinese_romanization: "chuānyuè" },
        { option: "C", answer: "avoid", chinese_answer: "避开", chinese_romanization: "bìkāi" },
        { option: "D", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'traverse' means to travel across or through." +
        "<br><br>" +
        "(A) 'climb' means to go or come up a slope, incline, or staircase." +
        "<br><br>" +
        "(C) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'descend' means to move or fall downward.",
    chinese_explanation: "(B) '穿越' 意味着穿过或通过。" +
        "<br><br>" +
        "(A) '攀登' 意味着上坡、上升或上楼梯。" +
        "<br><br>" +
        "(C) '避开' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(D) '下降' 意味着向下移动或下降。"
    },
    {
        id: 5,
    question: "During the exam, he was able to __________ the information he had memorized without truly understanding it.",
    chinese_question: "在考试期间，他能够 __________ 他所记住的信息，而没有真正理解它。",
    answers: [
        { option: "A", answer: "ponder", chinese_answer: "思考", chinese_romanization: "sīkǎo" },
        { option: "B", answer: "regurgitate", chinese_answer: "机械重复", chinese_romanization: "jīxiè chóngfù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "formulate", chinese_answer: "制定", chinese_romanization: "zhìdìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'regurgitate' means to repeat information without understanding it." +
        "<br><br>" +
        "(A) 'ponder' means to think about something carefully." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'formulate' means to create or devise methodically.",
    chinese_explanation: "(B) '机械重复' 意味着重复信息而不理解。" +
        "<br><br>" +
        "(A) '思考' 意味着仔细思考某事。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '制定' 意味着系统地创建或设计。"
    },
    {
        id: 6,
        question: "The student decided to __________ on his strong math skills to tutor other students.",
        chinese_question: "这名学生决定 __________ 自己强大的数学技能来辅导其他学生。",
        answers: [
            { option: "A", answer: "capitalize", chinese_answer: "利用", chinese_romanization: "lìyòng" },
            { option: "B", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capitalize' means to take advantage of (a situation); make the most of." +
            "<br><br>" +
            "(B) 'undermine' means to damage or weaken someone or something, especially gradually." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'suppress' means to forcibly put an end to.",
        chinese_explanation: "(A) '利用' 意味着利用（情况）；充分利用。" +
            "<br><br>" +
            "(B) '削弱' 意味着在力量、决心或体力上变得更弱。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '抑制' 意味着强行终止。"
    },
    {
        id: 7,
        question: "He was fined for parking in a way that __________ local traffic laws.",
        chinese_question: "他因停车方式 __________ 当地交通法规而被罚款。",
        answers: [
            { option: "A", answer: "supports", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "contravenes", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
            { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "respects", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contravenes' means to violate or conflict with a law, rule, or agreement." +
            "<br><br>" +
            "(A) 'supports' means to give assistance to." +
            "<br><br>" +
            "(C) 'ignores' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'respects' means to show consideration for.",
        chinese_explanation: "(B) '违反'一词意味着违反或与法律、规则或协议相冲突。" +
            "<br><br>" +
            "(A) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '尊重' 意味着表示考虑。"
    },
    {
        id: 8,
        question: "Before signing the contract, she decided to __________ all the terms and conditions to ensure everything was in order.",
        chinese_question: "在签署合同之前，她决定 __________ 所有条款和条件，以确保一切都井然有序。",
        answers: [
            { option: "A", answer: "scrutinize", chinese_answer: "仔细检查", chinese_romanization: "zǐxì jiǎnchá" },
            { option: "B", answer: "skim", chinese_answer: "略读", chinese_romanization: "lüèdú" },
            { option: "C", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "D", answer: "bypass", chinese_answer: "绕过", chinese_romanization: "ràoguò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'scrutinize' means to examine or inspect closely and thoroughly." +
            "<br><br>" +
            "(B) 'skim' means to read or glance through quickly." +
            "<br><br>" +
            "(C) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(D) 'bypass' means to go around or avoid (an obstacle or problem).",
        chinese_explanation: "(A) '仔细检查' 意味着仔细地检查或察看。" +
            "<br><br>" +
            "(B) '略读' 意味着快速浏览或略读。" +
            "<br><br>" +
            "(C) '避免' 意味着避开或阻止自己做某事。" +
            "<br><br>" +
            "(D) '绕过' 意味着绕过或避免（障碍或问题）。"
    },
    {
        id: 9,
    question: "He needs to __________ his schedule to make time for exercise every day.",
    chinese_question: "他需要 __________ 他的时间表，以每天腾出时间锻炼。",
    answers: [
        { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "organize", chinese_answer: "组织", chinese_romanization: "zǔzhī" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzáhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'organize' means to arrange or put in order." +
        "<br><br>" +
        "(A) 'abandon' means to give up completely (a course of action, a practice, or a way of thinking)." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(D) 'complicate' means to make something more difficult or complex.",
    chinese_explanation: "(B) '组织' 意味着安排或整理。" +
        "<br><br>" +
        "(A) '放弃' 意味着完全放弃（一个行动过程、一种做法或一种思维方式）。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(D) '复杂化' 意味着使某事变得更加困难或复杂。"
    },
    {
        id: 10,
    question: "He was criticized for only being able to __________ information from textbooks during his presentation.",
    chinese_question: "在演讲中，他因只能 __________ 教科书中的信息而受到批评。",
    answers: [
        { option: "A", answer: "summarize", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
        { option: "B", answer: "regurgitate", chinese_answer: "机械重复", chinese_romanization: "jīxiè chóngfù" },
        { option: "C", answer: "interpret", chinese_answer: "解释", chinese_romanization: "jiěshì" },
        { option: "D", answer: "omit", chinese_answer: "省略", chinese_romanization: "shěnglüè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'regurgitate' means to repeat information without understanding it." +
        "<br><br>" +
        "(A) 'summarize' means to give a brief statement of the main points." +
        "<br><br>" +
        "(C) 'interpret' means to explain the meaning of something." +
        "<br><br>" +
        "(D) 'omit' means to leave out or exclude.",
    chinese_explanation: "(B) '机械重复' 意味着重复信息而不理解。" +
        "<br><br>" +
        "(A) '总结' 意味着简要说明要点。" +
        "<br><br>" +
        "(C) '解释' 意味着解释某事的含义。" +
        "<br><br>" +
        "(D) '省略' 意味着遗漏或排除。"
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
