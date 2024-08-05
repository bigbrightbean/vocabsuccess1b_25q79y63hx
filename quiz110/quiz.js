// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "They were __________ to enter the exclusive club only after showing their membership cards.",
    chinese_question: "他们在出示会员卡后才被 __________ 进入专属俱乐部。",
    answers: [
        { option: "A", answer: "denied", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "B", answer: "delayed", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
        { option: "C", answer: "restricted", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
        { option: "D", answer: "permitted", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'permitted' means to allow someone to do something." +
        "<br><br>" +
        "(A) 'denied' means refused to give or grant something to someone." +
        "<br><br>" +
        "(B) 'delayed' means made something late or slow." +
        "<br><br>" +
        "(C) 'restricted' means limited or kept under control.",
    chinese_explanation: "(D) '允许' 意味着允许某人做某事。" +
        "<br><br>" +
        "(A) '拒绝' 意味着拒绝给予或授予某人某事。" +
        "<br><br>" +
        "(B) '推迟' 意味着使某事变晚或变慢。" +
        "<br><br>" +
        "(C) '限制' 意味着限制或控制。"
    },
    {
        id: 2,
    question: "The politician faced harsh criticism from all sides and was __________ by the public after the scandal.",
    chinese_question: "在丑闻之后，这位政治家遭到了公众的 __________，来自各方的严厉批评。",
    answers: [
        { option: "A", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "B", answer: "reviled", chinese_answer: "痛骂", chinese_romanization: "tòng mà" },
        { option: "C", answer: "admired", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
        { option: "D", answer: "respected", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reviled' means to criticize in an abusive or angrily insulting manner." +
        "<br><br>" +
        "(A) 'praised' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'admired' means to regard with respect or warm approval." +
        "<br><br>" +
        "(D) 'respected' means to feel or show deferential regard for.",
    chinese_explanation: "(B) '痛骂' 一词意味着以辱骂或愤怒的方式批评。" +
        "<br><br>" +
        "(A) '赞扬' 意味着表示热情的认可或钦佩。" +
        "<br><br>" +
        "(C) '钦佩' 意味着以尊重或热情的方式看待。" +
        "<br><br>" +
        "(D) '尊敬' 意味着感到或表现出尊重。"
    },
    {
        id: 3,
    question: "Her fear of public speaking began to __________ after she successfully delivered her first speech.",
    chinese_question: "成功发表第一次演讲后，她对公开演讲的恐惧开始 __________。",
    answers: [
        { option: "A", answer: "abate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
        { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
        { option: "C", answer: "emerge", chinese_answer: "出现", chinese_romanization: "chūxiàn" },
        { option: "D", answer: "persist", chinese_answer: "持续", chinese_romanization: "chíxù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'abate' figuratively means to become less intense or widespread." +
        "<br><br>" +
        "(B) 'increase' means to become or make greater in size, amount, intensity, or degree." +
        "<br><br>" +
        "(C) 'emerge' means to move out of or away from something and become visible." +
        "<br><br>" +
        "(D) 'persist' means to continue to exist; be prolonged.",
    chinese_explanation: "(A) '减轻' 在此语境下比喻变得不那么强烈或不那么广泛。" +
        "<br><br>" +
        "(B) '增加' 意味着在大小、数量、强度或程度上变得更大。" +
        "<br><br>" +
        "(C) '出现' 意味着从某物中移出或离开并变得可见。" +
        "<br><br>" +
        "(D) '持续' 意味着继续存在；被延长。"
    },
    {
        id: 4,
    question: "He could not __________ any details of the dream he had last night because it faded from his memory quickly.",
    chinese_question: "他无法 __________ 昨晚梦到的任何细节，因为它很快从他的记忆中消失了。",
    answers: [
        { option: "A", answer: "recall", chinese_answer: "回忆", chinese_romanization: "huíyì" },
        { option: "B", answer: "fabricate", chinese_answer: "捏造", chinese_romanization: "niēzào" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "forgo", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'recall' means to bring a fact, event, or situation back into one's mind; remember." +
        "<br><br>" +
        "(B) 'fabricate' means to invent or concoct something, typically with deceitful intent." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'forgo' means to omit or decline to take something pleasant or valuable.",
    chinese_explanation: "(A) '回忆' 意味着将事实、事件或情况重新带入某人的记忆中；记得。" +
        "<br><br>" +
        "(B) '捏造' 意味着发明或编造某事，通常带有欺骗意图。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(D) '放弃' 意味着省略或拒绝接受某物，通常是愉快或有价值的东西。"
    },
    {
        id: 5,
    question: "The chef takes pride in his restaurant’s ability to __________ the finest seafood in town, setting it apart from competitors who cannot match its quality.",
    chinese_question: "这位厨师以他的餐厅能够供应镇上最好的海鲜而自豪，使它与那些无法匹敌其质量的竞争对手区分开来。",
    answers: [
        { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "purvey", chinese_answer: "供应", chinese_romanization: "gōngyìng" },
        { option: "C", answer: "consume", chinese_answer: "消费", chinese_romanization: "xiāofèi" },
        { option: "D", answer: "disregard", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'purvey' means to supply goods, especially food or provisions." +
        "<br><br>" +
        "(A) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(C) 'consume' means to use up resources." +
        "<br><br>" +
        "(D) 'disregard' means to pay no attention to.",
    chinese_explanation: "(B) '供应' 意味着供应货物，尤其是食品或食物。" +
        "<br><br>" +
        "(A) '忽视' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(C) '消费' 意味着使用资源。" +
        "<br><br>" +
        "(D) '忽略' 意味着不注意。"
    },
    {
        id: 6,
    question: "The young soldier began to __________ in the trench as the enemy shells exploded nearby.",
    chinese_question: "当敌人的炮弹在附近爆炸时，年轻的士兵在战壕中开始 __________。",
    answers: [
        { option: "A", answer: "cower", chinese_answer: "畏缩", chinese_romanization: "wèisuō" },
        { option: "B", answer: "charge", chinese_answer: "冲锋", chinese_romanization: "chōngfēng" },
        { option: "C", answer: "shout", chinese_answer: "喊叫", chinese_romanization: "hǎnjiào" },
        { option: "D", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cower' means to crouch down in fear, used figuratively here." +
        "<br><br>" + 
        "(B) 'charge' means to move forward quickly and directly, typically in attack." +
        "<br><br>" + 
        "(C) 'shout' means to say something very loudly." +
        "<br><br>" + 
        "(D) 'laugh' means to make sounds and movements of the face and body that show amusement.",
    chinese_explanation: "(A) '畏缩' 意味着害怕地蜷缩下来，这里是比喻用法。" +
        "<br><br>" + 
        "(B) '冲锋' 意味着迅速而直接地向前移动，通常是攻击。" +
        "<br><br>" + 
        "(C) '喊叫' 意味着非常大声地说某事。" +
        "<br><br>" + 
        "(D) '笑' 意味着发出显示愉悦的声音和面部、身体的动作。"
    },
    {
        id: 7,
    question: "She had a tendency to __________ old magazines and newspapers, filling her house with stacks of them.",
    chinese_question: "她有囤积旧杂志和报纸的习惯，把房子堆满了。",
    answers: [
        { option: "A", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
        { option: "B", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
        { option: "C", answer: "organize", chinese_answer: "整理", chinese_romanization: "zhěnglǐ" },
        { option: "D", answer: "donate", chinese_answer: "捐赠", chinese_romanization: "juānzèng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hoard' means to accumulate and store away (a large amount of something) for future use." +
        "<br><br>" +
        "(B) 'discard' means to get rid of something as no longer useful or desirable." +
        "<br><br>" +
        "(C) 'organize' means to arrange into a structured whole; order." +
        "<br><br>" +
        "(D) 'donate' means to give (money or goods) for a good cause.",
    chinese_explanation: "(A) '囤积' 意味着积累和存储（大量的某物）以备将来使用。" +
        "<br><br>" +
        "(B) '丢弃' 意味着将不再有用或不需要的东西处理掉。" +
        "<br><br>" +
        "(C) '整理' 意味着将某物排列成一个结构化的整体；有序。" +
        "<br><br>" +
        "(D) '捐赠' 意味着为一个好的事业捐赠（金钱或物品）。"
    },
    {
        id: 8,
        question: "The journalist worked hard to __________ the false claims made by the politician, by presenting clear evidence to the contrary.",
        chinese_question: "记者努力 __________ 政客的虚假主张，通过提出相反的明确证据。",
        answers: [
                { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "B", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
                { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
                { option: "D", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'refute' means to prove a statement or theory to be wrong or false." +
            "<br><br>" +
            "(A) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(B) 'confirm' means to establish the truth or correctness of something previously believed, suspected, or feared to be the case." +
            "<br><br>" +
            "(C) 'accept' means to consent to receive or undertake something offered.",
        chinese_explanation: "(D) '反驳'一词意味着证明一个陈述或理论是错误的或虚假的。" +
            "<br><br>" +
            "(A) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(B) '确认' 意味着确定之前被认为、怀疑或担心的事情的真实性或正确性。" +
            "<br><br>" +
            "(C) '接受' 意味着同意接受或承担提供的东西。"
    },
    {
        id: 9,
    question: "The teacher decided to __________ more time for the difficult topics in the syllabus.",
    chinese_question: "老师决定为课程中难度较大的主题 __________ 更多时间。",
    answers: [
        { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "minimize", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "C", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
        { option: "D", answer: "allocate", chinese_answer: "分配", chinese_romanization: "fēnpèi" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'allocate' means to distribute resources or duties for a particular purpose." +
        "<br><br>" +
        "(A) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(B) 'minimize' means to reduce to the smallest possible amount or degree." +
        "<br><br>" +
        "(C) 'obscure' means to keep from being seen; conceal.",
    chinese_explanation: "(D) '分配' 意味着为特定目的分配资源或职责。" +
        "<br><br>" +
        "(A) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(B) '减少' 意味着减少到尽可能小的数量或程度。" +
        "<br><br>" +
        "(C) '遮掩' 意味着避免被看到；隐藏。"
    },
    {
        id: 10,
    question: "The team's failure in the tournament led to them being __________ to a lower league for the next season.",
    chinese_question: "球队在比赛中的失败导致他们在下个赛季被 __________ 到更低的联赛。",
    answers: [
        { option: "A", answer: "promoted", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "B", answer: "relegated", chinese_answer: "降级", chinese_romanization: "jiàngjí" },
        { option: "C", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'relegated' means to assign an inferior rank or position to someone or something." +
        "<br><br>" +
        "(A) 'promoted' means to raise someone to a higher rank or position." +
        "<br><br>" +
        "(C) 'praised' means to express warm approval or admiration." +
        "<br><br>" +
        "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(B) '降级' 一词意味着将某人或某物分配到较低的级别或职位。" +
        "<br><br>" +
        "(A) '提升' 意味着将某人提升到更高的职位或级别。" +
        "<br><br>" +
        "(C) '赞美' 意味着表示热烈的赞同或钦佩。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
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
