// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The manager did not hesitate to __________ the employee for consistently arriving late to work.",
    chinese_question: "经理毫不犹豫地 __________ 员工，因为他一直迟到。",
    answers: [
        { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "upbraid", chinese_answer: "斥责", chinese_romanization: "chìzé" },
        { option: "C", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
        { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'upbraid' means to scold or criticize someone severely." +
        "<br><br>" +
        "(A) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'commend' means to praise formally or officially." +
        "<br><br>" +
        "(D) 'reward' means to give something to someone in recognition of their services, efforts, or achievements.",
    chinese_explanation: "(B) '斥责' 一词意味着严厉地责骂或批评某人。" +
        "<br><br>" +
        "(A) '赞美' 意味着表示热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '表扬' 意味着正式或官方地赞美。" +
        "<br><br>" +
        "(D) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。"
    },
    {
        id: 2,
    question: "To __________ the angry neighbors, she promised to keep the noise down during parties.",
    chinese_question: "为了 __________ 愤怒的邻居，她承诺在聚会期间保持低噪音。",
    answers: [
        { option: "A", answer: "agitate", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "B", answer: "placate", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'placate' means to make someone less angry or hostile." +
        "<br><br>" +
        "(A) 'agitate' means to make someone troubled or nervous." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'confront' means to face up to and deal with a problem or difficult situation.",
    chinese_explanation: "(B) '安抚' 意味着使某人不再生气或敌对。" +
        "<br><br>" +
        "(A) '激怒' 意味着使某人感到烦恼或紧张。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '面对' 意味着面对并处理一个问题或困难的情况。"
    },
    {
        id: 3,
    question: "She __________ her son for not completing his homework before playing video games.",
    chinese_question: "她因为儿子在玩电子游戏前没有完成作业而 __________ 他。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "upbraided", chinese_answer: "斥责", chinese_romanization: "chìzé" },
        { option: "C", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "D", answer: "congratulated", chinese_answer: "祝贺", chinese_romanization: "zhùhè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'upbraided' means to scold or criticize someone severely." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'encouraged' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(D) 'congratulated' means to give someone good wishes when something special or pleasant has happened to them.",
    chinese_explanation: "(B) '斥责' 一词意味着严厉地责骂或批评某人。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '鼓励' 意味着给予某人支持、信心或希望。" +
        "<br><br>" +
        "(D) '祝贺' 意味着在某件特殊或愉快的事情发生时向某人表示良好的祝愿。"
    },
    {
        id: 4,
        question: "The company’s resources were __________ after the major project.",
        chinese_question: "大型项目之后，公司的资源被 __________ 了。",
        answers: [
            { option: "A", answer: "depleted", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "B", answer: "enhanced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "C", answer: "preserved", chinese_answer: "保存", chinese_romanization: "bǎocún" },
            { option: "D", answer: "accumulated", chinese_answer: "积累", chinese_romanization: "jīlěi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'depleted' means to use up the supply or resources of." +
            "<br><br>" +
            "(B) 'enhanced' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(C) 'preserved' means to maintain (something) in its original or existing state." +
            "<br><br>" +
            "(D) 'accumulated' means to gather together or acquire an increasing number or quantity of.",
        chinese_explanation: "(A) '耗尽' 意味着用尽供应或资源。" +
            "<br><br>" +
            "(B) '增强' 意味着加强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(C) '保存' 意味着保持（某物）的原始或现有状态。" +
            "<br><br>" +
            "(D) '积累' 意味着聚集或获得越来越多的数量。"
    },
    {
        id: 5,
        question: "The government plans to __________ the healthcare system to provide better services for all citizens.",
        chinese_question: "政府计划 __________ 医疗系统，为所有公民提供更好的服务。",
        answers: [
            { option: "A", answer: "dismantle", chinese_answer: "拆除", chinese_romanization: "chāichú" },
            { option: "B", answer: "reform", chinese_answer: "改革", chinese_romanization: "gǎigé" },
            { option: "C", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reform' means to make changes in something in order to improve it." +
            "<br><br>" +
            "(A) 'dismantle' means to take a structure to pieces." +
            "<br><br>" +
            "(C) 'maintain' means to keep something at the same level or rate." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(B) '改革'一词意味着为了改善某事而进行变革。" +
            "<br><br>" +
            "(A) '拆除' 意味着将结构拆解。" +
            "<br><br>" +
            "(C) '维持' 意味着保持在同一水平或速度。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 6,
    question: "To reach the remote village, they had to __________ a dense forest and a winding river.",
    chinese_question: "为了到达偏远的村庄，他们不得不 __________ 一片茂密的森林和一条蜿蜒的河流。",
    answers: [
        { option: "A", answer: "avoid", chinese_answer: "避开", chinese_romanization: "bìkāi" },
        { option: "B", answer: "traverse", chinese_answer: "穿越", chinese_romanization: "chuānyuè" },
        { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "escape", chinese_answer: "逃离", chinese_romanization: "táolí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'traverse' means to travel across or through." +
        "<br><br>" +
        "(A) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(C) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(D) 'escape' means to break free from confinement or control.",
    chinese_explanation: "(B) '穿越' 意味着穿过或通过。" +
        "<br><br>" +
        "(A) '避开' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '逃离' 意味着摆脱束缚或控制。"
    },
    {
        id: 7,
    question: "The unfair criticism from her boss seemed to __________ her to the point of tears.",
    chinese_question: "老板的不公平批评似乎让她感到 __________ 到泪水涟涟。",
    answers: [
        { option: "A", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
        { option: "B", answer: "madden", chinese_answer: "发狂", chinese_romanization: "fākuáng" },
        { option: "C", answer: "amuse", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
        { option: "D", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'madden' means to make someone very angry." +
        "<br><br>" +
        "(A) 'soothe' means to gently calm a person or their feelings." +
        "<br><br>" +
        "(C) 'amuse' means to cause someone to find something funny." +
        "<br><br>" +
        "(D) 'calm' means to make someone tranquil and quiet.",
    chinese_explanation: "(B) '发狂' 一词意味着使某人非常生气。" +
        "<br><br>" +
        "(A) '抚慰' 意味着轻轻地使人或他们的感情平静下来。" +
        "<br><br>" +
        "(C) '逗乐' 意味着使某人觉得某事有趣。" +
        "<br><br>" +
        "(D) '冷静' 意味着使某人平静和安静。"
    },
    {
        id: 8,
        question: "He promised to __________ his ways after realizing how his actions hurt his family.",
        chinese_question: "在意识到自己的行为伤害了家人后，他承诺 __________ 自己的行为。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "reform", chinese_answer: "改革", chinese_romanization: "gǎigé" },
            { option: "C", answer: "repeat", chinese_answer: "重复", chinese_romanization: "chóngfù" },
            { option: "D", answer: "justify", chinese_answer: "辩解", chinese_romanization: "biànjiě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reform' means to make changes in one's behavior in order to improve it." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'repeat' means to do something again." +
            "<br><br>" +
            "(D) 'justify' means to show or prove to be right or reasonable.",
        chinese_explanation: "(B) '改革'一词意味着为了改善某人的行为而进行变革。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '重复' 意味着再做一次。" +
            "<br><br>" +
            "(D) '辩解' 意味着表明或证明是正确或合理的。"
    },
    {
        id: 9,
    question: "The noise from the construction site did not __________ until late in the evening.",
    chinese_question: "施工现场的噪音直到深夜才 __________。",
    answers: [
        { option: "A", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
        { option: "B", answer: "abate", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
        { option: "C", answer: "persist", chinese_answer: "持续", chinese_romanization: "chíxù" },
        { option: "D", answer: "amplify", chinese_answer: "扩大", chinese_romanization: "kuòdà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'abate' means to become less intense or widespread." +
        "<br><br>" +
        "(A) 'escalate' means to increase rapidly." +
        "<br><br>" +
        "(C) 'persist' means to continue to exist; be prolonged." +
        "<br><br>" +
        "(D) 'amplify' means to increase the volume of sound.",
    chinese_explanation: "(B) '减弱'一词意味着变得不那么强烈或广泛。" +
        "<br><br>" +
        "(A) '升级' 意味着迅速增加。" +
        "<br><br>" +
        "(C) '持续' 意味着继续存在；被延长。" +
        "<br><br>" +
        "(D) '扩大' 意味着增加声音的音量。"
    },
    {
        id: 10,
        question: "He was quick to __________ any knowledge of the incident when questioned by the police.",
        chinese_question: "当警察询问时，他迅速 __________ 对事件的任何了解。",
        answers: [
            { option: "A", answer: "admit", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "B", answer: "disavow", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "D", answer: "discuss", chinese_answer: "讨论", chinese_romanization: "tǎolùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disavow' means to deny any responsibility or support for something." +
            "<br><br>" +
            "(A) 'admit' means to confess to be true or to be the case." +
            "<br><br>" +
            "(C) 'confirm' means to establish the truth or correctness of something previously believed, suspected, or feared to be the case." +
            "<br><br>" +
            "(D) 'discuss' means to talk about something with another person or group.",
        chinese_explanation: "(B) '否认'一词意味着否认对某事的任何责任或支持。" +
            "<br><br>" +
            "(A) '承认' 意味着承认真实或事实。" +
            "<br><br>" +
            "(C) '确认' 意味着确定之前被认为、怀疑或担心的事情的真实性或正确性。" +
            "<br><br>" +
            "(D) '讨论' 意味着与他人或小组谈论某事。"
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
